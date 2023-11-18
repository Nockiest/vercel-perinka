"use client";
// import { useState } from "react";
// import styles from "../../flipBookStyle.css"; // Import your CSS file if you have one
import Image from "next/image";
// import Paper from "./Paper";
import HTMLFlipBook from 'react-pageflip';
import { useEffect, useState, useRef } from 'react';


function FlipBook({ numberOfFiles, directory, bookHeight, bookWidth }) {
  const [pages, setPages] = useState([])
  
  useEffect(() => {
    console.log(numberOfFiles)
    setPages([])
    let newPages = []
    for (let i = 1; i <= numberOfFiles; i++) {
      const imagePath = `/${directory}/image-${i}.jpg`; // Assuming the images are in the "public" directory

      newPages.push( // <div key={i} className="flipbook-page">
      <Image src={imagePath} alt={`page-${i}`} height={bookHeight} width={bookWidth} /> // </div> */}
      );
      console.log(newPages);
    }
    setPages(newPages)
   
}, [numberOfFiles]);

  return <HTMLFlipBook width={bookWidth} height={bookHeight}>{pages}</HTMLFlipBook>;
}

export default FlipBook;

// function FlipBook(props) {
//   const bookHeight =350
//   const bookWidth = 300
//   return (
//       <HTMLFlipBook width={bookWidth} height={bookHeight}>
//         <Image src={"/březen-duben/březen-duben-page-00001.jpg"} alt='page-1' height={bookHeight} width={bookWidth } />
//         <Image src={"/březen-duben/březen-duben-page-00002.jpg"} alt='page-2' height={bookHeight} width={bookWidth } />
//         <Image src={"/březen-duben/březen-duben-page-00003.jpg"} alt='page-3' height={bookHeight} width={bookWidth } />
//         <Image src={"/březen-duben/březen-duben-page-00004.jpg"} alt='page-4' height={bookHeight} width={bookWidth } />
//         <Image src={"/březen-duben/březen-duben-page-00005.jpg"} alt='page-5' height={bookHeight} width={bookWidth } />
//       </HTMLFlipBook>
//   );
// }
// export default FlipBook

// const FlipBook = () => {
//   const [currentLocation, setCurrentLocation] = useState(1);
//   const numOfPapers = 2;
//   const maxLocation = numOfPapers + 1;

//   const pageContents = [
//     "Page one",
//     "Page two",
//     "Page three",
//     // Add more pages as needed
//   ];
  

//   const goNextPage = () => {
//     if (currentLocation < maxLocation) {
//       setCurrentLocation(currentLocation + 1);
//     }
//   };

//   const goPrevPage = () => {
//     if (currentLocation > 1) {
//       setCurrentLocation(currentLocation - 1);
//     }
//   };

//   return (
//     <div className="bookContainer">
//       <button
//         id="prev-btn"
//         onClick={goPrevPage}
//         style={{ backgroundColor: "green", color: "black" }}
//       >
//         <Image src="chevron-left-solid.svg" alt="left" height={28} width={28} />
//         {currentLocation}
//       </button>

//       <div id="book" className="h-500 w-300 flex flex-center m-0 p-0 relative">
     
//         {currentLocation}
    
//           <Paper
//           frontPage={pageContents[0]}
//           backPage={pageContents[1]}
         
//           />
          
    
 
//       </div>

//       <button id="next-btn" onClick={goNextPage}>
//         <Image
//           src="chevron-right-solid.svg"
//           alt="right"
//           height={28}
//           width={28}
//         />
//       </button>
//     </div>
//   );
// };

// export default FlipBook;

// export default function PdfViewerComponent(props) {
// 	const containerRef = useRef(null);

// 	useEffect(() => {
// 		const container = containerRef.current;
// 		let instance, PSPDFKit;
// 		(async function () {
// 			PSPDFKit = await import('pspdfkit');

// 			PSPDFKit.unload(container); // Ensure that there's only one PSPDFKit instance.

// 			instance = await PSPDFKit.load({
// 				// Container where PSPDFKit should be mounted.
// 				container,
// 				// The document to open.
// 				document: props.document,
// 				// Use the public directory URL as a base URL. PSPDFKit will download its library assets from here.
// 				baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`,
// 			});
// 		})();

// 		return () => PSPDFKit && PSPDFKit.unload(container);
// 	}, []);

// 	return (
// 		<div
// 			ref={containerRef}
// 			style={{ width: '100%', height: '100vh' }}
// 		/>
// 	);
// }