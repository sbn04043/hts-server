import express from 'express';
import schoolController from './school.controller';
import stockItemController from './stockItem.controller';

const router = express.Router();

router.use('/schools', schoolController);
router.use('/stocks', stockItemController);

export default router;
