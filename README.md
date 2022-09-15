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
### Setup: Put a MNEMONIC="your seed phrase..." in a .env file in the root project folder with your tesntet funded wallet


# Steps to deploying and sending a message:
#### deploy each contract
```
npx hardhat --network fuji deploy --tags IMExample
npx hardhat --network intain-testnet deploy --tags IMExample
```

### securely connect the contracts (ie: setTrustedRemotes)
```
npx hardhat deployWireCheck --e testnet --contract IMExample
```

### send a message
```
npx hardhat --network fuji sendMessage --target-network intain-testnet --issuer 0xfDDAFFa49e71dA3ef0419a303a6888F94bB5Ba18 --qty 1000000000000000000
```
