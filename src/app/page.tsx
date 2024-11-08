"use client";

import { BookList } from "@/app/(components)/Book";
import { dataPre1930 } from "@/data/slice-data";

export default function Home() {
  return (
    <div className="grid bg-white h-full">
      <BookList data={dataPre1930} />
    </div>
  );
}
