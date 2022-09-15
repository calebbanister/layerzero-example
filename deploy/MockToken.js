module.exports = async function ({ deployments, getNamedAccounts }) {
    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()

    await deploy("MockToken", {
        from: deployer,
        args: ["MockToken", "MOCK"],
        log: true,
        waitConfirmations: 1,
    })
}

module.exports.tags = ["MockToken"]