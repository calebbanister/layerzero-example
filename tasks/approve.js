module.exports = async function (taskArgs, hre) {
    const signers = await ethers.getSigners()
    const imExample = await ethers.getContract("IMExample")
    const mockToken = await ethers.getContract("MockToken")
    console.log(`${signers[0].address} maximum approve on token:${mockToken.address}`)
    let tx = await (
        await mockToken.approve(
            imExample.address,
            ethers.constants.MaxUint256
        )
    ).wait()
    console.log(`approve tx: ${tx.transactionHash}`)
}
