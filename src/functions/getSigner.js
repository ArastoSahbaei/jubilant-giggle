
export const getSigner = (wallet, provider) => {
   const signer = wallet.connect(provider)
   return signer
}