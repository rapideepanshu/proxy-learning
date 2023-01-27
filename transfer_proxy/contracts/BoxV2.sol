// SPDX-License-Identifier: NONE
pragma solidity ^0.8.10;

import "./Box.sol";

contract BoxV2 is Box {
    function increment() public {
        store(retrieve() + 1);
    }
}
