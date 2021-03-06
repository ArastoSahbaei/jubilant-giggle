import { DERC20_CONTRACT_ADDRESS } from '../mock/constants.js'
import { Contract, utils } from 'ethers'
import { getProvider } from './getProvider.js'
import { DERC20_ABI } from '../../abis/DERC20_ABI.js'

export const getTotalSupply = async () => {
  const provider = getProvider()
  const tokenContract = new Contract(DERC20_CONTRACT_ADDRESS, DERC20_ABI, provider)
  const supply = await tokenContract.totalSupply()
  const format = utils.formatUnits(supply)
  return format
}
