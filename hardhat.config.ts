import { HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"
import "hardhat-gas-reporter"
import "dotenv/config"
import "./tasks/block_number"
import "hardhat-deploy"

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY!
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  // solidity: "0.8.8",
  solidity: {
    compilers: [{ version: "0.8.8" }, { version: "0.6.6" }]
  },
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 0xaa36a7,
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  },
  gasReporter: {
    enabled: false,
    // outputFile: "gas-report.txt"
    //currency:"TWD",
    //coinmarketcap: [api key] https://coinmarketcap.com/api/pricing/
  },
  namedAccounts: {
    deployer: {
      default: 0,
      1: 0,
      0xaa36a7: 0,
    }
  }
}

export default config;
