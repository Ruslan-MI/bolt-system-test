const OperationType = {
    BUY: `BUY`,
    SELL: `SELL`,
};

const getOperationResult = (type, price, quantity) => {
    switch (type) {
        case OperationType.BUY:
            return -price * quantity;
        case OperationType.SELL:
            return price * quantity;
        default:
            return 0;
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
        const operationResult = getOperationResult(type, price, qnt);

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
