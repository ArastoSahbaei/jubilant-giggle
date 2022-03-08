import { utils } from "ethers"

export const readBlockData = (data) => {
   const readAbleUTF8Data = JSON.parse(utils.toUtf8String(data))
   return readAbleUTF8Data
}