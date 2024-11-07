/* eslint-disable @next/next/no-img-element */

import { useState } from "react";

export const BookList = ({ data }: any) => {
  return (
    <div className="grid-books grid-books-combine w-dyn-items">
      {data.map((item: any) => (
        <Book key={item.number} bookItem={item} />
      ))}
    </div>
  );
};

export const Book = ({ bookItem }: any) => {
  // State for the main element and highlight styles
  const [style, setStyle] = useState({
    transform:
      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
    transformStyle: "preserve-3d",
    willChange: "transform",
  });

  const [highlightStyle, setHighlightStyle] = useState({
    transform:
      "translate3d(25.0135%, 24.988%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
    transformStyle: "preserve-3d",
    willChange: "transform",
  });

  const handleMouseMove = (event) => {
    const { clientX, clientY, currentTarget } = event;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    // Calculate the relative position as a normalized value between -1 and 1
    const xRel = ((clientX - left) / width - 0.5) * 2; // -1 on left, +1 on right
    const yRel = ((clientY - top) / height - 0.5) * 2; // -1 at top, +1 at bottom

    // Map the normalized x/y values to a range between the specified boundaries
    const rotateX = -yRel * 4; // Max ±4 deg for top/bottom
    const rotateY = -xRel * 4; // Inverted for left/right
    const translateY = -4; // Slight lift on hover

    const highlightTranslateX = 25 - xRel * 25; // Adjust highlight x-translation
    const highlightTranslateY = 25 - yRel * 75; // Adjust highlight y-translation

    // Update styles dynamically based on mouse position
    setStyle({
      transform: `translate3d(0px, ${translateY}px, 0px) scale3d(1, 1, 1) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transformStyle: "preserve-3d",
      willChange: "transform",
    });

    setHighlightStyle({
      transform: `translate3d(${highlightTranslateX}%, ${highlightTranslateY}%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg)`,
      transformStyle: "preserve-3d",
      willChange: "transform",
    });
  };

  const handleMouseLeave = () => {
    // Reset to default styles
    setStyle({
      transform:
        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(-0.00064deg) rotateY(-0.00072deg) rotateZ(0deg) skew(0deg, 0deg)",
      transformStyle: "preserve-3d",
      willChange: "transform",
    });
    setHighlightStyle({
      transform:
        "translate3d(25.0135%, 24.988%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
      transformStyle: "preserve-3d",
      willChange: "transform",
    });
  };

  return (
    <div className="children-perspective count-items w-dyn-item">
      <div className="book-wrap">
        <a
          href="/books/the-bully-pulpit"
          className="book w-inline-block"
          style={style}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="book-cover-wrap">
            <div className="book-highlight" style={highlightStyle}></div>

            <img
              src="https://cdn.prod.website-files.com/61cb87c1189790ed10f7936d/61cb87c1189790514ef79618_book-cover-overlay.webp"
              loading="lazy"
              alt=""
              className="book-overlay"
            />

            <img
              loading="lazy"
              alt="The Bully Pulpit"
              src={`${process.env.NEXT_PUBLIC_BASE_URL}/books/images/${bookItem?.image}`}
              className="book-cover"
            />

            <div className="w-embed"></div>
          </div>
        </a>

        <a
          href="/books/the-bully-pulpit"
          className="link-no-underline w-inline-block"
        >
          <h5 className="grid-item-title text-xl">{bookItem.title}</h5>
          <h6 className="grid-item-subtitle text-lg">{bookItem.author}</h6>
        </a>
      </div>
    </div>
  );
};
