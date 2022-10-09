# INFTPriceResolver

#### Code

https://github.com/DAOLABS-WTF/juice-contracts-v3/blob/feat/extensions/contracts/extensions/NFT/INFTPriceResolver.sol

#### Definition

```
interface INFTPriceResolver {
  error UNSUPPORTED_OPERATION();

  function getPrice(
    address _token,
    address _minter,
    uint256 _tokenid
  ) external view returns (uint256);

  function getPriceWithParams(
    address _token,
    address _minter,
    uint256 _tokenid,
    bytes calldata _params
  ) external view returns (uint256);
}
```
