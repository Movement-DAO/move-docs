# DaiTreasuryDelegate

*An automated DAI treasury that will convert incoming Ether into DAI on Uniswap. This contract is an implementation of `IJBFundingCycleDataSource`, `IJBPayDelegate` and `IJBRedemptionDelegate` providing deposit and withdraw functionality as part of a [Funding Cycle](#) via `didPay` and `didRedeem`. This contract is meant to be shared across all projects on the platform that would like to diversify some their holdings from Ether into DAI.*

#### Code

https://github.com/DAOLABS-WTF/juice-contracts-v3/blob/feat/extensions/contracts/extensions/DaiTreasuryDelegate.sol

#### Addresses

Ethereum Mainnet: *Not deployed*

Goerli Testnet: *Not deployed*

#### Interfaces

|Name|Description|
|-|-|
|`IDaiTreasuryDelegate`||
|`IJBFundingCycleDataSource`||
|`IJBPayDelegate`||
|`IJBRedemptionDelegate`||


#### Inheritance

|Contract|Description|
|-|-|
|||

#### Constructor

```
constructor(IJBController jbxController) {
  _jbxController = jbxController;
}
```

- `jbxController` is an `IJBController` contract reference to directly manage project token balances.

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
