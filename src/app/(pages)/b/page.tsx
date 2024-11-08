"use client";

import { BookList } from "@/app/(components)/Book";
import { data19301950 } from "@/data/slice-data";

export default function PageComics() {
  return (
    <div className="grid bg-white h-full">
      <BookList data={data19301950} />
    </div>
  );
}
