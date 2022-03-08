import { utils, Wallet } from "ethers"
import { WALLET_PRIVATE_KEY } from "../mock/constants.js"
import { humanInfo } from "../functions/humanInfo.js"
import { getProvider } from "./getProvider.js"

export const submitHumanInfo = async () => {
   const provider = getProvider()
   const wallet = new Wallet(WALLET_PRIVATE_KEY, provider)
   const signer = wallet.connect(provider)
   const recipient = '0xfe4F5145f6e09952a5ba9e956ED0C25e3Fa4c7F1'

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