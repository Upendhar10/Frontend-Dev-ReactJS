export function filteredBreweryList(allBreweries, searchText) {
  if (!allBreweries || allBreweries.length === 0) {
    return [];
  }
  return allBreweries.filter((brew) =>
    brew.name.toLowerCase().includes(searchText.toLowerCase())
  );
}
