# TieredPriceResolver

*`TieredPriceResolver` takes tier configuration that includes tier floor contribution amount, tier size and id definition.*

#### Code

https://github.com/DAOLABS-WTF/juice-contracts-v3/blob/feat/extensions/contracts/extensions/NFTRewards/TieredPriceResolver.sol

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
  @notice This price resolver allows project admins to define multiple reward tiers for contributions and issue NFTs to people who contribute at those levels. It is also possible to limit total number of NFTs issues and total number of NFTs issued per account regardless of the contribution amount. Let's say the total number of NFTs defined in the tiers is 10k, the global mint cap can limit that number to 5000 across all tiers.

  @dev Tiers list must be sorted by floor otherwise contributors won't be rewarded properly.

  @param _contributionToken Token used for contributions, use JBTokens.ETH to specify ether.
  @param _mintCap Global mint cap, this allows limiting total NFT supply in addition to the limits already defined in the tiers.
  @param _userMintCap Per-account mint cap.
  @param _tiers Sorted tier collection.
 */
constructor(
  address _contributionToken,
  uint256 _mintCap,
  uint256 _userMintCap,
  RewardTier[] memory _tiers
) {
  contributionToken = _contributionToken;
  globalMintAllowance = _mintCap;
  userMintCap = _userMintCap;

  if (_tiers.length > 0) {
    tiers.push(_tiers[0]);
    for (uint256 i = 1; i < _tiers.length; i++) {
      if (_tiers[i].contributionFloor < _tiers[i - 1].contributionFloor) {
        revert INVALID_PRICE_SORT_ORDER(i);
      }

      if (_tiers[i].idCeiling - _tiers[i].remainingAllowance < _tiers[i - 1].idCeiling) {
        revert INVALID_ID_SORT_ORDER(i);
      }

      tiers.push(_tiers[i]);
    }
  }
}
```
  address _contributionToken,
  uint256 _mintCap,
  uint256 _userMintCap,
  RewardTier[] memory _tiers

- `_contributionToken` is the address of the token used for contributions. Use JBTokens.ETH to specify ether.
- `_mintCap` is the global mint cap. This allows for limiting the total NFT supply in addition to the limits already defined in the tiers.
- `_userMintCap` is a per-account mint cap.
- `_tiers` is an array of `RewardTier` structs which represent a sorted collection of tiers.

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
