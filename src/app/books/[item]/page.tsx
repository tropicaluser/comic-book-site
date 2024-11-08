/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ArrowLeftIcon } from "lucide-react";
import PhotoImage from "./image.jpg";
import Image from "next/image";
import Link from "next/link";

const CustomButtonDefault = ({ children, ...props }: any) => {
  return (
    <button className="bg-[#FF971D] text-white px-8 py-2 rounded-md font-rubik">
      {children}
    </button>
  );
};

const CustomButtonGray = ({ children, ...props }: any) => {
  return (
    <button className="bg-[#DEDEDE] text-gray-400 px-6 py-2 rounded-md font-rubik">
      {children}
    </button>
  );
};

const CustomButtonInverse = ({ children, ...props }: any) => {
  return (
    <button className="bg-white border text-[#FF971D] border-[#FF971D] px-8 py-2 rounded-md font-rubik">
      {children}
    </button>
  );
};

export default function BookPageLayout() {
  return (
    /*************  ✨ Codeium Command ⭐  *************/
    /**
     * Go back to the previous page in the Next.js router history.
     * @function
     */
    /******  69b913bd-315b-4a9b-b811-499fe950b67e  *******/ <div className="bg-[#F5F6F8]">
      <div className="bg-orange-500 h-[250px]">
        <div className="pt-12 ml-28">
          <Link href="/">
            <ArrowLeftIcon className="text-white" size="40" />
          </Link>
        </div>
      </div>

      <div className="ml-28 -mt-40 bg-white max-w-xl rounded">
        <BookPage />
      </div>
    </div>
  );
}

function BookPage() {
  return (
    <>
      <div className="grid grid-cols-2">
        <div>
          <Image
            alt="something"
            src={PhotoImage}
            width={200}
            style={{
              boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.25)", // Right and bottom shadow
              borderRadius: "4px", // Optional: Add rounding for a softer look
            }}
          />
        </div>
        <div className="flex flex-col justify-end gap-4 -ml-8">
          <h1 className="text-4xl font-rubik font-medium">Garis Waktu</h1>
          <div className="flex gap-4 font-rambla text-gray-500">
            <p>by Fiersa Besari</p>
            <p>1 Juli 2024</p>
          </div>
          <div className="flex gap-4 font-rambla  text-gray-500">
            <p>3.7M Read</p>
            <p>9.8KI Votes</p>
          </div>
          <div className="flex gap-4">
            <CustomButtonDefault>Buy Now</CustomButtonDefault>
            <CustomButtonInverse>Read Book</CustomButtonInverse>
          </div>
        </div>

        {/* <TurnjsComponent /> */}
      </div>
      <div className="pt-10 grid px-8">
        <h1 className="font-rubik text-2xl font-thin">Sinoposis</h1>
        <p className="max-w-xl font-rambla text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius nisl
          sed sit aliquet nullam pretium. Velit vel aliquam amet augue. Risus id
          purus dolor dolor. Sagittis at vulputate rhoncus pharetra purus vitae,
          ac. Sit nam eleifend mauris, duis mattis leo, ut. Viverra accumsan
          elementum vehicula orci magna. Elementum, euismod ut sed at ut non.
          Eget commodo mi scelerisque erat. Mus adipiscing et mattis vitae
          sapien turpis. Eu, sit urna, convallis in commodo, sed condimentum
          dictumst vitae. Ultricies aenean a non tincidunt tortor ut pulvinar.
          Vulputate viverra tempor sed turpis at blandit malesuada at quam. Enim
          cursus vitae turpis lectus egestas nunc risus.
        </p>
        <div className="flex gap-8 pt-8 pb-8">
          <CustomButtonGray>Biografi</CustomButtonGray>
          <CustomButtonGray>Biografi</CustomButtonGray>
          <CustomButtonGray>Biografi</CustomButtonGray>
        </div>
        <div>
          <h1>Information</h1>
          <div className="grid grid-cols-3 max-w-md">
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
          </div>
        </div>
      </div>
    </>
  );
}
