export type NewOrder = {
  userId: bigint;
  stockItemId: bigint;
  type: 'buy' | 'sell';
  unitPrice: number;
  count: number;
};

export type OrderResult = {
  orderId: bigint;
  type: 'buy' | 'sell';
  status: 'order' | 'confirm' | 'cancel';
  remainCount: number;
  totalPrice: bigint;
};
