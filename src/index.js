import { DERC20_CONTRACT_ADDRESS, WALLET_ADDRESS } from './mock/constants.js'
import { Contract, utils } from 'ethers'
import { submitHumanInfo } from './functions/submitHumanInfo.js'
import { readHumanInfo } from './functions/readHumanInfo.js'
import { getProvider } from './functions/getProvider.js'
import { DERC20_ABI } from '../abis/DERC20_ABI.js'

const provider = getProvider()

const init = async () => {
  const maticBalance = await provider.getBalance(WALLET_ADDRESS)
  const tokenContract = new Contract(DERC20_CONTRACT_ADDRESS, DERC20_ABI, provider)
  const tokenBalance = await tokenContract.balanceOf(WALLET_ADDRESS)
  console.log("MATIC balance: ", utils.formatEther(maticBalance))
  console.log("DERC20 balance: ", utils.formatUnits(tokenBalance))
}

const sendGLODistribution = () => {
  // get all wallets that are legit and then send the transaction
  // How do i send multiple transacations at the same time?

  //1. determine validated(KYC) wallets to send the tokens
  //2. determine token amount to distribute
  //3. create transactions to all validated wallets with the calculated token amount
  //4.
  //5. loop weekly?

  return true
}

init()

await submitHumanInfo()

const transactionHashId = '0x07d69381f5ec165d9f5344b7fb87c1ebc61925c608d8ed80df0f258b5d68f559'
readHumanInfo(transactionHashId)


