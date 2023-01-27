// SPDX-License-Identifier: NONE
pragma solidity ^0.8.10;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract UnsafeV1 is Initializable {
    //Unsafe - Constructor

    address public owner;

    uint public val;
    uint public start;

    // Safe - constants and immutable
    uint public constant MY_CONSTANT = 110;
    /// @custom:oz-upgrades-unsafe-allow state-variable-immutable
    uint public immutable MY_IMMUTABLE;

    // Unsafe value assignment
    // uint public val = 123;
    // uint public start = block.timestamp;

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor(uint _x) {
        MY_IMMUTABLE = _x;
    }

    // Should initialize only once;
    function initialize(uint _val) external initializer {
        val = _val;
        owner = msg.sender;
        start = block.timestamp;
    }
}
