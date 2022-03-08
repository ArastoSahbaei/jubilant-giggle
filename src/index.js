import { providers, Contract, utils } from 'ethers'
import { DERC20_ABI } from '../abis/DERC20_ABI.js'
import { DERC20_CONTRACT_ADDRESS, MORALIS_API, WALLET_ADDRESS } from './Constants.js'
import { createTransaction } from './functions/createTransaction.js'

const provider = new providers.JsonRpcProvider(MORALIS_API)

async function init() {
  const maticBalance = await provider.getBalance(WALLET_ADDRESS)
  const tokenContract = new Contract(DERC20_CONTRACT_ADDRESS, DERC20_ABI, provider)
  const tokenBalance = await tokenContract.balanceOf(WALLET_ADDRESS)
  console.log("MATIC balance: ", utils.formatEther(maticBalance))
  console.log("DERC20 balance: ", utils.formatUnits(tokenBalance))
}

function submitHumanInfo() {
  return true
}

function readHumanInfo() {
  return true
}

function sendGLODistribution() {
  // get all wallets that are legit and then send the transaction
  // How do i send multiple transacations at the same time?

  //determineDelegationAmount
  return true
}

export function humanInfo() {
  let johnDoe = {
    user123: {
      name: 'John Doe Of Denham',
      dob: '10-10-1980',
      nationality: 'NL',
      email: 'john.doe@denham.com',
      tel: '123',
      cob: 'abc',
      pob: 'def',
      country: 'ghi',
      city: 'jkl',
      street: 'mno',
      nin: 'pqr',
      idn: 'stu',
      kyc_date: new Date().toISOString().split('T')[0],
      wallet: '0xD6B2fed043153cC9A4698773b8721237626ecF29',
    }
  }
  return johnDoe
}

await createTransaction()
init()


