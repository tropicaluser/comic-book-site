"use client"; // Ensures this code runs only on the client-side

import { useEffect, useRef } from "react";
import $ from "jquery"; // Import jQuery

const DearflipComponent = () => {
  const flipbookRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if we are on the client-side and jQuery is available
    if (typeof window !== "undefined" && window.$) {
      // Initialize Dearflip only after the component has mounted
      const $flipbook = $(flipbookRef.current);
      $flipbook.dearflip({
        width: 800,
        height: 600,
        autoCenter: true,
        display: "single",
      });
    }
  }, []);

  return (
    <div
      ref={flipbookRef}
      id="flipbook"
      style={{ margin: "0 auto", backgroundColor: "#f4f4f4", padding: "10px" }}
    >
      <div className="hard"> Dearflip </div>
      <div className="hard"></div>
      <div> Page 1 </div>
      <div> Page 2 </div>
      <div> Page 3 </div>
      <div> Page 4 </div>
      <div className="hard"></div>
      <div className="hard"></div>
    </div>
  );
};

export default DearflipComponent;
