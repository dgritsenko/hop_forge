export type CatalogTheme = 'hot-deals' | 'new-arrivals' | 'best-value' | 'unique-experience';

export interface IngredientPreview {
  name: string;
  amount?: number;
  unit?: string;
}

export interface CustomIngredient extends IngredientPreview {
  price: number;
  category: 'hop' | 'malt' | 'yeast' | 'additive';
}

export interface BeerItemBase {
  id: string;
  title: string;
  description: string;
  baseStyle: string;
  abv: number;
  ibu?: number;
  volume: number;
  isAvailable: boolean;
  createdAt: string;
}

export interface CatalogItem extends BeerItemBase {
  type: 'catalog';
  category: CatalogTheme;
  price: number;
  ingredients: IngredientPreview[];
}

export interface CustomRecipe extends BeerItemBase {
  type: 'custom';
  recipeId: string;
  imageUrl?:string
  price: number;
  customIngredients: CustomIngredient[];
  constructorState?: Record<string, unknown>;
}

export type CartItem = CatalogItem | CustomRecipe;

export interface CartItemWithQuantity {
  item: CartItem;
  quantity: number;
}

export interface CatalogSection {
  id: CatalogTheme;
  title: string;
  description?: string;
  items: CatalogItem[];
}

export interface CartState {
  items: CartItemWithQuantity[];
  total: number;
  loading: boolean;
  error: string | null;
}