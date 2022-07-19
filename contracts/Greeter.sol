//SPDX-License-Identifier: Unlicense
import 'hardhat/console.sol';

pragma solidity ^0.8.0;

contract Greeter {
    string private greeting;
    function greet() public view returns (string memory) {
        return greeting;
    }
    function setGreeting(string memory _greeting) public {
        console.log('Changing greeting from %s to %s', greeting,_greeting);
        greeting = _greeting;
    }
}