const { Web3, web3ProvidersMapUpdated } = require('web3');
let url_infura = 'https://mainnet.infura.io/v3/f9c78d5b76604d36b0f486805fc26a00';
let object = new Web3(url_infura);

const address = "0x00000000219ab540356cBB839Cbe05303d7705Fa";


(async () => {
    const balance = await object.eth.getBalance(address);
    const value = await object.eth.getGasPrice(address);
    console.log(balance)
    console.log(value)
})()

