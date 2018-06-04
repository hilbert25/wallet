# wallet
根据是否安装metamask自动决定是使用metamask还是使用web3-wallet。

## 安装
```bash
npm install git+ssh://git@git.n.xiaomi.com:hackathon2018/wallet.git
```

## 使用方法
```js
const { web3 } = require('wallet');

async function foo() {
  console.log(await web3.eth.getBalance('an address'));

  const abi = require('your abi json file');

  const yourContract = web3.loadContract(abi, 'your contract address');
  console.log(await yourContract.someFunction());
}

foo().catch(console.log);
```