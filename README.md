# Задача на расчет прибыли инвестиционного портфеля

### Дано 

Список операций по счету (id, type, ticker, price, qnt).

### Найти 

Абсолютные прибыли по всему счету и по каждой позиции в отдельности. 

Результат представить объектом вида:

```
{
    absProfit: number,
    portfolio: {
        ticker: number,
        ...
    }
}
```

### Примечание

Абсолютная прибыль есть сумма всех денежных потоков. Операции покупки считать с отрицательной суммой, а продажи - положительной.

Для запуска использовать команду:

```
npm run test
```
