// SPDX-License-Identifier: MIT

pragma solidity ^0.8.2;
pragma abicoder v2;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

import "../lzApp/NonblockingLzApp.sol";

/// @title A LayerZero example sending a cross chain message from a source chain
contract IMExample is NonblockingLzApp {
    using SafeERC20 for IERC20;
    IERC20 public immutable token;

    constructor(address _lzEndpoint, IERC20 _stablecoin) NonblockingLzApp(_lzEndpoint) {
        token = _stablecoin;
    }

    // this method is called automatically called with the bytes payload sent from the source
    function _nonblockingLzReceive(uint16, bytes memory, uint64, bytes memory _payload) internal override {
        (address investor, address issuer, uint256 qty) = abi.decode(_payload, (address, address, uint256));

        // ...
        // TODO - logic to be executed once receiving and unpacking the payload

    }

    function sendMessage(
        uint16 _dstChainId,
        address _issuer,
        uint256 _stablecoinQty
    ) public payable {
        // transfer stablecoin from msg.sender to _issuer
        token.safeTransferFrom(msg.sender, _issuer, _stablecoinQty);

        // pack the message information into bytes
        bytes memory payload = abi.encode(msg.sender, _issuer, _stablecoinQty);

        // send the layerzero message to the _dstChainId, with the payload
        _lzSend(_dstChainId, payload, payable(msg.sender), address(0x0), bytes(""));
    }

}