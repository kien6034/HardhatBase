require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
require("@nomiclabs/hardhat-etherscan");




module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    // mumbai: {
    //   url: `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_MUMBAI_ID}`,
    //   accounts: [process.env.PRIVATE_KEY]
    // },
    // rinkeby: {
    //   url: `https://rinkeby.infura.io/v3/${process.env.INFURA_RINKEBY_ID}`,
    //   accounts: [process.env.PRIVATE_KEY]
 
    // }
    // // mainnet: {
    // //   url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
    // //   accounts: [privateKey]
    // }
  },
  solidity: "0.8.7",

  //using ETHER_API for Ether network, POLYGONSCAN_API for poly network
  // etherscan: {
  //   apiKey: process.env.POLYGONSCAN_API
  // }
};
