import { distributeWeeklySeigniorange } from "./distributeWeeklySeigniorange.js"
import { determineDistributionAmount } from "./determineDistributionAmount.js"
import { readHumanInfo } from "./readHumanInfo.js"
import { validateKYC } from "./validateKYC.js"

export const sendGLODistribution = async () => {
   const distributionAmount = determineDistributionAmount()
   let eligibleWallets = []
   const networkTransactions = ['0x07d69381f5ec165d9f5344b7fb87c1ebc61925c608d8ed80df0f258b5d68f559', '0x07d69381f5ec165d9f5344b7fb87c1ebc61925c608d8ed80df0f258b5d68f559']
   const transactionHashId = '0x07d69381f5ec165d9f5344b7fb87c1ebc61925c608d8ed80df0f258b5d68f559'
   const humanData = await readHumanInfo(transactionHashId)
   if (validateKYC(humanData)) {
      distributeWeeklySeigniorange(humanData.user123.wallet, distributionAmount)
   }

   // get all wallets that are legit and then send the transaction
   // How do i send multiple transacations at the same time?

   //1. determine validated(KYC) wallets to send the tokens
   //2. determine token amount to distribute
   //3. create transactions to all validated wallets with the calculated token amount
   //4.
   //5. loop weekly?

}