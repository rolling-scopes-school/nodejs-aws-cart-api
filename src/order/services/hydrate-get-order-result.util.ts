import { Order } from '../models';
import { OrderStatus } from '../type';

type GetOrderResult = {
  id: string;
  userId: string;
  cartId: string;
  delivery: {
    address: string;
    firstName: string;
    lastName: string;
  };
  comment: string;
  productId: string;
  count: number;
  statusId: string;
  status: OrderStatus;
  timestamp: number;
};

export function hydrateGetOrderResult(res: GetOrderResult[]): Order {
  const { id, userId, cartId, delivery } = res[0];

  const order: Partial<Order> = {
    id,
    userId,
    cartId,
    address: { ...delivery, comment: '' },
    statusHistory: [],
    items: [],
  };

  for (let i = 0; i < res.length; i++) {
    const { productId, count, statusId, status, timestamp, comment } = res[i];
    if (statusId) {
      const statusIndex = order.statusHistory.findIndex(
        ({ status: s }) => s === status,
      );

      if (statusIndex === -1) {
        order.statusHistory.push({
          status,
          timestamp,
          comment,
        });
      }

      if (productId) {
        const productIndex = order.items.findIndex(
          ({ productId: p }) => p === productId,
        );

        if (productIndex === -1) {
          order.items.push({
            productId,
            count,
          });
        }
      }
    }
  }

  return order as Order;
}
