# PaymentProcessor

*This contract is meant to be a proxy that receives payments and forwards them to the pre-configured Juicebox project. The proxy can accept payment in ERC20 tokens and optionally liquidate them. The proxy also optionally allows payment in case of project misconfiguration.*

#### Code

https://github.com/DAOLABS-WTF/juice-contracts-v3/blob/feat/extensions/contracts/extensions/PaymentProcessor.sol

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
|`JBOperatable`||

#### Constructor

```
/**
 * @notice This contract serves as a proxy between the payer and the Juicebox platform. It allows payment acceptance in case of Juicebox project misconfiguration. It allows acceptance of ERC20 tokens via liquidation even if there is no corresponding Juicebox payment terminal.
 *
 * @param _jbxDirectory Juicebox directory.
 * @param _jbxOperatorStore Juicebox operator store.
 * @param _jbxProjects Juicebox project registry.
 * @param _liquidator Platform liquidator contract.
 * @param _jbxProjectId Juicebox project id to pay into.
 * @param _ignoreFailures If payment forwarding to the Juicebox terminal fails, Ether will be ratained in this contract and ERC20 tokens will be processed per stored instructions. Setting this to false will `revert` failed payment operations.
 * @param _defaultLiquidation Setting this to true will automatically attempt to convert the incoming ERC20 tokens into WETH via Uniswap unless there are specific settings for the given token. Setting it to false will attempt to send the tokens to an appropriate Juicebox terminal, on failure, _ignoreFailures will be followed.
 */
constructor(
  IJBDirectory _jbxDirectory,
  IJBOperatorStore _jbxOperatorStore,
  IJBProjects _jbxProjects,
  ITokenLiquidator _liquidator,
  uint256 _jbxProjectId,
  bool _ignoreFailures,
  bool _defaultLiquidation
) JBOperatable(_jbxOperatorStore) {
  jbxDirectory = _jbxDirectory;
  jbxProjects = _jbxProjects;
  liquidator = _liquidator;
  jbxProjectId = _jbxProjectId;
  ignoreFailures = _ignoreFailures;
  defaultLiquidation = _defaultLiquidation;
}
```

- `_jbxDirectory` is an `IJBDirectory`
- `_jbxOperatorStore` is an `IJBOperatorStore`
- `_jbxProjects` is an `IJBProjects` Juicebox project registry.
- `_liquidator` is an `ITokenLiquidator` which represents the platform liquidator contract.
- `_jbxProjectId` denotes the Juicebox project ID to pay into.
- `_ignoreFailures` if true, when payment forwarding to the Juicebox terminal fails, Ether will be retained in this contract and ERC20 tokens will be processed per stored instructions. Setting this to false will `revert` failed payment operations.
- `_defaultLiquidation` if true, the contract will automatically attempt to convert the incoming ERC20 tokens into wETH via Uniswap unless there are specific settings for the given token. Setting it to false will attempt to send the tokens to an appropriate Juicebox terminal. On failure, \_ignoreFailures will be followed.

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
