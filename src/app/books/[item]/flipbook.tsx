/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

// Extending the Window interface
declare global {
  interface Window {
    "pdfjs-dist/build/pdf": any;
    $: any; // For jQuery if needed for Turn.js
  }
}

import { useEffect, useRef } from "react";

const Flipbook = ({ pdfUrl }: any) => {
  const flipbookContainer = useRef(null) as any;

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Initialize PDF.js
      const pdfjsLib = window["pdfjs-dist/build/pdf"] as any;

      const renderPDF = async () => {
        const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
        const numPages = pdf.numPages;

        // Empty the container before appending new pages
        if (flipbookContainer.current) {
          flipbookContainer.current.innerHTML = ""; // Clear existing content
        }

        for (let pageNum = 1; pageNum <= numPages; pageNum++) {
          const page = await pdf.getPage(pageNum);

          const viewport = page.getViewport({ scale: 1 });
          const canvas = document.createElement("canvas");
          canvas.width = viewport.width;
          canvas.height = viewport.height;

          const context = canvas.getContext("2d");
          await page.render({ canvasContext: context, viewport: viewport })
            .promise;

          // Create a div to hold the page and append the canvas
          const pageElement = document.createElement("div");
          pageElement.classList.add("page");
          pageElement.appendChild(canvas);

          // Append the page to the flipbook container
          flipbookContainer.current.appendChild(pageElement);
        }

        // Now initialize Turn.js to create the flipbook effect
        if (window.$) {
          $(flipbookContainer.current).turn({
            width: 800,
            height: 600,
            autoCenter: true,
            display: "single",
          });
        }
      };

      renderPDF();
    }
  }, [pdfUrl]);

  return <div ref={flipbookContainer} className="flipbook" />;
};

export default Flipbook;
