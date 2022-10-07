# MixedPaymentSplitterFactory

*Contains logic to deploy a `MixedPaymentSplitter` contract.*

#### Code

https://github.com/DAOLABS-WTF/juice-contracts-v3/blob/feat/extensions/contracts/extensions/Deployer/MixedPaymentSplitterFactory.sol

#### Definition

```
/**
 * @notice Creates an instance of MixedPaymentSplitter contract
 */
library MixedPaymentSplitterFactory {
  function createMixedPaymentSplitter(
    string memory _name,
    address[] memory _payees,
    uint256[] memory _projects,
    uint256[] memory _shares,
    IJBDirectory _jbxDirectory,
    address _owner
  ) public returns (address) {
    MixedPaymentSplitter s = new MixedPaymentSplitter(
      _name,
      _payees,
      _projects,
      _shares,
      _jbxDirectory,
      _owner
    );

    return address(s);
  }
}
```
