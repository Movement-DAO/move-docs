# DutchAuction

*Allows listing NFTs with a starting price, an ending price and an auction duration. This auction type expects bidders to place decreasing bids. Allows listing NFTs with a starting price, an ending price and an auction duration. This auction type expects bidders to place decreasing bids.*

#### Code

https://github.com/DAOLABS-WTF/juice-contracts-v3/blob/feat/extensions/contracts/extensions/Auctions/DutchAuction.sol

#### Addresses

Ethereum mainnet: *Not deployed*

Goerli testnet: *Not deployed*

#### Interfaces

|Name|Description|
|-|-|
|[**`IDutchAuctionHouse`**](/dev/api/interfaces/idutchauctionhouse)|General interface for the methods in this contract that interact with the blockchain's state according to the protocol's rules.|

#### Inheritance

|Contract|Description|
|-|-|
|[**`AccessControl`**](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/AccessControl.sol)|Contract module that allows children to implement role-based access control mechanisms.|
|[**`JBSplitPayerUtil`**](/dev/api/contracts/utils/jbsplitpayerutil/)|This contract allows processing of JBSplit objects and execute the associated payment outside the context of JBPayoutRedemptionTerminal. Currently this is used in the auction contracts.|
|[**`ReentrancyGuard`**](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/security/ReentrancyGuard.sol)|Contract module that helps prevent reentrant calls to a function.|
|[**`Initializable`**](https://github.com/OpenZeppelin/openzeppelin-upgrades/blob/master/packages/core/contracts/Initializable.sol)|Helper contract to support initializer functions.|

#### Events

|Name|Data|
|-|-|
|[**`CreateDutchAuction`**](.)|<ul><li>`address seller`</li><li>[`IERC721`](https://docs.openzeppelin.com/contracts/3.x/api/token/erc721#IERC721) `collection`</li><li>`uint256 item`</li><li>`uint256 startingPrice`</li><li>`uint256 endingPrice`</li><li>`uint256 expiration`</li><li>`string memo`</li></ul>|
|[**`PlaceBid`**](.)|<ul><li>`address bidder`</li><li>[`IERC721`](https://docs.openzeppelin.com/contracts/3.x/api/token/erc721#IERC721) `collection`</li><li>`uint256 item`</li><li>`uint256 bidAmount`</li><li>`string memo`</li></ul>|
|[**`ConcludeAuction`**](.)|<ul><li>`address seller`</li><li>`address bidder`</li><li>[`IERC721`](https://docs.openzeppelin.com/contracts/3.x/api/token/erc721#IERC721) `collection`</li><li>`uint256 item`</li><li>`uint256 closePrice`</li><li>`string memo`</li></ul>|

#### Properties

|Name|Definition|
|-|-|
|[**`auctions`**](.)|**Params**<ul><li>`bytes32`</li></ul>**Returns**<ul><li>[`DutchAuctionData`](/dev/api/data-structures/dutchauctiondata)</li></ul>|
|[**`auctionSplits`**](.)|**Params**<ul><li>`bytes32`</li></ul>**Returns**<ul><li>[`JBSplit[]`](https://info.juicebox.money/dev/api/data-structures/jbsplit/)</li></ul>|
|[**`deploymentOffset`**](.)|**Returns**<ul><li>`uint256`</li></ul>|
|[**`projectId`**](.)|**Returns**<ul><li>`uint256`</li></ul>|
|[**`feeReceiver`**](.)|**Returns**<ul><li>[`IJBPaymentTerminal`](https://info.juicebox.money/dev/api/interfaces/ijbpaymentterminal)</li></ul>|
|[**`directory`**](.)|**Returns**<ul><li>[`IJBDirectory`](https://info.juicebox.money/dev/api/interfaces/ijbdirectory)</li></ul>|
|[**`settings`**](.)|**Returns**<ul><li>`uint256`</li></ul>|

#### Read

|Function|Definition|
|-|-|
|[**`currentPrice`**](.)|**Params**<ul><li>[`IERC721`](https://docs.openzeppelin.com/contracts/3.x/api/token/erc721#IERC721) `collection`</li><li>`uint256 item`</li></ul>**Returns**<ul><li>`uint256 price`</li></ul>|
|[**`supportsInterface`**](.)|**Params**<ul><li>`bytes4 _interfaceId`</li></ul>**Returns**<ul><li>`bool`</li></ul>|

#### Write

|Function|Definition|
|-|-|
|[**`initialize`**](.)|**Traits**<ul><li>`initializer`</li></ul>**Params**<ul><li>`uint256 _projectId`</li><li>[`IJBPaymentTerminal`](https://info.juicebox.money/dev/api/interfaces/ijbsingletokenpaymentterminalstore/) `_feeReceiver`</li><li>`uint256 _feeRate`</li><li>`bool _allowPublicAuctions`</li><li>`uint256 _periodDuration`</li><li>`address _owner`</li><li>[`IJBDirectory`](https://info.juicebox.money/dev/api/interfaces/ijbdirectory/) `_directory`</li></ul>|
|[**`create`**](.)|**Traits**<ul><li>[`nonReentrant`](https://docs.openzeppelin.com/contracts/2.x/api/utils#ReentrancyGuard-nonReentrant--)</li></ul>**Params**<ul><li>[`IERC721`](https://docs.openzeppelin.com/contracts/3.x/api/token/erc721#IERC721) `collection`</li><li>`uint256 item`</li><li>`uint256 startingPrice`</li><li>`uint256 endingPrice`</li><li>`uint256 _duration`</li><li>[`JBSplit[]`](https://info.juicebox.money/dev/api/data-structures/jbsplit/) `calldata saleSplits`</li><li>`string calldata _memo`</li></ul>**Returns**<ul><li></li></ul>|
|[**`bid`**](.)|**Traits**<ul><li>`payable`</li><li>[`nonReentrant`](https://docs.openzeppelin.com/contracts/2.x/api/utils#ReentrancyGuard-nonReentrant--)</li></ul>**Params**<ul><li>[`IERC721`](https://docs.openzeppelin.com/contracts/3.x/api/token/erc721#IERC721) `collection`</li><li>`uint256 item`</li><li>`string calldata _memo`</li></ul>|
|[**`settle`**](.)|**Traits**<ul><li>[`nonReentrant`](https://docs.openzeppelin.com/contracts/2.x/api/utils#ReentrancyGuard-nonReentrant--)</li></ul>**Params**<ul><li>[`IERC721`](https://docs.openzeppelin.com/contracts/3.x/api/token/erc721#IERC721) `collection`</li><li>`uint256 item`</li><li>`string calldata _memo`</li></ul>|
|[**`distributeProceeds`**](.)|**Traits**<ul><li>[`nonReentrant`](https://docs.openzeppelin.com/contracts/2.x/api/utils#ReentrancyGuard-nonReentrant--)</li></ul>**Params**<ul><li>[`IERC721`](https://docs.openzeppelin.com/contracts/3.x/api/token/erc721#IERC721) `_collection`</li><li>`uint256 _item`</li></ul>|
|[**`updateAuctionSplits`**](.)|**Params**<ul><li>[`IERC721`](https://docs.openzeppelin.com/contracts/3.x/api/token/erc721#IERC721) `_collection`</li><li>`uint256 _item`</li><li>[`JBSplit[]`](https://info.juicebox.money/dev/api/data-structures/jbsplit/) `calldata _saleSplits`</li></ul>|
|[**`setFeeRate`**](.)|**Traits**<ul><li>[`onlyRole(DEFAULT_ADMIN_ROLE)`](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/AccessControl.sol)</li></ul>**Params**<ul><li>`uint256 _feeRate`</li></ul>|
|[**`setAllowPublicAuctions`**](.)|**Traits**<ul><li>[`onlyRole(DEFAULT_ADMIN_ROLE)`](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/AccessControl.sol)</li></ul>**Params**<ul><li>`bool _allowPublicAuctions`</li></ul>|
|[**`setFeeReceiver`**](.)|**Traits**<ul><li>[`onlyRole(DEFAULT_ADMIN_ROLE)`](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/AccessControl.sol)</li></ul>**Params**<ul><li>[`IJBPaymentTerminal`](https://info.juicebox.money/dev/api/interfaces/ijbsingletokenpaymentterminalstore/) `_feeReceiver`</li></ul>|
|[**`addAuthorizedSeller`**](.)|**Traits**<ul><li>[`onlyRole(DEFAULT_ADMIN_ROLE)`](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/AccessControl.sol)</li></ul>**Params**<ul><li>`address _seller`</li></ul>|
|[**`removeAuthorizedSeller`**](.)|**Traits**<ul><li>[`onlyRole(DEFAULT_ADMIN_ROLE)`](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/AccessControl.sol)</li></ul>**Params**<ul><li>`address _seller`</li></ul>|
