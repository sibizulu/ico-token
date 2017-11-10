var bip39 = require('bip39')
var hdkey = require('ethereumjs-wallet/hdkey')
var Web3 = require('web3')
const ProviderEngine = require('web3-provider-engine')
const CacheSubprovider = require('web3-provider-engine/subproviders/cache.js')
const FixtureSubprovider = require('web3-provider-engine/subproviders/fixture.js')
const FilterSubprovider = require('web3-provider-engine/subproviders/filters.js')
const VmSubprovider = require('web3-provider-engine/subproviders/vm.js')
const HookedWalletSubprovider = require('web3-provider-engine/subproviders/wallet.js')
const NonceSubprovider = require('web3-provider-engine/subproviders/nonce-tracker.js')
const RpcSubprovider = require('web3-provider-engine/subproviders/rpc.js')
const WalletSubprovider = require('web3-provider-engine/subproviders/wallet.js')
const Web3Subprovider = require('web3-provider-engine/subproviders/web3.js')

// Get our mnemonic and create an hdwallet
var mnemonic = 'couch solve unique spirit wine fine occur rhythm foot feature glory away'
var hdwallet = hdkey.fromMasterSeed(bip39.mnemonicToSeed(mnemonic))

// Get the first account using the standard hd path.
var wallet_hdpath = "m/44'/60'/0'/0/"
var wallet = hdwallet.derivePath(wallet_hdpath + '0').getWallet()
var address = '0x' + wallet.getAddress().toString('hex')
console.log(address)

var engine = new ProviderEngine()
var web3 = new Web3(engine)
var web3Provider = new Web3.providers.HttpProvider('https://kovan.infura.io/CadsR2UBe43oaj5KlUnW')
console.log(web3Provider)

engine.addProvider(new CacheSubprovider())
engine.addProvider(new FilterSubprovider())
engine.addProvider(new NonceSubprovider())
engine.addProvider(new VmSubprovider())
engine.addProvider(new WalletSubprovider(wallet, {}))
engine.addProvider(new Web3Subprovider(web3Provider))

// log new blocks
// engine.on('block', function (block) {
//   console.log('================================')
//   console.log('BLOCK CHANGED:', '#' + block.number.toString('hex'), '0x' + block.hash.toString('hex'))
//   console.log('================================')
// })

// network connectivity error
engine.on('error', function (err) {
  // report connectivity errors
  console.error(err.stack)
})

engine.start() // Required by the provider engine.

// module.exports = {
//   networks: {
//     'kovan': {
//       network_id: 42,    // Official ropsten network id
//       provider: engine, // Use our custom provider
//       from: address,    // Use the address we derived
//       gas: 4704579
//     }
//   },
//   rpc: {
//     // Use the default host and port when not using ropsten
//     host: 'localhost',
//     port: 8545
//   }
// }

  // web3.eth.getBlock("pending").gasLimit

// web3.eth.getBlock('pending', function (error, result) { console.log(error, result) } )

module.exports = {
  networks: {
    development: {
      host: '192.168.27.101',
      port: 8545,
      gas: 4712388,
      network_id: '*' // Match any network id
    }
  }
}
