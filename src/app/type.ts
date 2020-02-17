export type Order = {
  _id: string;
  total: number;
  createdAt: string;
  updatedAt: string;
  status: OrderStatus;
};

export type UiStatus = 'Idle' | 'Processing' | 'Error' | 'Success';

export type OrderStatus = 'Created' | 'Confirmed' | 'Cancelled' | 'Delivered';
