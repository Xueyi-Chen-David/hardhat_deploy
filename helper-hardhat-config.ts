interface networkConfigItem {
    chainId?: number
    ethUsdPriceFeed?: string
    blockConfirmations?: number
}

interface networkConfigInfo {
    [key: string]: networkConfigItem
}

export const networkConfig: networkConfigInfo = {
    localhost: {},
    hardhat: {},
    sepolia: {
        chainId: 0xaa36a7,
        ethUsdPriceFeed: "0x694AA1769357215DE4FAC081bf1f309aDC325306",
        blockConfirmations: 6
    },
    polygon: {
        chainId: 137,
        ethUsdPriceFeed: "0xF9680D99D6C9589e2a93a78A04A279e509205945",
        blockConfirmations: 6
    },
}

export const developmentChains = ["hardhat", "localhost"]
