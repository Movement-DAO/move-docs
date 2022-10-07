# MixedPaymentSplitter

*Allows payments to be distributed to addresses or JBX projects with appropriately configured terminals.*

#### Code

https://github.com/DAOLABS-WTF/juice-contracts-v3/blob/feat/extensions/contracts/extensions/MixedPaymentSplitter.sol

#### Addresses

Ethereum Mainnet: *Not deployed*

Goerli Testnet: *Not deployed*

#### Interfaces

|Name|Description|
|-|-|
|||

#### Inheritance

|Contract|Description|
|-|-|
|`Ownable`||

#### Constructor

```
/**
 * @param _name Name for this split configuration.
 * @param _payees Payable addresses to send payment portion to.
 * @param _projects Juicebox project ids to send payment portion to.
 * @param _shares Share assignment in the same order as payees and projects parameters.
 * @param _jbxDirectory Juicebox directory contract
 * @param _owner Admin of this contract
 */
constructor(
  string memory _name,
  address[] memory _payees,
  uint256[] memory _projects,
  uint256[] memory _shares,
  IJBDirectory _jbxDirectory,
  address _owner
) {
  if (_payees.length == 0 && _projects.length == 0) {
    revert INVALID_LENGTH();
  }

  if (_shares.length == 0) {
    revert INVALID_LENGTH();
  }

  if (_payees.length + _projects.length != _shares.length) {
    revert INVALID_LENGTH();
  }

  if (_projects.length != 0 && address(_jbxDirectory) == address(0)) {
    revert INVALID_DIRECTORY();
  }

  jbxDirectory = _jbxDirectory;
  name = _name;

  for (uint256 i; i != _payees.length; ) {
    _addPayee(_payees[i], _shares[i]);
    ++i;
  }

  for (uint256 i; i != _projects.length; ) {
    _addProject(_projects[i], _shares[_payees.length + i]);
    ++i;
  }

  _transferOwnership(_owner);
}
```

- `_name` is a string containing the name for this split configuration.
- `_payees` is a payable addresses to send payment portion to.
- `_projects` stores Juicebox project IDs to send payment portions to.
- `_shares` stores share assignment in the same order as payees and projects parameters.
- `_jbxDirectory` is an `IJBDirectory` contract.
- `_owner` is the address which is the admin of this contract.

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
