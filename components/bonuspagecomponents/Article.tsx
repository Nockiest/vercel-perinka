import React from 'react'
import DOMPurify from "dompurify";
const sanitizeHtml = (htmlString) => {
    return DOMPurify.sanitize(htmlString);
  };
const Article = ({ title, textContent, author }) => {
    return (
      <div className="items-center">
        <div
          className="m-2 gap-16 lg:w-2/3 mx-auto mt-4 p-8   border-x-8 border-primary-color"
          style={{ fontSize: "18px", lineHeight: "2", textAlign: "justify" }} // Adjust the values as needed
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(textContent) }}
        />

        <h2 className="text-right mr-32 leading-tight">{author}</h2>
      </div>
    );
  };

export default Article