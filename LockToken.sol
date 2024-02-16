// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts@4.9.5/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts@4.9.5/access/AccessControl.sol";
import "@openzeppelin/contracts@4.9.5/token/ERC20/ERC20.sol";

contract LockToken is ERC20,AccessControl,ReentrancyGuard{

    bytes32 public constant OWNER_ROLE = keccak256("OWNER_ROLE");

    uint256 private totalSup;
    address payable owner;
    uint currentTime;
    uint256 releaseTime;
    uint256 releaseToken;
    bool public released = false;
    constructor()ERC20("Secure Stash","SST"){
        totalSup = 50000000;
        owner = payable(msg.sender);
        _mint(owner,totalSup);
        currentTime = block.timestamp;
        releaseTime = 2592000;
        releaseToken = 10000000;
        _setupRole(DEFAULT_ADMIN_ROLE,msg.sender);
        _setupRole(OWNER_ROLE, msg.sender);
    }

    modifier onlyOwner() {
        require(hasRole(OWNER_ROLE, msg.sender), "Caller is not the owner");
        _;
    }

    function release() public onlyOwner{
        require(!released,"tokens have already been released");
        require(block.timestamp >= currentTime + releaseTime, "Need more time to release the tokens");
        emit Transfer(owner,address(this),releaseToken);
        totalSup -= releaseToken;
    }
}