# OpenTieredTokenUriResolver

*Token URI resolver for `OpenTieredPriceResolver`.*

#### Code

https://github.com/DAOLABS-WTF/juice-contracts-v3/blob/feat/extensions/contracts/extensions/NFTRewards/OpenTieredTokenUriResolver.sol

#### Addresses

Ethereum Mainnet: *Not deployed*

Goerli Testnet: *Not deployed*

#### Interfaces

|Name|Description|
|-|-|
|`IToken721UriResolver`||

#### Inheritance

|Contract|Description|
|-|-|
|||

#### Constructor

```
/**
  @notice An ERC721-style token URI resolver that appends token id to the end of a base uri.

  @dev This contract is meant to go with NFTs minted using OpenTieredPriceResolver. The URI returned from tokenURI is based on the low 8 bits of the token id provided.

  @param _baseUri Root URI
  */
constructor(string memory _baseUri) {
  baseUri = _baseUri;
}
```

- `_baseUri` is the root URI.

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
