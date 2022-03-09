import { utils } from "ethers"

export const readBlockData = (data) => {
   try {
      const readAbleUTF8Data = JSON.parse(utils.toUtf8String(data))
      return readAbleUTF8Data
   } catch (error) {
      /*  console.error(error) */
   }
}