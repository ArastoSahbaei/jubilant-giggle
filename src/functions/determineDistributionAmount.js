import { getTotalSupply } from './getTotalSupply.js'

export const determineDistributionAmount = async () => {
   const currentTotalSupply = await getTotalSupply()
   const distributionAmount = (currentTotalSupply / 9000000000000000)
   console.log('Weekly Distribution: ', distributionAmount)
   return distributionAmount
}