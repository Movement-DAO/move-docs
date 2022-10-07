# NFUTokenFactory

*Deploys a cloned NFT. `deployNFUToken` takes the necessary arguments but omits `mintPeriodStart` and `mintPeriodEnd` which can be set by the NFT admin after deployment if needed. Contracts created via this process are storage proxies that forward function calls with `delegatecall`. This is a lower fee option compared to the one above.*

#### Code

https://github.com/DAOLABS-WTF/juice-contracts-v3/blob/feat/extensions/contracts/extensions/Deployer/NFUTokenFactory.sol

#### Definition

```
/**
 * @notice Creates an instance of NFToken contract
 */
library NFUTokenFactory {
  /**
   * @notice In addition to taking the parameters requires by the NFToken contract, the `_owner` argument will be used to assign ownership after contract deployment.
   */
  function createNFUToken(
    address _source,
    address _owner,
    string memory _name,
    string memory _symbol,
    string memory _baseUri,
    string memory _contractUri,
    uint256 _jbxProjectId,
    IJBDirectory _jbxDirectory,
    uint256 _maxSupply,
    uint256 _unitPrice,
    uint256 _mintAllowance
  ) external returns (address token) {
    token = Clones.clone(_source);
    {
      NFUToken(token).initialize(
        _name,
        _symbol,
        _baseUri,
        _contractUri,
        _jbxProjectId,
        _jbxDirectory,
        _maxSupply,
        _unitPrice,
        _mintAllowance,
        0,
        0
      );
    }

    abdicate(NFUToken(token), _owner);
  }

  function abdicate(NFUToken _t, address _owner) private {
    _t.grantRole(0x00, _owner); // AccessControl.DEFAULT_ADMIN_ROLE
    _t.grantRole(keccak256('MINTER_ROLE'), _owner);
    _t.grantRole(keccak256('REVEALER_ROLE'), _owner);
    _t.revokeRole(keccak256('REVEALER_ROLE'), address(this));
    _t.revokeRole(keccak256('MINTER_ROLE'), address(this));
    _t.revokeRole(0x00, address(this));
  }
}
```
