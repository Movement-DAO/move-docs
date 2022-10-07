# EnglishAuction

*Allows listing NFTs with a starting price, a reserve price and an auction duration. This auction type expects bidders to place increasing bids. When settling an auction, the contract will send the sale proceeds to the listing party, the NFT to the buyer and a commission to a Juicebox project. The commission rate is configurable and capped at 10%. It is possible to perform the auction settlement trustlessly. Contracts in this section are designed to be as functionally similar as possible and with the exception of auction-specific mechanics they work in a similar fashion firing similar events.*

#### Code

https://github.com/DAOLABS-WTF/juice-contracts-v3/blob/feat/extensions/contracts/extensions/Auctions/EnglishAuction.sol

#### Addresses

Ethereum mainnet: *Not deployed*

Goerli testnet: *Not deployed*

#### Interfaces

|Name|Description|
|-|-|
|`IEnglishAuctionHouse`||

#### Inheritance

|Contract|Description|
|-|-|
|`AccessControl`||
|`JBSplitPayerUtil`||
|`ReentrancyGuard`||
|`Initializable`||

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
