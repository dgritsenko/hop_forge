// src/store/slices/cartSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store/store';
import { CartItem, CartItemWithQuantity, CartState } from '@/types/beerItem';

const STORAGE_KEY = 'hop-forge-cart';

const loadCartFromStorage = (): CartItemWithQuantity[] => {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const saveCartToStorage = (items: CartItemWithQuantity[]) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // ignore storage errors
  }
};

const calculateTotal = (items: CartItemWithQuantity[]): number => {
  return items.reduce((sum, cartItem) => sum + cartItem.item.price * cartItem.quantity, 0);
};

const initialState: CartState = {
  items: loadCartFromStorage(),
  total: calculateTotal(loadCartFromStorage()),
  loading: false,
  error: null,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existingIndex = state.items.findIndex(
        (cartItem) => cartItem.item.id === action.payload.id
      );

      if (existingIndex >= 0) {
        state.items[existingIndex].quantity += 1;
      } else {
        state.items.push({ item: action.payload, quantity: 1 });
      }

      state.total = calculateTotal(state.items);
      state.error = null;
      saveCartToStorage(state.items);
    },

    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((cartItem) => cartItem.item.id !== action.payload);
      state.total = calculateTotal(state.items);
      state.error = null;
      saveCartToStorage(state.items);
    },

    updateQuantity: (state, action: PayloadAction<{ itemId: string; quantity: number }>) => {
      const { itemId, quantity } = action.payload;

      if (quantity <= 0) {
        state.items = state.items.filter((cartItem) => cartItem.item.id !== itemId);
      } else {
        const cartItem = state.items.find((cartItem) => cartItem.item.id === itemId);
        if (cartItem) {
          cartItem.quantity = quantity;
        }
      }

      state.total = calculateTotal(state.items);
      state.error = null;
      saveCartToStorage(state.items);
    },

    incrementQuantity: (state, action: PayloadAction<string>) => {
      const cartItem = state.items.find((cartItem) => cartItem.item.id === action.payload);
      if (cartItem) {
        cartItem.quantity += 1;
        state.total = calculateTotal(state.items);
        saveCartToStorage(state.items);
      }
    },

    decrementQuantity: (state, action: PayloadAction<string>) => {
      const cartItem = state.items.find((cartItem) => cartItem.item.id === action.payload);
      if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity -= 1;
        state.total = calculateTotal(state.items);
        saveCartToStorage(state.items);
      } else if (cartItem && cartItem.quantity === 1) {
        state.items = state.items.filter((item) => item.item.id !== action.payload);
        state.total = calculateTotal(state.items);
        saveCartToStorage(state.items);
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      state.error = null;
      saveCartToStorage(state.items);
    },

    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  addItem,
  removeItem,
  updateQuantity,
  incrementQuantity,
  decrementQuantity,
  clearCart,
  clearError,
} = cartSlice.actions;

// Selectors
export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartTotal = (state: RootState) => state.cart.total;
export const selectCartLoading = (state: RootState) => state.cart.loading;
export const selectCartError = (state: RootState) => state.cart.error;

export const selectIsItemInCart = (state: RootState, itemId: string) =>
  state.cart.items.some((cartItem) => cartItem.item.id === itemId);

export const selectItemQuantity = (state: RootState, itemId: string) => {
  const cartItem = state.cart.items.find((cartItem) => cartItem.item.id === itemId);
  return cartItem ? cartItem.quantity : 0;
};

export default cartSlice.reducer;