/* eslint-disable @next/next/no-img-element */

import { useState } from "react";

export const BookList = () => {
  return (
    <div className="grid-books grid-books-combine w-dyn-items">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </div>
  );
};

export const Book = () => {
  // State for the main element and highlight styles
  const [style, setStyle] = useState({
    transform:
      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(-0.00064deg) rotateY(-0.00072deg) rotateZ(0deg) skew(0deg, 0deg)",
    transformStyle: "preserve-3d",
    willChange: "transform",
  });

  const [highlightStyle, setHighlightStyle] = useState({
    transform:
      "translate3d(25.0135%, 24.988%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
    transformStyle: "preserve-3d",
    willChange: "transform",
  });

  // Handle mouse movement over the element
  const handleMouseMove = (event) => {
    const { clientX, clientY, currentTarget } = event;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    // Calculate relative position within the element
    const xPos = clientX - left;
    const yPos = clientY - top;

    // Determine transformation based on mouse position (top-left, top-right, bottom-left, bottom-right)
    if (xPos < width / 2 && yPos < height / 2) {
      // Top-left
      setStyle({
        transform:
          "translate3d(0px, -4px, 0px) scale3d(1, 1, 1) rotateX(4deg) rotateY(-4deg)",
        transformStyle: "preserve-3d",
        willChange: "transform",
      });
      setHighlightStyle({
        transform:
          "translate3d(100%, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg)",
        transformStyle: "preserve-3d",
        willChange: "transform",
      });
    } else if (xPos >= width / 2 && yPos < height / 2) {
      // Top-right
      setStyle({
        transform:
          "translate3d(0px, -4px, 0px) scale3d(1, 1, 1) rotateX(4deg) rotateY(4deg)",
        transformStyle: "preserve-3d",
        willChange: "transform",
      });
      setHighlightStyle({
        transform:
          "translate3d(-50%, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg)",
        transformStyle: "preserve-3d",
        willChange: "transform",
      });
    } else if (xPos >= width / 2 && yPos >= height / 2) {
      // Bottom-right
      setStyle({
        transform:
          "translate3d(0px, -4px, 0px) scale3d(1, 1, 1) rotateX(-4deg) rotateY(4deg)",
        transformStyle: "preserve-3d",
        willChange: "transform",
      });
      setHighlightStyle({
        transform:
          "translate3d(-50%, -50%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg)",
        transformStyle: "preserve-3d",
        willChange: "transform",
      });
    } else if (xPos < width / 2 && yPos >= height / 2) {
      // Bottom-left
      setStyle({
        transform:
          "translate3d(0px, -4px, 0px) scale3d(1, 1, 1) rotateX(-4deg) rotateY(-4deg)",
        transformStyle: "preserve-3d",
        willChange: "transform",
      });
      setHighlightStyle({
        transform:
          "translate3d(100%, -50%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg)",
        transformStyle: "preserve-3d",
        willChange: "transform",
      });
    }
  };

  // Reset styles when the mouse leaves the element
  const handleMouseLeave = () => {
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
              src="https://cdn.prod.website-files.com/61cb87c118979013b4f7938b/61cb87c11897902c7ff7b18f_the-bully-pulpit.jpeg"
              className="book-cover"
            />

            <div className="w-embed"></div>
          </div>
        </a>

        <a
          href="/books/the-bully-pulpit"
          className="link-no-underline w-inline-block"
        >
          <h5 className="grid-item-title">The Bully Pulpit</h5>
          <h6 className="grid-item-subtitle">Doris Kearns Goodwin</h6>
        </a>
      </div>
    </div>
  );
};
