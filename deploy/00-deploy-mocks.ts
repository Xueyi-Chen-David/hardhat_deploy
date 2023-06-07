import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"
import { developmentChains } from "../helper-hardhat-config"

const DECIMALS = 8
const INITIAL_PRICE = 2000000000000 // 2000
const deployMocks: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment
) {
  const { deployments, getNamedAccounts, network } = hre
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()
  console.log(`This is deployer: ${deployer}`)

  if (developmentChains.includes(network.name)) {
    log("\nLocal network detected! Deploying mocks...")
    await deploy("MockV3Aggregator", {
      contract: "MockV3Aggregator",
      from: deployer,
      log: true,
      args: [DECIMALS, INITIAL_PRICE],
    })
    log("Mocks Deployed!")
    log("----------------------------------")
    log(
      "You are deploying to a local network, you'll need a local network running to interact"
    )
    log(
      "Please run `npx hardhat console` to interact with the deployed smart contracts!"
    )
  }
}
export default deployMocks
deployMocks.tags = ["all", "mocks"]