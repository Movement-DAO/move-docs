# INFTAuction

#### Code

https://github.com/DAOLABS-WTF/juice-contracts-v3/blob/feat/extensions/contracts/extensions/Auctions/INFTAuction.sol

#### Definition

```
interface INFTAuction {
  error AUCTION_EXISTS();
  error INVALID_AUCTION();
  error AUCTION_ENDED();
  error INVALID_BID();
  error INVALID_PRICE();
  error INVALID_DURATION();
  error INVALID_FEERATE();
  error NOT_AUTHORIZED();

  event PlaceBid(address bidder, IERC721 collection, uint256 item, uint256 bidAmount, string memo);

  event ConcludeAuction(
    address seller,
    address bidder,
    IERC721 collection,
    uint256 item,
    uint256 closePrice,
    string memo
  );

  function create(
    IERC721,
    uint256,
    uint256,
    uint256,
    uint256,
    JBSplit[] calldata,
    string calldata
  ) external;

  function bid(
    IERC721,
    uint256,
    string calldata
  ) external payable;

  function settle(
    IERC721,
    uint256,
    string calldata
  ) external;

  function distributeProceeds(IERC721, uint256) external;

  function currentPrice(IERC721, uint256) external view returns (uint256);

  function updateAuctionSplits(
    IERC721,
    uint256,
    JBSplit[] calldata
  ) external;

  function setFeeRate(uint256) external;

  function setAllowPublicAuctions(bool) external;

  function setFeeReceiver(IJBPaymentTerminal) external;

  function addAuthorizedSeller(address) external;

  function removeAuthorizedSeller(address) external;
}
```
