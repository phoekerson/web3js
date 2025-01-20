const {Web3} = require('web3')
const url = "https://mainnet.infura.io/v3/f9c78d5b76604d36b0f486805fc26a00"
const web3 = new Web3(url)

// web3.eth.getBlockNumber().then((result) => {
//     console.log(result)
// })

// web3.eth.getBlock(21665493).then((block) => {
//     console.log(block)
// })

// web3.eth.getBlockNumber().then((result) => {
//     for(let i=1; i<100;i++){
//         web3.eth.getBlock(result).then((block) => {
//             console.log(block.number)
//         })
//     }
// })

// web3.eth.getBlock('latest').then((block)=>{
//     console.log(block.number)
// })
// web3.eth.getBlock('pending').then((block)=>{
//     console.log(block.number)
// })
// web3.eth.getBlock('0x59136ca94a08e69944e5c24c723c1d65d1eec62f396ec73cb6e2e7863cb43d4d').then((block)=>{
//     console.log(block.number)
// })

web3.eth.getTransactionFromBlock(21665690, 2).then(console.log)