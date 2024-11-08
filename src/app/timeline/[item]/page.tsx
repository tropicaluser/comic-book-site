/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { BookList } from "@/app/(components)/Book";
import {
  dataPre1930,
  data19301950,
  data19501970,
  data19701990,
  data19902000,
  data20002011,
} from "@/data/slice-data";

// Function to group the data by year
const groupByYear = (data: any[]) => {
  return data.reduce((acc, item) => {
    const year = item.year;
    // Initialize array for the year if not already in the accumulator
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(item); // Add the current item to the corresponding year
    return acc;
  }, {});
};

export default function PageComics({ params }: { slug: string }) {
  // params
  const { item } = params;

  let groupedData: any;
  if (item === "pre") {
    groupedData = groupByYear(dataPre1930);
  } else if (item === "1930-50") {
    groupedData = groupByYear(data19301950);
  } else if (item === "1950-70") {
    groupedData = groupByYear(data19501970);
  } else if (item === "1970-90") {
    groupedData = groupByYear(data19701990);
  } else if (item === "1990-00") {
    groupedData = groupByYear(data19902000);
  } else if (item === "2000-2012") {
    groupedData = groupByYear(data20002011);
  }

  return (
    <div className="grid bg-white h-full">
      {Object.keys(groupedData).map((year) => (
        <div key={year} className="year-group">
          {/* Display the year in a div */}
          <h3 className="year my-4 text-xl font-thin font-rambla">{year}</h3>
          {/* Display the list of books for this year */}
          <BookList data={groupedData[year]} />
        </div>
      ))}
    </div>
  );
}

const MAX_WIDTH = 1024;

const PageComicLayout = () => {
  return (
    <div
      style={{
        maxWidth: MAX_WIDTH,
        marginLeft: "auto",
        marginRight: "auto",
      }}
      className="measure px-4 lg:px-0 py-4 lg:py-8 grid grid-cols-1 gap-4 lg:gap-12 lg:grid-cols-1-2"
    ></div>
  );
};

const PageRight = () => {
  return <div>Right</div>;
};

const PageLeft = () => {
  return (
    <div className="lg:justify-self-end hidden lg:block">
      <div id="main-image" className="mb-8 w-full">
        <div className="relative shadow-book lg:w-book-detail-image w-2/3 mx-auto lg:mr-0">
          <a
            data-lightbox="image"
            className="block w-full"
            href="https://images-us.bookshop.org/ingram/9781668047361.jpg?height=1200&amp;v=v2-3a9412044eceb0f0e12721e26ff95dca"
          >
            <img
              className="w-full"
              alt="What the Chicken Knows: A New Appreciation of the World's Most Familiar Bird - Montgomery, Sy"
              src="https://images-us.bookshop.org/ingram/9781668047361.jpg?height=500&amp;v=v2-3a9412044eceb0f0e12721e26ff95dca"
            />
          </a>

          <div className="absolute book-cover-shadow inset-0 pointer-events-none"></div>
        </div>
      </div>
      <div id="book2look-container" className=""></div>
      <div className="sidebar-ads">
        <div
          id="div-gpt-ad-above-skyscraper"
          className="mx-auto gpt-ad-unit gpt-ad-unit-header mt-8"
        ></div>
      </div>
    </div>
  );
};
