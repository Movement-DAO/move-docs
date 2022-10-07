# AuctionsFactory

*Deployment logic for deploying Dutch and English auction contracts.*

#### Code

https://github.com/DAOLABS-WTF/juice-contracts-v3/blob/feat/extensions/contracts/extensions/Deployer/AuctionsFactory.sol

#### Definition

```
library AuctionsFactory {
  error INVALID_SOURCE_CONTRACT();

  function createDutchAuction(
    address _source,
    uint256 _projectId,
    IJBPaymentTerminal _feeReceiver,
    uint256 _feeRate,
    bool _allowPublicAuctions,
    uint256 _periodDuration,
    address _owner,
    IJBDirectory _directory
  ) public returns (address auctionClone) {
    if (!IERC165(_source).supportsInterface(type(IDutchAuctionHouse).interfaceId)) {
      revert INVALID_SOURCE_CONTRACT();
    }

    auctionClone = Clones.clone(_source);
    DutchAuctionHouse(auctionClone).initialize(
      _projectId,
      _feeReceiver,
      _feeRate,
      _allowPublicAuctions,
      _periodDuration,
      _owner,
      _directory
    );
  }

  function createEnglishAuction(
    address _source,
    uint256 _projectId,
    IJBPaymentTerminal _feeReceiver,
    uint256 _feeRate,
    bool _allowPublicAuctions,
    address _owner,
    IJBDirectory _directory
  ) public returns (address auctionClone) {
    if (!IERC165(_source).supportsInterface(type(IEnglishAuctionHouse).interfaceId)) {
      revert INVALID_SOURCE_CONTRACT();
    }

    auctionClone = Clones.clone(_source);
    EnglishAuctionHouse(auctionClone).initialize(
      _projectId,
      _feeReceiver,
      _feeRate,
      _allowPublicAuctions,
      _owner,
      _directory
    );
  }
}
```
