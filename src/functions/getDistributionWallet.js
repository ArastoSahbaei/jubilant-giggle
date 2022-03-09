import { WALLET_PRIVATE_KEY } from "../mock/constants.js"
import { Wallet } from "ethers"

export const getDistributionWallet = (provider) => {
   const wallet = new Wallet(WALLET_PRIVATE_KEY, provider)
   return wallet
}