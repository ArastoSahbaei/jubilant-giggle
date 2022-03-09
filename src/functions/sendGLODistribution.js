import { distributeWeeklySeigniorange } from "./distributeWeeklySeigniorange.js"
import { determineDistributionAmount } from "./determineDistributionAmount.js"
import { NETWORK_TRANSACTIONS } from "../mock/constants.js"
import { readHumanInfo } from "./readHumanInfo.js"
import { validateKYC } from "./validateKYC.js"

export const sendGLODistribution = async () => {
   const distributionAmount = determineDistributionAmount()
   let chainDataPromiseArray = []

   for (let i = 0; i < NETWORK_TRANSACTIONS.length; i++) {
      try {
         const retrievedChainData = await readHumanInfo(NETWORK_TRANSACTIONS[i])
         chainDataPromiseArray.push(retrievedChainData)
      } catch (error) {
         console.error(error)
      }
   }

   const eligibleWallets = validateKYC(chainDataPromiseArray)
   distributeWeeklySeigniorange(eligibleWallets, await distributionAmount)
}