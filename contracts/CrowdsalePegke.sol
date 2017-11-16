pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/crowdsale/Crowdsale.sol';
import "zeppelin-solidity/contracts/token/StandardToken.sol";

import "./Pegke.sol";


contract CrowdsalePegke is Crowdsale {

  function CrowdsalePegke(uint256 _startTime, uint256 _endTime, uint256 _rate, address _wallet) public
    Crowdsale(_startTime, _endTime, _rate, _wallet)
  {

  }

  function createTokenContract() internal returns (StandardToken) {
    return new Pegke();
  }
}
