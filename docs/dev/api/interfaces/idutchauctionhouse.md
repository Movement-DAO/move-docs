# IDutchAuctionHouse

#### Code

https://github.com/DAOLABS-WTF/juice-contracts-v3/blob/feat/extensions/contracts/extensions/Auctions/DutchAuction.sol

#### Definition

```
interface IDutchAuctionHouse is INFTAuction {
  event CreateDutchAuction(
    address seller,
    IERC721 collection,
    uint256 item,
    uint256 startingPrice,
    uint256 endingPrice,
    uint256 expiration,
    string memo
  );
}
```
