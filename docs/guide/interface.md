# 接口介绍

## 统一接口使用

调用 APIBuilder

```go
  package main

   import (
   	"github.com/nntaoli-project/GoEx"
   	"github.com/nntaoli-project/GoEx/builder"
   	"log"
   	"time"
   )

   func main() {
	// build spot api
   	apiBuilder := builder.NewAPIBuilder()
   	api := apiBuilder.APIKey("").APISecretkey("").Build(goex.HUOBI_PRO)
   	log.Println(api.GetExchangeName())
   	log.Println(api.GetTicker(goex.BTC_USD))
   	log.Println(api.GetDepth(2, goex.BTC_USD))

   	//build future api
   	futureApi := apiBuilder.APIKey("").APISecretkey("").BuildFuture(goex.HBDM)
   	log.Println(futureApi.GetExchangeName())
   	log.Println(futureApi.GetFutureTicker(goex.BTC_USD, goex.QUARTER_CONTRACT))
   	log.Println(futureApi.GetFutureDepth(goex.BTC_USD, goex.QUARTER_CONTRACT, 5))
   }

```

### APIBuilder 支持列表

```go
//exchanges
const (
	OKCOIN_CN   = "okcoin.cn"
	OKCOIN_COM  = "okcoin.com"
	OKEX        = "okex.com"
	OKEX_V3     = "okex.com_v3"
	OKEX_FUTURE = "okex.com_future"
	OKEX_SWAP   = "okex.com_swap"
	HUOBI       = "huobi.com"
	HUOBI_PRO   = "huobi.pro"
	BITSTAMP    = "bitstamp.net"
	KRAKEN      = "kraken.com"
	ZB          = "zb.com"
	BITFINEX    = "bitfinex.com"
	BINANCE     = "binance.com"
	POLONIEX    = "poloniex.com"
	COINEX      = "coinex.com"
	BITHUMB     = "bithumb.com"
	GATEIO      = "gate.io"
	BITTREX     = "bittrex.com"
	GDAX        = "gdax.com"
	WEX_NZ      = "wex.nz"
	BIGONE      = "big.one"
	COIN58      = "58coin.com"
	FCOIN       = "fcoin.com"
	HITBTC      = "hitbtc.com"
	BITMEX      = "bitmex.com"
	CRYPTOPIA   = "cryptopia.co.nz"
	HBDM        = "hbdm.com"
)
```

### 构造 APIBuilder

#### NewAPIBuilder2

传入自定义的 HttpClientConfig 配置

#### NewCustomAPIBuilder

传入自定义的 http.Client 配置

#### NewAPIBuilder

如果使用默认的 NewAPIBuilder 构造后，对应的 clinet 也可以通过`HttpProxy`,`HttpTimeout`或者是`GetHttpClient`,`GetHttpClientConfig`进行再改造

### APIBuilder 对应的交易所特性

在 APIBuilder 中可加入不同交易所的不同特性，如

- 有的交易所需指定`ClientId`, 可通过`ClientID`设置
- 有的交易所需指定`Passphrase`, 可通过`ApiPassphrase`设置

## APIBuilder 提供的现货接口

### 行情接口

```go
	GetTicker(currency CurrencyPair) (*Ticker, error)
	GetDepth(size int, currency CurrencyPair) (*Depth, error)
	GetKlineRecords(currency CurrencyPair, period , size, since int) ([]Kline, error)
	GetTrades(currencyPair CurrencyPair, since int64) ([]Trade, error)
	GetExchangeName() string
```

### 交易接口

```go
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

```go
	GetAccount() (*Account, error)
```

## APIBuilder 提供的期货接口

### 行情接口

```go
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

```go
	PlaceFutureOrder(currencyPair CurrencyPair, contractType, price, amount string, openType, matchPrice, leverRate int) (string, error)
	FutureCancelOrder(currencyPair CurrencyPair, contractType, orderId string) (bool, error)
	GetFuturePosition(currencyPair CurrencyPair, contractType string) ([]FuturePosition, error)
	GetFutureOrders(orderIds []string, currencyPair CurrencyPair, contractType string) ([]FutureOrder, error)
	GetFutureOrder(orderId string, currencyPair CurrencyPair, contractType string) (*FutureOrder, error)
	GetUnfinishFutureOrders(currencyPair CurrencyPair, contractType string) ([]FutureOrder, error)
```

### 账户接口

```go
	GetFutureUserinfo() (*FutureAccount, error)
```

## 单独引用某平台接口

### OKEX

OKEX 实现了 V3 协议，可用如下方式获取全部交易类型的 API

```go

import (
	"github.com/nntaoli-project/GoEx/okex"
)

var okex = NewOKEx(&goex.APIConfig{
                    	Endpoint: "https://www.okex.com",
                    	//HttpClient: &http.Client{
                    	//	Transport: &http.Transport{
                    	//		Proxy: func(req *http.Request) (*url.URL, error) {
                    	//			return &url.URL{
                    	//				Scheme: "socks5",
                    	//				Host:   "127.0.0.1:1080"}, nil
                    	//		},
                    	//	},
                    	//},
                    	ApiKey:        "",
                    	ApiSecretKey:  "",
                    	ApiPassphrase: "",
                    })
 var (
   okexSpot = okex.OKExSpot
   okexSwap = okex.OKExSwap   //永续合约实现
   okexFuture=okex.OKExFuture //交割合约实现
   okexWallet =okex.OKExWallet //资金账户（钱包）操作
   )

  //接口调用,更多接口调用请看代码
  log.Prinitln(okexSpot.GetAccount()) //获取账户资产信息
  //okexSpot.BatchPlaceOrders([]goex.Order{...}) //批量下单,单个交易对同时最大只能下10笔
  log.Println(okexSwap.GetFutureUserinfo()) //获取账户权益信息
  log.Println(okexFuture.GetFutureUserinfo())//获取账户权益信息
```
