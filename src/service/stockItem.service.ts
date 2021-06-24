import StockItem from '../model/stockItem.model';
import StockItemHistory from '../model/stockItemHistory.model';
import { CurrentStockPrice } from '../types/stocks';

export const getStockItems = async () => {
  const stockItems: StockItem[] = await StockItem.findAll({
    include: [
      {
        model: StockItemHistory,
        where: {
          date: Date.now(),
        },
      },
    ],
  });

  const items: CurrentStockPrice[] = stockItems.map((item: StockItem) => {
    const history: StockItemHistory = item.histories[0];

    return {
      name: item.name,
      currentPrice: history.price,
      startPrice: history.startPrice,
      endPrice: history.endPrice,
      percent: (history.price - history.startPrice) / history.startPrice,
    };
  });

  return items;
};
