# NFToken

*Deployable NFT contract.*

#### Code

https://github.com/DAOLABS-WTF/juice-contracts-v3/blob/feat/extensions/contracts/extensions/NFT/NFToken.sol

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
|`BaseNFT`||

#### Constructor

```
/**
 * @notice Creates the NFT contract.
 *
 * @param _name Token name.
 * @param _symbol Token symbol.
 * @param _baseUri Base URI, initially expected to point at generic, "unrevealed" metadata json.
 * @param _contractUri OpenSea-style contract metadata URI.
 * @param _jbxProjectId Juicebox project id that will be paid the proceeds of the sale.
 * @param _jbxDirectory Juicebox directory to determine payment destination.
 * @param _maxSupply Max NFT supply.
 * @param _unitPrice Price per token expressed in Ether.
 * @param _mintAllowance Per-user mint cap.
 * @param _mintPeriodStart Start of the minting period in seconds.
 * @param _mintPeriodEnd End of the minting period in seconds.
 */
constructor(
  string memory _name,
  string memory _symbol,
  string memory _baseUri,
  string memory _contractUri,
  uint256 _jbxProjectId,
  IJBDirectory _jbxDirectory,
  uint256 _maxSupply,
  uint256 _unitPrice,
  uint256 _mintAllowance,
  uint128 _mintPeriodStart,
  uint128 _mintPeriodEnd
) {
  name = _name;
  symbol = _symbol;

  baseUri = _baseUri;
  contractUri = _contractUri;
  jbxDirectory = _jbxDirectory;
  jbxProjectId = _jbxProjectId;
  maxSupply = _maxSupply;
  unitPrice = _unitPrice;
  mintAllowance = _mintAllowance;
  mintPeriodStart = _mintPeriodStart;
  mintPeriodEnd = _mintPeriodEnd;

  _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
  _grantRole(MINTER_ROLE, msg.sender);
  _grantRole(REVEALER_ROLE, msg.sender);
}
```

- `_name` stores the token's name.
- `_symbol` stores the token's symbol.
- `_baseUri` stores the base URI—initially expected to point at generic, "unrevealed" metadata json.
- `_contractUri` stores an OpenSea-style contract metadata URI.
- `_jbxProjectId` denotes the Juicebox project ID that will be paid the proceeds of the sale.
- `_jbxDirectory` is an `IJBDirectory` used to determine payment destination.
- `_maxSupply` represents the maximum NFT supply.
- `_unitPrice` is the price per token expressed in Ether.
- `_mintAllowance` is a per-user mint cap.
- `_mintPeriodStart` denotes the start of the minting period in seconds.
- `_mintPeriodEnd` denotes the end of the minting period in seconds.

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
