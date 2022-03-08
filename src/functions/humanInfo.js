export const humanInfo = () => {
  let johnDoe = {
    user123: {
      name: 'John Doe Of Denham',
      dob: '10-10-1980',
      nationality: 'NL',
      email: 'john.doe@denham.com',
      tel: '123',
      cob: 'abc',
      pob: 'def',
      country: 'ghi',
      city: 'jkl',
      street: 'mno',
      nin: 'pqr',
      idn: 'stu',
      kyc_date: new Date().toISOString().split('T')[0],
      wallet: '0xD6B2fed043153cC9A4698773b8721237626ecF29',
    }
  }
  return johnDoe
}