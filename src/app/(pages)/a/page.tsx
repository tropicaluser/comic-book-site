/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { BookList } from "@/app/(components)/Book";
import { dataPre1930 } from "@/data/slice-data";

export default function PageComics() {
  return (
    <div className="grid bg-white h-full">
      <BookList data={dataPre1930} />
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
