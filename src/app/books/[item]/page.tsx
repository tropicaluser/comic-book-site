import Flipbook from "@/app/books/[item]/flipbook";

export default function BookPage() {
  return (
    <div>
      <h1>some kind of pdf reader</h1>
      <div className="grid grid-cols-2">
        <div className=" col-span-4 min-w-[400px]">
          Some more text MOOOOOOOOOOOOOOOOOOOOO MOOOOO
          <h1>I am here! YESSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS</h1>
        </div>
        <div className="col-span-2 md:col-span-1">
          <Flipbook pdfUrl="http://localhost:3000/books/something.pdf" />
        </div>
      </div>

      {/* <TurnjsComponent /> */}
    </div>
  );
}
