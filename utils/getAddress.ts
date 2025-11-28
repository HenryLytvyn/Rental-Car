export default function getAddress(
  countryOrCity: 'country' | 'city',
  addressString: string
) {
  const arrAddress = addressString
    .split(' ')
    .map(el => (el.endsWith(',') ? el.slice(0, -1) : el));

  if (countryOrCity === 'city') return arrAddress[arrAddress.length - 2];
  if (countryOrCity === 'country') return arrAddress[arrAddress.length - 1];
}
