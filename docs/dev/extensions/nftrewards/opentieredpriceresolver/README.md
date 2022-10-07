# OpenTieredPriceResolver

*Another, simpler and gas-cheaper example of a price resolver is `OpenTieredPriceResolver`, this contract comes with its own token URI resolver as well: `OpenTieredTokenUriResolver`. It is necessary to use them together or to implement another `IToken721UriResolver`. `Open TieredPriceResolver` is a leaner version that removes caps and range limits. This reduces storage and call gas costs.*

#### Code

https://github.com/DAOLABS-WTF/juice-contracts-v3/blob/feat/extensions/contracts/extensions/NFTRewards/OpenTieredPriceResolver.sol

#### Addresses

Ethereum Mainnet: *Not deployed*

Goerli Testnet: *Not deployed*

#### Interfaces

|Name|Description|
|-|-|
|`IPriceResolver`||

#### Inheritance

|Contract|Description|
|-|-|
|||

#### Constructor

```
/**
  @notice This price resolver allows project admins to define multiple reward tiers for contributions and issue NFTs to people who con
ibute at those levels.

  @dev This pride resolver requires a custom token uri resolver which is defined in OpenTieredTokenUriResolver.

  @dev Tiers list must be sorted by floor otherwise contributors won't be rewarded properly.

  @dev There is a limit of 255 tiers.

  @param _contributionToken Token used for contributions, use JBTokens.ETH to specify ether.
  @param _tiers Sorted tier collection.
 */
constructor(address _contributionToken, OpenRewardTier[] memory _tiers) {
  contributionToken = _contributionToken;

  if (_tiers.length > type(uint8).max) {
    revert();
  }

  if (_tiers.length > 0) {
    tiers.push(_tiers[0]);
    for (uint256 i = 1; i < _tiers.length; i++) {
      if (_tiers[i].contributionFloor < _tiers[i - 1].contributionFloor) {
        revert INVALID_PRICE_SORT_ORDER(i);
      }

      tiers.push(_tiers[i]);
    }
  }
}
```

- `_contributionToken` is the address of the token used for contributions. Use JBTokens.ETH to specify ether.
- `_tiers` is in array of `OpenRewardTier` structs which represent a sorted collection of tiers.

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
