const Web3 = require('web3')

let web3 = new Web3(Web3.givenProvider || "ws://some.local-or-remote.node:8546");

// console.log(web3.currentProvider)

let num_Of_accounts =2

// ウォレットに 1 つ以上のアカウントを生成します。ウォレットがすでに存在する場合、それらは上書きされません。
const create_wallets = web3.eth.accounts.wallet.create(num_Of_accounts)

// console.log(create_wallets)

// アカウント作成
// const create_account = web3.eth.accounts.create();

//秘密鍵またはアカウント オブジェクトを使用してアカウントをウォレットに追加します。
// let privateKey = create_account.privateKey
// const add_wallet = web3.eth.accounts.wallet.add(privateKey);
// console.log(add_wallet)

// ウォレットからアカウントを削除します。
// let address = create_account.address
// const remove_wallet = web3.eth.accounts.wallet.remove(address);
// console.log(remove_wallet)

/*  ウォレットを暗号化して文字列としてローカルストレージに保存します。!!ブラウザのみの動作
password- String: ウォレットを暗号化するためのパスワード。
keyName- String: (オプション) ローカル ストレージの位置に使用されるキー。デフォルトは"web3js_wallet"。
const password = "0510"
// let keyName = "web3js_wallet"
const save_wallet = web3.eth.accounts.wallet.save(password);
console.log(save_wallet)
*/
console.log(web3.eth.accounts.wallet)