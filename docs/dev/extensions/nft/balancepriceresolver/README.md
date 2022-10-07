# BalancePriceResolver

*NFT pricing contract based on address balance.*

#### Code

https://github.com/DAOLABS-WTF/juice-contracts-v3/blob/feat/extensions/contracts/extensions/NFT/BalancePriceResolver.sol

#### Addresses

Ethereum Mainnet: *Not deployed*

Goerli Testnet: *Not deployed*

#### Interfaces

|Name|Description|
|-|-|
|||

#### Inheritance

|Contract|Description|
|-|-|
|`SupplyPriceResolver`||

#### Constructor

```
  /**
   * @notice blah
   * @param _basePrice Minimum price to return.
   * @param _freeSample blah.
   * @param _nthFree blah.
   * @param _freeMintCap blah.
   * @param _priceCap Maximum price to return.
   * @param _priceFunction Price multiplier application, linear, exponential, contant.
   * @param _multiplier blah
   * @param _tierSize blah
   */
  constructor(
    uint256 _basePrice,
    bool _freeSample,
    uint256 _nthFree,
    uint256 _freeMintCap,
    uint256 _priceCap,
    PriceFunction _priceFunction,
    uint256 _multiplier,
    uint256 _tierSize
  ) SupplyPriceResolver(_basePrice, _multiplier, _tierSize, _priceCap, _priceFunction) {
    freeSample = _freeSample;
    nthFree = _nthFree;
    freeMintCap = _freeMintCap;
  }
```

Params not yet documented in code.

#### Events

|Name|Data|
|-|-|
|||

#### Properties

|Name|Definition|
|-|-|
|||

#### Read

|Function|Definition|
|-|-|
|||

#### Write

|Function|Definition|
|-|-|
|||
