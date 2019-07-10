# 接口介绍

## 现货接口
### 行情接口
```golang
	GetTicker(currency CurrencyPair) (*Ticker, error)
	GetDepth(size int, currency CurrencyPair) (*Depth, error)
	GetKlineRecords(currency CurrencyPair, period , size, since int) ([]Kline, error)
	GetTrades(currencyPair CurrencyPair, since int64) ([]Trade, error)
	GetExchangeName() string
```

### 交易接口
```golang
	LimitBuy(amount, price string, currency CurrencyPair) (*Order, error)
	LimitSell(amount, price string, currency CurrencyPair) (*Order, error)
	MarketBuy(amount, price string, currency CurrencyPair) (*Order, error)
	MarketSell(amount, price string, currency CurrencyPair) (*Order, error)
	CancelOrder(orderId string, currency CurrencyPair) (bool, error)
	GetOneOrder(orderId string, currency CurrencyPair) (*Order, error)
	GetUnfinishOrders(currency CurrencyPair) ([]Order, error)
	GetOrderHistorys(currency CurrencyPair, currentPage, pageSize int) ([]Order, error)
```
### 账户接口
```golang
	GetAccount() (*Account, error)
```

## 期货接口
### 行情接口
```golang
	GetExchangeName() string
	GetFutureEstimatedPrice(currencyPair CurrencyPair) (float64, error)
	GetFutureTicker(currencyPair CurrencyPair, contractType string) (*Ticker, error)
	GetFutureDepth(currencyPair CurrencyPair, contractType string, size int) (*Depth, error)
	GetFutureIndex(currencyPair CurrencyPair) (float64, error)
	GetDeliveryTime() (int, int, int, int)
	GetKlineRecords(contract_type string, currency CurrencyPair, period, size, since int) ([]FutureKline, error)
    GetTrades(contract_type string, currencyPair CurrencyPair, since int64) ([]Trade, error)
    GetFee() (float64, error)
	GetContractValue(currencyPair CurrencyPair) (float64, error)

```

### 交易接口
```golang
	PlaceFutureOrder(currencyPair CurrencyPair, contractType, price, amount string, openType, matchPrice, leverRate int) (string, error)
	FutureCancelOrder(currencyPair CurrencyPair, contractType, orderId string) (bool, error)
	GetFuturePosition(currencyPair CurrencyPair, contractType string) ([]FuturePosition, error)
	GetFutureOrders(orderIds []string, currencyPair CurrencyPair, contractType string) ([]FutureOrder, error)
	GetFutureOrder(orderId string, currencyPair CurrencyPair, contractType string) (*FutureOrder, error)
	GetUnfinishFutureOrders(currencyPair CurrencyPair, contractType string) ([]FutureOrder, error)
```
### 账户接口
```golang
	GetFutureUserinfo() (*FutureAccount, error)
```
