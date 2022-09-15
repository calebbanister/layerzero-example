<div align="center">
    <img alt="LayerZero" src="resources/LayerZeroLogo.png"/>
</div>

---

# LayerZero Omnichain Contract Example

 ### Install & Run tests
```shell
yarn install
npx hardhat test 
```

* The code in the `/example` folder demonstrates LayerZero behaviours.
* `NonblockingLzApp` is a great contract to extend. Take a look at how `OmniCounter` overrides `_nonblockingLzReceive` and `_LzReceive` to easily handle messaging. 
Many of the example contracts make use of LayerZeroEndpointMock.sol which is a nice way to test LayerZero locally!

### For further reading, and a list of endpoint ids and deployed LayerZero contract addresses please take a look at the Gitbook here: https://layerzero.gitbook.io/


### instructions to run IMExample

## Setup: Put a MNEMONIC="your seed phrase..." in a .env file in the root project folder with your tesntet funded wallet

# deploy each contract 

`npx hardhat --network fuji deploy --tags IMExample`

`npx hardhat --network intain-testnet deploy --tags IMExample`

`npx hardhat deployWireCheck --e testnet --contract IMExample`

`npx hardhat --network fuji sendMessage --target-network intain-testnet --issuer 0xfDDAFFa49e71dA3ef0419a303a6888F94bB5Ba18 --qty 1000000000000000000`