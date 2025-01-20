const { Web3} = require('web3')
const url = "https://mainnet.infura.io/v3/f9c78d5b76604d36b0f486805fc26a00"
const web3 = new Web3(url)

const wallet = web3.eth.accounts.wallet.create(2, "I create two wallet")
console.log(wallet[0])