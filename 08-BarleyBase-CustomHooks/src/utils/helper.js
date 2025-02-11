export function filteredBreweryList(allBreweries, searchText) {
  allBreweries.filter((brew) =>
    brew.name.toLowerCase().includes(searchText.toLowerCase())
  );
}
