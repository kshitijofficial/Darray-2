//SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.5.0 <0.9.0;

contract Dynamic {
    int256[] arr;

    function getAll() public view returns (int256[] memory) {
        return arr;
    }
}
