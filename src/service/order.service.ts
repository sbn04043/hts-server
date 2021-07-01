import { Op } from 'sequelize';
import Order from '../model/order.model';
import { NewOrder, OrderResult } from '../types/order';

export const makeOrder = async (order: NewOrder): Promise<OrderResult | null> => {
  let remainCount = order.count;
  const matchType = order.type === 'buy' ? 'sell' : 'buy';

  do {
    const existOrder: Order | null = await Order.findOne({
      where: {
        type: matchType,
        unitPrice: {
          [Op.gte]: order.unitPrice,
        },
        status: 'order',
      },
    });

    if (!existOrder) {
      break;
    }

    if (remainCount >= existOrder.count) {
      await existOrder.update({
        count: 0,
        status: 'confirm',
      });
      remainCount = remainCount - existOrder.count;
    } else {
      await existOrder.update({
        count: existOrder.count - remainCount,
      });
      remainCount = 0;
    }
  } while (remainCount > 0);

  const currentStatus = remainCount > 0 ? 'order' : 'confirm';

  const newOrder: Order = await Order.create({
    type: order.type,
    status: currentStatus,
    unitPrice: order.unitPrice,
    count: remainCount,
    totalPrice: order.count * order.unitPrice,
    userId: order.userId,
    stockItemId: order.stockItemId,
  });

  return {
    orderId: newOrder.id,
    type: newOrder.type,
    status: newOrder.status,
    remainCount: newOrder.count,
    totalPrice: newOrder.totalPrice,
  };
};
