export type PickupType = 'immediate' | 'preorder';

export interface OrderFormData {
    customerName: string;
    customerPhone: string;
    customerEmail: string;
    pickupType: PickupType;
    pickupDate?: string;
    pickupTime?: string;
    pickupPoint: string;
    comment?: string;
}

export interface OrderItem {
    id: string;
    title: string;
    price: number;
    quantity: number;
    imageUrl?: string;
    baseStyle?: string;
    abv?: number;
    type: 'catalog' | 'custom';
}

export interface OrderSummary {
    itemsCount: number;
    totalAmount: number;
    pickupPoint: string;
    pickupType: PickupType;
}