import { providers, Contract, utils, ethers } from 'ethers'
import { DERC20_ABI } from '../../abis/DERC20_ABI.js'
import { DERC20_CONTRACT_ADDRESS, MORALIS_API } from '../Constants.js'

export const getTotalSupply = async () => {
  const provider = new providers.JsonRpcProvider(MORALIS_API)
  const tokenContract = new Contract(DERC20_CONTRACT_ADDRESS, DERC20_ABI, provider)
  const supply = await tokenContract.totalSupply()
  const format = utils.formatUnits(supply)
  return format
}
