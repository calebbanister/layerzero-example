const CHAIN_ID = require("../constants/chainIds.json");

module.exports = async function (taskArgs, hre) {
    const dstChainId = CHAIN_ID[taskArgs.targetNetwork]
    const contractInstance = await ethers.getContract("IMExample")
    console.log(`local contract: ${contractInstance.address}`)
    const mockToken = await ethers.getContract("MockToken")

    console.log(`sendMessage()`);
    tx = await (
        await contractInstance.sendMessage(
            dstChainId,
            taskArgs.investor,
            taskArgs.issuer,
            taskArgs.token,
            taskArgs.amount,
            taskArgs.tx,
            taskArgs.status,
            { value: ethers.utils.parseEther("1") }
        )
    ).wait()
    console.log(`sendMessage() tx: ${tx.transactionHash}`)
}