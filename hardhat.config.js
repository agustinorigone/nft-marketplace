require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

//Localhost setup
const localhost = {
  hardhat: {
    chainId: 1337,
  }
}

//MUMBAI setup
const { ALCHEMY_API_KEY, MUMBAI_PRIVATE_KEY } = process.env;
const mumbai = {
  ropsten: {
    url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
    accounts: [`${MUMBAI_PRIVATE_KEY}`]
  }
}

const network = process.env.NETWORK_ENV === 'mumbai' ? mumbai : localhost;

module.exports = {
  solidity: "0.8.4",
  networks: network
};