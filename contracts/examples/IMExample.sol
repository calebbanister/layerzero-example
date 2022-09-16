// SPDX-License-Identifier: MIT

pragma solidity ^0.8.2;
pragma abicoder v2;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import "../lzApp/NonblockingLzApp.sol";

/// @title A LayerZero example sending a cross chain message from a source chain
contract IMExample is NonblockingLzApp {
    using SafeERC20 for IERC20;
    IERC20 public immutable token;

    struct IMPacket {
        address investor;
        address issuer;
        address token;
        uint256 amount;
        bytes32 txHash;
        bool status;
    }

    constructor(address _lzEndpoint, IERC20 _stablecoin) NonblockingLzApp(_lzEndpoint) {
        token = _stablecoin;
    }

    // this method is called automatically called with the bytes payload sent from the source
    function _nonblockingLzReceive(uint16, bytes memory, uint64, bytes memory _payload) internal override {
        IMPacket memory p = abi.decode(_payload, (IMPacket));

        // transfer the tokens from the issuer to the investor
        require(IERC20(p.token).allowance(p.issuer, address(this)) >= p.amount, "issuer has not approved() enough tokens");
        IERC20(p.token).transferFrom(p.issuer, p.investor, p.amount);
    }

    // only the owner of this contract can call
    function sendMessage(
        uint16 _dstChainId,
        address _investor,
        address _issuer,
        address _token,
        uint256 _amount,
        bytes32 _txHash,
        bool _status
    )
        public
        payable
        // onlyOwner // TODO put in for production - for now let anyone call this function for testing purposes
    {
        IMPacket memory packet = IMPacket(_investor, _issuer, _token, _amount, _txHash, _status);

        // pack the message information into bytes
        bytes memory payload = abi.encode(packet);

        // send the layerzero message to the _dstChainId, with the IM payload
        _lzSend(_dstChainId, payload, payable(msg.sender), address(0x0), bytes(""));
    }

}