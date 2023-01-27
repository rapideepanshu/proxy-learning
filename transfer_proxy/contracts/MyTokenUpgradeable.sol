// SPDX-License-Identifier: MIT

pragma solidity 0.8.10;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract MyTokenUpgradable is
    Initializable,
    ERC20Upgradeable,
    OwnableUpgradeable
{
    function initialize() external initializer {
        __ERC20_init("Token", "TKN");
        __Ownable_init();
    }

    function mint(address to, uint amount) external onlyOwner {
        _mint(to, amount);
    }
}
