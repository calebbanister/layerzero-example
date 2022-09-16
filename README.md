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

### issuer must approve the IM contract!
```
npx hardhat --network fuji approve
```

### send a message
```
npx hardhat --network fuji sendMessage --target-network intain-testnet --tx 0xf1ad2b505758e59119078a59aa9a18615f5238df02497f23d79738c5ca5ec7b4 --investor 0xc13b65f7c53Cd6db2EA205a4b574b4a0858720A6 --issuer 0xc13b65f7c53Cd6db2EA205a4b574b4a0858720A6 --token 0x5D0C407747A4f1072723f5b7E27296C7436853B2 --amount 1000000000000000000
```
