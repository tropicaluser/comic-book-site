"use client";

import { BookList } from "@/app/(components)/Book";
import dataJSON from "./data.json";

export default function Home() {
  return (
    <div className="grid bg-white h-full">
      <BookList data={dataJSON} />
    </div>
  );
}
