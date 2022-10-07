# Deployer\_v004

*The deployer contract is meant to be a trusted mechanism for platform users to create instances of contracts they require. This is a managed, upgradeable contract. This version four of the deployer added the option of deploying a cloned NFT in `NFUTokenFactory`. `deployNFUToken` takes the necessary arguments but omits `mintPeriodStart` and `mintPeriodEnd` which can be set by the NFT admin after deployment if needed. Contracts created via this process are storage proxies that forward function calls with `delegatecall`. This is a lower fee option compared to Deployer\_v001.*

#### Code

https://github.com/DAOLABS-WTF/juice-contracts-v3/blob/feat/extensions/contracts/extensions/Deployer/Deployer_v004.sol

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
|`Deployer_v003`||

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

