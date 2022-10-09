# JBRoleManager

*A contract to enable a dynamic access control mechanism. While conceptually similar to `JBOperatorStore`, JBRoleManager allows on-the-fly creation of project-specific roles, their assignment to users and validation.*

#### Code

https://github.com/DAOLABS-WTF/juice-contracts-v3/blob/feat/extensions/contracts/extensions/JBRoleManager.sol

#### Addresses

Ethereum Mainnet: *Not deployed*

Goerli Testnet: *Not deployed*

#### Interfaces

|Name|Description|
|-|-|
|`IJBRoleManager`||

#### Inheritance

|Contract|Description|
|-|-|
|`JBOperatable`||
|`Ownable`||

#### Constructor

```
/**
  @param _directory Juicebox directory.
  @param _operatorStore Juicebox operator store.
  @param _projects Juicebox projects NFT.
  @param _owner The address that will own the contract.
*/
constructor(
  IJBDirectory _directory,
  IJBOperatorStore _operatorStore,
  IJBProjects _projects,
  address _owner
) JBOperatable(_operatorStore) {
  directory = _directory;
  projects = _projects;

  _transferOwnership(_owner);
}
```

- `_directory` is an `IJBDirectory` contract which 
- `_operatorStore` is an `IJBOperatorStore` contract which
- `_projects` is an `IJBProjects` contract which
- `_owner` is the address that will own the contract.


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
