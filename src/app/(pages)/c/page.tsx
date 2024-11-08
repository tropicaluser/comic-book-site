"use client";

import { BookList } from "@/app/(components)/Book";
import { data19501970 } from "@/data/slice-data";

export default function PageComics() {
  return (
    <div className="grid bg-white h-full">
      <BookList data={data19501970} />
    </div>
  );
}
