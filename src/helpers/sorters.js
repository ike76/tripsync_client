export function sortAdminLocsAlphabetically(unsortedArr) {
  const sorted = unsortedArr.sort((a, b) => {
    const airportA = a.location.airportCode
    const airportB = b.location.airportCode
    return airportA < airportB ? -1 : 1
  })
  return sorted
}
