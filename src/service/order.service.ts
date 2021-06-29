import { Op } from 'sequelize';
import Order from '../model/order.model';
import { NewOrder, OrderResult } from '../types/order';

export const makeOrder = async (
    order: NewOrder,
    ): Promise<OrderResult | null> => {
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
        }
    }
}