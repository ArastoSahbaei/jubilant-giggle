import { WALLET_PRIVATE_KEY } from "../mock/constants.js"
import { getProvider } from "./getProvider.js"
import { Wallet } from "ethers"

export const getDistributionWallet = () => {
   const provider = getProvider()
   const wallet = new Wallet(WALLET_PRIVATE_KEY, provider)
   return wallet
}