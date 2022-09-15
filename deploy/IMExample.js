const LZ_ENDPOINTS = require("../constants/layerzeroEndpoints.json")

module.exports = async function ({ deployments, getNamedAccounts }) {
    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()
    console.log(`>>> your address: ${deployer}`)

    // get the Endpoint address
    const endpointAddr = LZ_ENDPOINTS[hre.network.name]
    console.log(`[${hre.network.name}] Endpoint address: ${endpointAddr}`)
    const stablecoin = await ethers.getContract("MockToken")
    console.log(`[${hre.network.name}] stablecoin.address: ${stablecoin.address}`)

    await deploy("IMExample", {
        from: deployer,
        args: [endpointAddr, stablecoin.address],
        log: true,
        waitConfirmations: 1,
    })
}

module.exports.tags = ["IMExample"]
module.exports.dependencies = ["MockToken"]