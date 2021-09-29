require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty forget spray fine note sad protect hockey inflict swing gather'; 
let testAccounts = [
"0xb0d49bc8ac71a686562716d215a54fbd6abaebe47e85a57a3d23c2f197f3155a",
"0x8d033aecb4297b77ec67a3778d5a142386ae6da9ddad798d7edb7244517d7a61",
"0x09ec7910aec3f84305913b3f9ae4b0b0d4e1d8b5b084332f191a665500e965c5",
"0x92aef386e0c18879851de446d919e64ad0ef8910928aab343360d2a120b2411f",
"0x50f48f427d31aa90b3016f750524f8d9f6cd4b419b36308b8271f399908b2a0d",
"0xd9b44ce6ecd5d80bd86e4d580992451617b62ba624b34b08d1367015d8324941",
"0x9fef477d3f86a79a95017dd619b15136f2e0f1e08886b0e4ca24ffbf6f526c8b",
"0x0831a60af7e3bf57b74e09e123ee5ee4b4f987a7662c988b6381304e21cb7cbb",
"0x16f528d7909f5c86663aadc79d15bb7caa94c920519a55ce8359f6d49eef4f32",
"0x6b7ad0dc1e6c3cebcd4a2c065c7eeac731c19a96d252d408d9172d9692528a27"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


