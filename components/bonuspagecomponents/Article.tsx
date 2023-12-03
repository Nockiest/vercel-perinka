 import DOMPurify from "dompurify";
const sanitizeHtml = (htmlString) => {
    return DOMPurify.sanitize(htmlString);
  };
const Article = ({ title, textContent, author }) => {
    return (
      <div className="items-center lg:w-2/3 mt-4 p-8  mx-auto      ">
        <h2>{title}</h2>
        <div
          className="m-2 gap-16      "
          style={{ fontSize: "18px", lineHeight: "2", textAlign: "justify" }} // Adjust the values as needed
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(textContent) }}
         />

        <h2 className="text-right  leading-tight">{author}</h2>
      </div>
    );
  };

export default Article