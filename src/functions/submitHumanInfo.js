import { getDistributionWallet } from "./getDistributionWallet.js"
import { getProvider } from "./getProvider.js"
import { humanInfo } from "../functions/humanInfo.js"
import { getSigner } from "./getSigner.js"
import { utils } from "ethers"

export const submitHumanInfo = async () => {
   const provider = getProvider()
   const wallet = getDistributionWallet(provider)
   const signer = getSigner(wallet, provider)

   try {
      const transaction = await signer.sendTransaction({
         to: wallet.address,
         value: utils.parseUnits('0.003', 'ether'),
         gasPrice: provider.getGasPrice(),
         gasLimit: utils.hexlify(1000000),
         data: utils.toUtf8Bytes(JSON.stringify(humanInfo()))
      })
      console.log(`Human Data Sucessfully Submitted. HASH: ${transaction.hash}`)
   } catch (error) {
      console.error(error)
   }
}