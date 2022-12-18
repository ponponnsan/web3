const Web3 = require('web3')

let web3 = new Web3(Web3.givenProvider || "ws://some.local-or-remote.node:8546");

//コンパイルされたコントラクト
var trans_sol = ""
const transaction = {
    from : "0x9D0399D9B9C747f7395DbA089D660F0956902567",
    data : trans_sol 
}
const send = web3.eth.sendTransaction(transaction, function(error, hash){})
console.log(send)
