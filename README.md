# Distributing Global Income Coin Challenge
This tiny repository is intended to help you on your way with the challenge to distribute Global Income Coin to verified humans. The goal of this challenge is to submit a transaction to the Polygon testnet verifying a new human, and to distribute an initial amount of GLO to this human's wallet.

As the GLO token doesn't exist yet, however, we are going to simulate this with Polygon's Test ERC20 token `DERC20` you can get from their faucet for free.

Here are the high level requirements you should implement for t his challenge:
1. Submit a transaction with John Doe's information in it to enroll him as a verified human
2. Read transactions with verified humans on the Polygon testnet
3. Send a distribution of GLO to eligible wallet(s)


## To get started working on this challenge
1. Install the web3.js package by running `yarn`
2. Sign up for a free account on https://moralis.io/ to get a Polygon Mumbai Testnet Web3 node URL, set it as MORALIS_API
3. Create a new testnet wallet, set its address as WALLET_ADDRESS. (Easiest way to create a new wallet is probably to install Metamask in a fresh browser)
4. Visit https://faucet.polygon.technology/ and request 10 Test ERC20 (PoS) tokens + 1 Matic to be sent to your testnet wallet address
5. Run gloweb3.py with `node src/index.js` to validate everything is working correctly
6. Start coding :-)
7. Please do not hesitate to ask as many questions as you may want to via email!