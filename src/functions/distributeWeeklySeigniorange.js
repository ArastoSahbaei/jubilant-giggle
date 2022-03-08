import { getDistributionWallet } from "./getDistributionWallet.js"
import { getProvider } from "./getProvider.js"
import { utils } from "ethers"

export const distributeWeeklySeigniorange = async (walletId, amount) => {
   const provider = getProvider()
   const wallet = getDistributionWallet()
   const signer = wallet.connect(provider)

   try {
      const transaction = await signer.sendTransaction({
         to: walletId,
         value: utils.parseUnits('0.003', 'ether'),
      })
      console.log("SENDING WEEKLY DISTRIBUTION: ", transaction.to)
   } catch (error) {
      console.error(error)
   }
}