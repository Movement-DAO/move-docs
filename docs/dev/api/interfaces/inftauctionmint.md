# INFTAuctionMint

#### Code

https://github.com/DAOLABS-WTF/juice-contracts-v3/blob/feat/extensions/contracts/extensions/NFT/INFTAuctionMint.sol

#### Definition

```
interface INFTAuctionMint {
  function mintFor(address) external returns (uint256);

  function transferFrom(address from, address to, uint256 id) external;

  function unitPrice() external view returns (uint256);
}
```
