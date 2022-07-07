const OperationType = {
  BUY: 'BUY',
  SELL: 'SELL',
};

const getOperationSigh = (type) => {
  switch (type) {
    case OperationType.BUY:
      return -1;
    default:
      return 1;
  }
};

const main = (operations) => {
  const portfolio = {};
  let absProfit = 0;

  operations.forEach(({
    type,
    ticker,
    price,
    qnt,
  }) => {
    const operationResult = getOperationSigh(type) * price * qnt;

    absProfit += operationResult;

    if (!portfolio[ticker]) {
      portfolio[ticker] = 0;
    }

    portfolio[ticker] += operationResult;
  });

  return {
    absProfit,
    portfolio,
  };
};

module.exports = main;
