
if (typeof window !== 'undefined' && window.web3) {
  exports.web3 = require('web3-api-wrap').web3;
} else {
  const Web3Wallet = require('web3-wallet');

  const localStorage =
    (typeof window !== 'undefined' && window.localStorage) ||
    { getItem() {}, setItem() {} };

  const pri = localStorage.getItem('private_key');
  const wallet = pri ?
    Web3Wallet.wallet.fromPrivateKey(pri) :
    Web3Wallet.wallet.generate();

  if (!pri) localStorage.setItem('private_key', wallet.getPrivateKey().toString('hex'));

  exports.wallet = wallet;
  exports.web3 = Web3Wallet.create(wallet, process.env.ETH_RPC || 'http://hackathon2018.xiaomi.srv/rpc');
}