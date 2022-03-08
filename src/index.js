import { DERC20_CONTRACT_ADDRESS, WALLET_ADDRESS } from './mock/constants.js'
import { sendGLODistribution } from './functions/sendGLODistribution.js'
import { Contract, utils } from 'ethers'
import { getProvider } from './functions/getProvider.js'
import { DERC20_ABI } from '../abis/DERC20_ABI.js'

const provider = getProvider()

const init = async () => {
  const maticBalance = await provider.getBalance(WALLET_ADDRESS)
  const tokenContract = new Contract(DERC20_CONTRACT_ADDRESS, DERC20_ABI, provider)
  const tokenBalance = await tokenContract.balanceOf(WALLET_ADDRESS)
  console.log("MATIC balance: ", utils.formatEther(maticBalance))
  console.log("DERC20 balance: ", utils.formatUnits(tokenBalance))

  /* await submitHumanInfo() */
  sendGLODistribution()
}

init()


