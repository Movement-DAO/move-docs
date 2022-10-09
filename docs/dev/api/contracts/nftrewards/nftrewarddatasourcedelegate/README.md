# NFTRewardDataSourceDelegate

*`NFTRewardDataSourceDelegate` implements several Juicebox interfaces (`IJBFundingCycleDataSource`, `IJBPayDelegate`, `IJBRedemptionDelegate`) that make it possible to use it as a funding cycle data source. It also acts as an ERC721 reward token itself. The contract is highly configurable through constructor parameters. Note that this isn't meant to replace the ERC20 project token distribution.*

#### Code

https://github.com/DAOLABS-WTF/juice-contracts-v3/blob/feat/extensions/contracts/extensions/NFTRewards/NFTRewardDataSourceDelegate.sol

#### Addresses

Ethereum Mainnet: *Not deployed*

Goerli Testnet: *Not deployed*

#### Interfaces

|Name|Description|
|-|-|
|`INFTRewardDataSourceDelegate`||
|`IJBFundingCycleDataSource`||
|`IJBPayDelegate`||
|`IJBRedemptionDelegate`||


#### Inheritance

|Contract|Description|
|-|-|
|||
|`ERC721Rari`||
|`Ownable`||

#### Constructor

```
/**
 * @param projectId JBX project id this reward is associated with.
 * @param directory JBX directory.
 * @param maxSupply Total number of reward tokens to distribute.
 * @param minContribution Minimum contribution amount to be eligible for this reward.
 * @param _name The name of the token.
 * @param _symbol The symbol that the token should be represented by.
 * @param _uri Token base URI.
 * @param _tokenUriResolverAddress Custom uri resolver.
 * @param _contractMetadataUri Contract metadata uri.
 * @param _admin Set an alternate owner.
 * @param _priceResolver Custom uri resolver.
 */
constructor(
  uint256 projectId,
  IJBDirectory directory,
  uint256 maxSupply,
  JBTokenAmount memory minContribution,
  string memory _name,
  string memory _symbol,
  string memory _uri,
  IToken721UriResolver _tokenUriResolverAddress,
  string memory _contractMetadataUri,
  address _admin,
  IPriceResolver _priceResolver
) ERC721Rari(_name, _symbol) {
  // JBX
  _projectId = projectId;
  _directory = directory;
  _maxSupply = maxSupply;
  _minContribution = minContribution;

  // ERC721
  _baseUri = _uri;
  _tokenUriResolver = _tokenUriResolverAddress;
  _contractUri = _contractMetadataUri;

  if (_admin != address(0)) {
    _transferOwnership(_admin);
  }

  priceResolver = _priceResolver;

  transferrable = true;
}
```

- `projectId` denotes the JBX project ID this reward is associated with.
- `directory` is an `IJBDirectory`.
- `maxSupply` represents the total number of reward tokens to distribute.
- `minContribution`  denotes the minimum contribution amount to be eligible for this reward.
- `_name` is the name of the token.
- `_symbol` is the symbol that the token should be represented by.
- `_uri` is the token base URI.
- `_tokenUriResolverAddress` is the address of a custom URI resolver.
- `_contractMetadataUri` is the contract's metadata uri.
- `_admin` allows the deployer to set an alternate owner.
- `_priceResolver` is an `IPriceResolver` which is a custom URI resolver.

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
