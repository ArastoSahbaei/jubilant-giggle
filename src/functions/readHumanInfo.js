import { getProvider } from "./getProvider.js"
import { readBlockData } from "./readBlockData.js"

export const readHumanInfo = async (transactionsId) => {
   const provider = getProvider()
   try {
      const transaction = await provider.getTransaction(transactionsId)
      console.log(transaction.data)
      const userData = readBlockData(transaction.data)
      console.log(userData.user123.email)
   } catch (error) {
      console.error(error)
   }
}