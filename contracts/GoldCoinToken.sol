pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/token/MintableToken.sol';

contract GoldCoinToken is MintableToken {
  string public constant name = "GoldCoin";
  string public constant symbol = "GDC";
  uint8 public constant decimals = 18;
}
