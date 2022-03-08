import { readBlockData } from "./readBlockData.js"
import { getProvider } from "./getProvider.js"

export const readHumanInfo = async (transactionsId) => {
   const provider = getProvider()
   try {
      const transaction = await provider.getTransaction(transactionsId)
      const userData = readBlockData(transaction.data)
      return userData
   } catch (error) {
      console.error(error)
   }
}