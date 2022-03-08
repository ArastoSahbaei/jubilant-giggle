import { MORALIS_API } from "../mock/constants.js"
import { providers } from "ethers"

export const getProvider = () => {
   const provider = new providers.JsonRpcProvider(MORALIS_API)
   return provider
}