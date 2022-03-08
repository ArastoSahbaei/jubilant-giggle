import { ethers, providers } from "ethers"
import { MORALIS_API, WALLET_PRIVATE_KEY } from "../Constants.js"
import { humanInfo } from "../index.js"

export const createTransaction = async () => {
   const provider = new providers.JsonRpcProvider(MORALIS_API)
   const wallet = new ethers.Wallet(WALLET_PRIVATE_KEY, provider)
   const signer = wallet.connect(provider)
   const recipient = '0xfe4F5145f6e09952a5ba9e956ED0C25e3Fa4c7F1'

   try {
      const transaction = await signer.sendTransaction({
         to: wallet.address,
         value: ethers.utils.parseUnits('0.003', 'ether'),
         gasPrice: provider.getGasPrice(),
         gasLimit: ethers.utils.hexlify(1000000),
         data: ethers.utils.toUtf8Bytes(humanInfo().toString())
      })
      console.log(transaction)
   } catch (error) {
      console.log(error)
   }
}