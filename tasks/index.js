//
task("setTrustedRemote", "setTrustedRemote(chainId, sourceAddr) to enable inbound/outbound messages with your other contracts", require("./setTrustedRemote"))
    .addParam("targetNetwork", "the target network to set as a trusted remote")
    .addOptionalParam("srcContract", "")
    .addOptionalParam("dstContract", "")

// npx hardhat checkWireUp --e testnet --contract OmniCounter
task("checkWireUp", "check wire up", require("./checkWireUp"))
    .addParam("e", "environment testnet/mainet")
    .addParam("contract", "the contract to delete and redeploy")

// npx hardhat checkWireUpAll --e testnet --contract OmniCounter
// npx hardhat checkWireUpAll --e mainnet --contract OFT --proxy-contract ProxyOFT --proxy-chain ethereum
task("checkWireUpAll", "check wire up all", require("./checkWireUpAll"))
    .addParam("e", "environment testnet/mainet")
    .addParam("contract", "name of contract")
    .addOptionalParam("proxyContract", "name of proxy contract")
    .addOptionalParam("proxyChain", "name of proxy chain")

task("deployWireCheck", "", require("./deployWireCheck"))
    .addParam("e", "environment testnet/mainet")
    .addParam("contract", "")
    .addOptionalParam("proxyChain", "")
    .addOptionalParam("proxyContract", "")

task("getSigners", "show the signers of the current mnemonic", require("./getSigners")).addOptionalParam("n", "how many to show", 3, types.int)

task("sendMessage", "", require("./sendMessage"))
    .addParam("targetNetwork", "the target chain name: ie: fuji, intain-testnet")
    .addParam("investor", "the address of the investor on destination")
    .addParam("issuer", "the address of the issuer on destination")
    .addParam("token", "the token address on destination")
    .addParam("amount", "the amount of tokens to transfer from issuer to investor")
    .addParam("tx", "the transactionHash on source chain of investor transferring issuer stablecoin")
    .addOptionalParam("status", "true | false", true, types.boolean)


task("approve", "approve the IMExample contract to spend your MockTokens", require("./approve"))
