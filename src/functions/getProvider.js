import { providers } from "ethers"
import { MORALIS_API } from "../mock/constants.js"

export const getProvider = () => {
   const provider = new providers.JsonRpcProvider(MORALIS_API)
   return provider
}