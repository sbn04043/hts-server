import express from 'express';
import schoolController from './school.controller';
import stockItemController from './stockItem.controller';
import Order from '../service/order.controller';

const router = express.Router();

router.use('/schools', schoolController);
router.use('/stocks', stockItemController);
router.use('/Order', Order);

export default router;
