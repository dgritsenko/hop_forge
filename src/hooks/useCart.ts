'use client';

import { useAppSelector, useAppDispatch } from '@/store/hooks';
import {
  selectCartItems,
  selectCartTotal,
  selectCartError,
  selectIsItemInCart,
  selectItemQuantity,
  addItem,
  removeItem,
  incrementQuantity,
  decrementQuantity,
  clearCart,
  clearError,
} from '@/store/slices/cartSlice';
import { CartItem } from '@/types/beerItem';

export const useCart = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartItems);
  const total = useAppSelector(selectCartTotal);
  const error = useAppSelector(selectCartError);

  const addItemToCart = (item: CartItem) => {
    dispatch(addItem(item));
  };

  const removeItemFromCart = (itemId: string) => {
    dispatch(removeItem(itemId));
  };

  const incrementItemQuantity = (itemId: string) => {
    dispatch(incrementQuantity(itemId));
  };

  const decrementItemQuantity = (itemId: string) => {
    dispatch(decrementQuantity(itemId));
  };

  const clearCartItems = () => {
    dispatch(clearCart());
  };

  const isInCart = (itemId: string) => {
    return useAppSelector((state) => selectIsItemInCart(state, itemId));
  };

  const getItemQuantity = (itemId: string) => {
    return useAppSelector((state) => selectItemQuantity(state, itemId));
  };

  const clearCartError = () => {
    dispatch(clearError());
  };

  return {
    items,
    total,
    error,
    addItemToCart,
    removeItemFromCart,
    incrementItemQuantity,
    decrementItemQuantity,
    clearCartItems,
    isInCart,
    getItemQuantity,
    clearCartError,
  };
};