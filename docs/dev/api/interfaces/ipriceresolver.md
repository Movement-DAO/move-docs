# IPriceResolver

#### Code

https://github.com/DAOLABS-WTF/juice-contracts-v3/blob/feat/extensions/contracts/extensions/interfaces/IPriceResolver.sol

#### Definition

```
interface IPriceResolver {
  function validateContribution(
    address account,
    JBTokenAmount calldata contribution,
    ITokenSupplyDetails token
  ) external returns (uint256);
}
```
