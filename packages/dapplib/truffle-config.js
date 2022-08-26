require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi office spot edge rescue spawn purity grace basket fresh trophy'; 
let testAccounts = [
"0xe62dea867839e771fb9a83a6ddf3b2c2d3bb981e9d53e78cdd6f810f62e25b49",
"0x8f5b52d7bfba5c022724f1bc0b5a0510b29278e591528df52260f54db397b7d1",
"0xbeeaa749bf8755ccaf297e9593218211e600284c4d23313ee7f79bc0009e9a29",
"0x8bf5db96923fbafad92b32cbe61b8b9482fbd6b2862016d158319e8c390d06b9",
"0xc34751ace6d46d2d2211a272cc3d3b09b50efd27eaaf23a6072edcfbf1ca309d",
"0x4673c354e4e16dec8c82ac597ad1c4f00e904bc3d2a4376f5eaceaa618d3468c",
"0x66d6381f2409b0e7943e22bcb626420c937105e502fc85480dc4b730fba042f0",
"0x02355463611f0388f472d3b3c81cccf5742d68a6a6ab1880524979dfa9570d32",
"0xdd529fdbaf920f7943fef08138238b406844427d6c3375b0687e354082399694",
"0x34e212cf0ebec77cdc8db462b34f439c51ef8828906f63368bfc194e175e85b5"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

