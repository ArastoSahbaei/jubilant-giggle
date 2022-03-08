import { DERC20_CONTRACT_ADDRESS } from "../mock/constants.js"
import { getDistributionWallet } from "./getDistributionWallet.js"
import { Contract, ethers } from "ethers"
import { getProvider } from "./getProvider.js"
import { DERC20_ABI } from "../../abis/DERC20_ABI.js"

export const distributeWeeklySeigniorange = async (walletId, amount) => {
   const provider = getProvider()
   const wallet = getDistributionWallet()
   const signer = wallet.connect(provider)
   const tokenContract = new Contract(DERC20_CONTRACT_ADDRESS, DERC20_ABI, signer)
   const numberOfTokens = ethers.utils.parseUnits(amount.toString(), 18)

   try {
      const transaction = await tokenContract.transfer(walletId, numberOfTokens)
      console.log("SENDING WEEKLY DISTRIBUTION: ", transaction.to)
   } catch (error) {
      console.log(error)
   }
}