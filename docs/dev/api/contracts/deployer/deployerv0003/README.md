# Deployer\_v003

*The deployer contract is meant to be a trusted mechanism for platform users to create instances of contracts they require. This is a managed, upgradeable contract. This third version of the deployer introduced the ability to deploy auction house contracts. It's expected that DAO Labs will offer platform-level Dutch and English auction house contracts that can be used by the projects on the platform, but we still want to provide an easy option for people interested in deploying their own.*

*There are two functions, `deployDutchAuction` and `deployEnglishAuction` that will create these contracts. This is done with the clone pattern where the deployer contract is given a known-good version of the logic contract and calls to these functions will deploy proxies that will `delegatecall` into it. The function parameters are the same as the ones going into the auction contract initializers. Actual deployment logic is in the `AuctionsFactory` contract.*


#### Code

https://github.com/DAOLABS-WTF/juice-contracts-v3/blob/feat/extensions/contracts/extensions/Deployer/Deployer_v003.sol

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
|`Deployer_v002`||

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

