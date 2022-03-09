export const validateKYC = (KYCvalidation) => {
   let KYCvalidatedWallets = []
   const validate = new Date()
   validate.setMonth(validate.getMonth() + 6)

   for (let i = 0; i < KYCvalidation.length; i++) {
      const isWithinValidationTime = KYCvalidation[i]?.user123?.kyc_date < validate.toISOString().split('T')[0]
      isWithinValidationTime && KYCvalidatedWallets.push(KYCvalidation[i]?.user123?.wallet)
   }

   console.log(`${KYCvalidatedWallets.length} out of ${KYCvalidation.length} wallets sucessfully validated`)
   return KYCvalidatedWallets
}