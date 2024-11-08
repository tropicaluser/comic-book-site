import dataJSON from "@/app/data.json";

/**
 * Find the index of the first entry where `year` is greater than or equal to the cutoff year.
 */const getIndexForYear = (cutoffYear: number) =>
  dataJSON.findIndex((book) => (book.year ?? 0) >= cutoffYear);

/**
 * Get data slice for a specific year range.
 * If endIndex is -1, slice to the end of the array.
 */
const getDataForYearRange = (startYear: number, endYear: number) => {
  const startIndex = getIndexForYear(startYear);
  const endIndex = getIndexForYear(endYear);
  return startIndex !== -1
    ? dataJSON.slice(startIndex, endIndex !== -1 ? endIndex : undefined)
    : [];
};

// Create sliced data for each range
const dataPre1930 = dataJSON.slice(0, getIndexForYear(1930));
const data19301950 = getDataForYearRange(1930, 1950);
const data19501970 = getDataForYearRange(1950, 1970);
const data19701990 = getDataForYearRange(1970, 1990);
const data19902000 = getDataForYearRange(1990, 2000);
const data20002011 = getDataForYearRange(2000, 2012);

export {
  dataPre1930,
  data19301950,
  data19501970,
  data19701990,
  data19902000,
  data20002011,
}
