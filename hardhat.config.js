require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-ethers');

module.exports = {
  solidity: '0.8.4',
  paths: {
    artifacts: './src/artifacts'
  },
  networks: {
    hardhat: {},
    // ropsten: {
    //   url: 'https://ropsten.infura.io/v3/your-project-id',
    //   accounts: [process.env.PRIVATE_KEY]
    // }
  }
};
