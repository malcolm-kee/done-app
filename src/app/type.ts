export type Order = {
  _id: string;
  total: number;
};

export type UiStatus = 'Idle' | 'Processing' | 'Error' | 'Success';

export type OrderStatus = 'Created' | 'Confirmed' | 'Cancelled' | 'Delivered';
