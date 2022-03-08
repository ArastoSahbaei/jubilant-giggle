import { WALLET_PRIVATE_KEY } from "../mock/constants.js"
import { utils, Wallet } from "ethers"
import { getProvider } from "./getProvider.js"
import { humanInfo } from "../functions/humanInfo.js"

export const submitHumanInfo = async () => {
   const provider = getProvider()
   const wallet = new Wallet(WALLET_PRIVATE_KEY, provider)
   const signer = wallet.connect(provider)

   try {
      const transaction = await signer.sendTransaction({
         to: wallet.address,
         value: utils.parseUnits('0.003', 'ether'),
         gasPrice: provider.getGasPrice(),
         gasLimit: utils.hexlify(1000000),
         data: utils.toUtf8Bytes(JSON.stringify(humanInfo()))
      })
      console.log(transaction)
   } catch (error) {
      console.error(error)
   }
}