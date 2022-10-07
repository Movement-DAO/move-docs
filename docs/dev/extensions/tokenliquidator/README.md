# TokenLiquidator

*This contract integrates with Uniswap to allow seamless liquidation of tokens into WETH or Ether which is then forwarded to a Juicebox terminal. The contract is generic, meaning that a project doesn't need to deploy their own copy of it. Liquidation happens via `liquidateTokens` called by the token holder. This contract has a fee mechanism where a small portion of the proceeds is sent to the platform.*

#### Code

https://github.com/DAOLABS-WTF/juice-contracts-v3/blob/feat/extensions/contracts/extensions/TokenLiquidator.sol

#### Addresses

Ethereum Mainnet: *Not deployed*

Goerli Testnet: *Not deployed*

#### Interfaces

|Name|Description|
|-|-|
|`ITokenLiquidator`||

#### Inheritance

|Contract|Description|
|-|-|
|`JBOperatable`||

#### Constructor

```
/**
 * @param _jbxDirectory Juicebox directory for payment terminal lookup.
 * @param _feeBps Protocol swap fee.
 * @param  _uniswapPoolFee Uniswap pool fee.
 */
constructor(
  IJBDirectory _jbxDirectory,
  IJBOperatorStore _jbxOperatorStore,
  IJBProjects _jbxProjects,
  uint256 _feeBps,
  uint24 _uniswapPoolFee
) JBOperatable(_jbxOperatorStore) {
  if (_feeBps > FEE_CAP_BPS) {
    revert();
  }

  jbxDirectory = _jbxDirectory;
  jbxProjects = _jbxProjects;
  feeBps = _feeBps;
  uniswapPoolFee = _uniswapPoolFee;
}
```

Parameters not documented in code.

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
