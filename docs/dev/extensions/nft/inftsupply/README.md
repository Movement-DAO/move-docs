# INFTSupply

#### Code

https://github.com/DAOLABS-WTF/juice-contracts-v3/blob/feat/extensions/contracts/extensions/NFT/INFTSupply.sol

#### Definition

```
interface INFTSupply {
  function totalSupply() external view returns (uint256);

  function balanceOf(address owner) external view returns (uint256);

  function ownerOf(uint256 _tokenId) external view returns (address owner);
}
```
