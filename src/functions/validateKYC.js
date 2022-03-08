export const validateKYC = (KYCvalidation) => {
   const validate = new Date()
   validate.setMonth(validate.getMonth() + 6)
   const isWithinValidationTime = KYCvalidation.user123.kyc_date < validate.toISOString().split('T')[0]
   console.log("HUMAN VALIDATED: ", isWithinValidationTime)
   return isWithinValidationTime ? true : false
}