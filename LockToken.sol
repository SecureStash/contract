// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts@4.9.5/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts@4.9.5/access/AccessControl.sol";
import "@openzeppelin/contracts@4.9.5/token/ERC20/ERC20.sol";

contract LockToken is ERC20,AccessControl,ReentrancyGuard{


    bytes32 public constant OWNER_ROLE = keccak256("OWNER_ROLE");

    uint256 private totalSup;
    address payable owner; 
    uint currentTime;       // The time at which the contract is deployed
    uint256 releaseTime;    // The time at which the tokens are going to be released
    uint256 releaseToken;   // Number of tokens which are going to be released 
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
        _transfer(owner,address(this),releaseToken);
        totalSup -= releaseToken;
    }

    struct user{
        address userAddress;
        uint stakingTime;
        uint stakeAmount;
        uint userBalance;
    }

    mapping (address => user) userDetails; // To store all the information of the user who stakes and withdraws

    function stake(uint _amount, uint8 _time) external payable {
        require(_amount > 0,"Minimum amount should be greater than 0");
        require(userDetails[msg.sender].userBalance >= _amount,"you don't have enough balance to stake");

        /*userDetails[msg.sender].userBalance = 50;  
        (when this function is called the contract will throw an error as the user balance is zero... 
        this line is created for testing purpose)*/

        _transfer(payable(msg.sender),payable(address(this)),_amount);
        userDetails[msg.sender].stakeAmount = _amount;
        userDetails[msg.sender].stakingTime = _time;
        userDetails[msg.sender].userBalance -= _amount;
    }

    function withDraw() external payable {
        require(userDetails[msg.sender].stakingTime >= block.timestamp,"wait till the staking time finishes");
        _transfer(payable(address(this)), payable(msg.sender), userDetails[msg.sender].stakeAmount);
        userDetails[msg.sender].userBalance += userDetails[msg.sender].stakeAmount;
        userDetails[msg.sender].stakeAmount = 0;
        userDetails[msg.sender].stakingTime = 0;
    }
}