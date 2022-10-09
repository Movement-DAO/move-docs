# INFTRewardDataSourceDelegate

#### Code

https://github.com/DAOLABS-WTF/juice-contracts-v3/blob/feat/extensions/contracts/extensions/interfaces/INFTRewardDataSourceDelegate.sol

#### Definition

```
interface INFTRewardDataSourceDelegate is ITokenSupplyDetails {
  function transfer(address _to, uint256 _id) external;

  function mint(address) external returns (uint256);

  function burn(address, uint256) external;

  function isOwner(address, uint256) external view returns (bool);

  function contractURI() external view returns (string memory);

  function setContractUri(string calldata _contractMetadataUri) external;

  function setTokenUri(string calldata _uri) external;

  function setTokenUriResolver(IToken721UriResolver _tokenUriResolverAddress) external;

  function setTransferrable(bool _transferrable) external;
}
```
