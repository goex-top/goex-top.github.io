# 特殊接口介绍
各个交易所独有的接口
## FCoin
### 按小时获取账户交易记录
```golang
func (fc *FCoin) GetHoursOrderHistorys(currency CurrencyPair, start time.Time, hours int64) ([]Order, error) 
```
### 按天获取账户交易记录

```golang
func (fc *FCoin) GetDaysOrderHistorys(currency CurrencyPair, start time.Time, days int64) ([]Order, error) 
```

### 获取交易所交易对详细信息
```golang
func (fc *FCoin) GetTradeSymbols(currencyPair CurrencyPair) (*TradeSymbol, error) 
```
