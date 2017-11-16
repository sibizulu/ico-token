pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/token/StandardToken.sol';

contract Pegke is StandardToken {

  string public constant name = "Pegke";
  string public constant symbol = "PEG";
  uint8 public constant decimals = 18;

  uint256 public constant INITIAL_SUPPLY = 10000 * (10 ** uint256(decimals));

  function Pegke(uint startBlockInput, uint endBlockInput, address founderInput) public{
    totalSupply = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }

  function() {
    throw;
  }
}
