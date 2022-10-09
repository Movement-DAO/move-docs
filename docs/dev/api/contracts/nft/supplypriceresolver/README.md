# SupplyPriceResolver

*NFT pricing contract based on total supply.*

#### Code

https://github.com/DAOLABS-WTF/juice-contracts-v3/blob/feat/extensions/contracts/extensions/NFT/SupplyPriceResolver.sol

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
|`INFTPriceResolver`||

#### Constructor

```
/**
 * @notice Creates a resolver that calculates a tiered price based on current token supply. Price will be either multipied by multipli
 * (currentSupply % tierSize) or multiplier ** (currentSupply % tierSize).
 * @param _basePrice Minimum price to return.
 * @param _multiplier Price multiplyer.
 * @param _tierSize Price tier size.
 * @param _priceCap Maximum price to return.
 * @param _priceFunction Price multiplier application, linear or exponential.
 */
constructor(
  uint256 _basePrice,
  uint256 _multiplier,
  uint256 _tierSize,
  uint256 _priceCap,
  PriceFunction _priceFunction
) {
  basePrice = _basePrice;
  multiplier = _multiplier;
  tierSize = _tierSize;
  priceCap = _priceCap;
  priceFunction = _priceFunction;
}
```

- `_basePrice` is the minimum price to return.
- `_multiplier` is the price multiplyer.
- `_tierSize` is the price tier size.
- `_priceCap` is the maximum price to return.
- `_priceFunction` is a `PriceFunction` which represents the price multiplier application (either linear or exponential).

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
