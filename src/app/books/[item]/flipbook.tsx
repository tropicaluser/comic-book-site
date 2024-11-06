"use client";

import { useEffect, useRef } from "react";

const Flipbook = ({ pdfUrl }: any) => {
  const flipbookContainer = useRef(null);

  useEffect(() => {
    // Check if we're in the client-side (window is available)
    if (typeof window !== "undefined") {
      // Initialize PDF.js
      const pdfjsLib = window["pdfjs-dist/build/pdf"] as any;

      const renderPDF = async () => {
        const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
        console.log("pdf", pdf);
        const numPages = pdf.numPages;

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
          flipbookContainer.current.appendChild(pageElement) as any;
        }

        // Initialize Turn.js to create the flipbook effect
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
