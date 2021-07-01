import express from 'express';
import { makeOrder } from '../service/order.service';
import { NewOrder, OrderResult } from '../types/order';

const router = express.Router();

router.post('/', async (req, res) => {
  const order: NewOrder = req.body;
  const result: OrderResult | null = await makeOrder(order);

  if (!result) {
    return res.status(400).json();
  }
  return res.status(201).json(result);
});

export default router;
