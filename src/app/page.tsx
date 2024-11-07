"use client";

import { BookList } from "@/app/(components)/Book";
import dataJSON from "./data.json";

const DATA_JSON = [
  {
    number: 1,
    title: "The Adventures of Mr. Obadiah Oldbuck",
    author: "Rodolphe Töpffer",
    image: {
      thumbnail: "http://localhost:3000/images/01.jpg",
    },
    year: 1837,
  },
  {
    number: 2,
    title: "The History Of Holy Russia",
    year: 1854,
    author: "Gustave Doré",
    image: {
      smallThumbnail:
        "http://books.google.com/books/content?id=2NxoAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail: "http://localhost:3000/images/02.jpg",
    },
    sources: [
      "https://comicsforum.org/2015/12/09/the-history-of-russian-comics-an-interview-with-misha-zaslavskiy-by-maria-evdokimova/",
    ],
  },
  {
    number: 3,
    title: "Max & Moritz",
    year: 1865,
    author: "Wilhelm Busch",
    image: {
      thumbnail: "http://localhost:3000/images/03.jpg",
    },
  },
  {
    number: 4,
    title: "Ally Sloper",
    author: `Charles H. Ross & "Marie Duval"`,
    image: {
      thumbnail: "http://localhost:3000/images/04.jpg",
    },
    year: 1867,
  },
];

export default function Home() {
  return (
    <div className="grid bg-white h-full">
      <BookList data={dataJSON} />
    </div>
  );
}
