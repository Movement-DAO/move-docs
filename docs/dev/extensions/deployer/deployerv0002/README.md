# Deployer\_v002

*The deployer contract is meant to be a trusted mechanism for platform users to create instances of contracts they require. This is a managed, upgradeable contract. This second deployer version added the option to deploy a `MixedPaymentSplitter` contract. This is a full copy and it's done via `deployMixedPaymentSplitter` function which calls into `MixedPaymentSplitterFactory`.*

#### Code

https://github.com/DAOLABS-WTF/juice-contracts-v3/blob/feat/extensions/contracts/extensions/Deployer/Deployer_v002.sol

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
|`Deployer_v001`||

#### Constructor

```
/// @custom:oz-upgrades-unsafe-allow constructor
constructor() {
  _disableInitializers();
}
```

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

