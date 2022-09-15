const CHAIN_ID = require("../constants/chainIds.json");
const { getDeploymentAddresses } = require("../utils/readStatic");

module.exports = async function (taskArgs, hre) {
    const dstChainId = CHAIN_ID[taskArgs.targetNetwork]
    const contractInstance = await ethers.getContract("IMExample")
    console.log(`local contract: ${contractInstance.address}`)
    const mockToken = await ethers.getContract("MockToken")

    console.log(`approve() the contract to transferFrom the sender's stablecoin`);
    let tx = await (
        await mockToken.approve(
           contractInstance.address,
           taskArgs.qty
        )
    ).wait()
    console.log(`approve() tx: ${tx.transactionHash}`)

    console.log(`sendMessage()`);
    tx = await (
        await contractInstance.sendMessage(
            dstChainId,
            taskArgs.issuer,
            taskArgs.qty,
            { value: ethers.utils.parseEther("1") }
        )
    ).wait()
    console.log(`sendMessage() tx: ${tx.transactionHash}`)
}