# EnglishAuctionMachine

*Perpetual NFT minting English auction.*

#### Code

https://github.com/DAOLABS-WTF/juice-contracts-v3/blob/feat/extensions/contracts/extensions/NFT/EnglishAuctionMachine.sol

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
|`ReentrancyGuard`||

#### Constructor

```
/**
 * @notice Create an "Auction Machine" which is expected to be able to mint new NFTs against the supplied token. The operation is as follows:
 * - Mint a new token.
 * - Create a new English auction for the token that was just minted with a reserve price.
 * - Accept bids until auction duration is reached.
 * - Transfer the token to the auction winner.
 * - Repeat until maxAuctions is spent.
 *
 * @dev The provided token must have the following functions: `mintFor(address) => uint256`, `function transferFrom(address, address, uint256)` (standard ERC721/1155 function), `unitPrice() => uint256`. `mintFor` will be called with `address(this)` to mint a new token to this contract in order to start a new auction. unitPrice() will be called to set the auction reserve price. transferFrom will be called to transfer the token to the auction winner if any.
 *
 * @param _maxAuctions Maximum number of auctions to perform automatically, 0 for no limit.
 * @param _auctionDuration Auction duration in seconds.
 * @param _projectId Juicebox project id, used to transfer auction proceeds.
 * @param _jbxDirectory Juicebox directory, used to transfer auction proceeds to the correct terminal.
 * @param _token Token contract to operate on.
 */
constructor(
  uint256 _maxAuctions,
  uint256 _auctionDuration,
  uint256 _projectId,
  IJBDirectory _jbxDirectory,
  address _token
) {
  maxAuctions = _maxAuctions;
  auctionDuration = _auctionDuration;
  jbxProjectId = _projectId;
  jbxDirectory = _jbxDirectory;
  token = INFTAuctionMint(_token);
}
```

- `_maxAuctions` represents the maximum number of auctions to perform automatically (0 for no limit).
- `_auctionDuration` represents the auction duration in seconds.
- `_projectId` corresponds to a Juicebox project ID which is used to transfer auction proceeds.
- `_jbxDirectory` is an `IJBDirectory` which is used to transfer auction proceeds to the correct terminal.
- `_token` is the address of the token contract to operate on.

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
