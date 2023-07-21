// import Slider from '@/components/Slider'
// import React from 'react';
// import { Document, Page } from 'react-pdf';
// // import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
// import { Viewer } from '@react-pdf-viewer/core';

// // Import the styles
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import resume from '../../public/květen-červen.pdf'
"use client";
// import { Document, Page, View, Text, Image,  StyleSheet, Font } from "@react-pdf/renderer";
 
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function Resume() {
  const router = useRouter();
  const [selectedPdf, setSelectedPdf] = useState("/leden-únor.pdf");

  // Sync the state with the URL when the component mounts
   

  const handleChangePdf = (e) => {
    const selectedValue = e.target.value;
    setSelectedPdf(selectedValue);

    // Update the URL when the PDF is changed
    const pdfName = selectedValue.substring(1); // Remove the leading '/'
    router.push(`/read/${pdfName}`, undefined, { shallow: true });
  };

  return (
    <div>
      <select value={selectedPdf} onChange={handleChangePdf}>
        <option value="/květen-červen.pdf">Květen/Červen 2023</option>
        <option value="/březen-duben.pdf">Březen/Duben 2023</option>
        <option value="/leden-únor.pdf">Leden/Únor 2023</option>
        <option value="/komiks.pdf">Komiks</option>
        {/* Add more options for other viewable PDFs */}
      </select>
      <iframe className={"w-full h-screen"} src={selectedPdf} style={{ height: "100vh" }} />
    </div>
  );
}

export default Resume;


// import React, { useState, useEffect, useRef } from 'react';

// const PdfViewer = () => {
//   const [pdfDoc, setPdfDoc] = useState(null);
//   const [pageNum, setPageNum] = useState(1);
//   const [pageRendering, setPageRendering] = useState(false);
//   const [pageNumPending, setPageNumPending] = useState(null);
//   const [scale] = useState(1.5);

//   const canvasRef = useRef(null);

//   useEffect(() => {
//     // Load the PDF.js library dynamically on the client-side
//     if (typeof window !== 'undefined' && !window.pdfjsLib) {
//       const script = document.createElement('script');
//       script.src = 'https://mozilla.github.io/pdf.js/build/pdf.js';
//       script.async = true;
//       script.onload = () => {
//         // PDF.js library has been loaded, initialize the viewer
//         setPdfJsLoaded(true);
//       };
//       document.body.appendChild(script);
//     }
//   }, []);

//   const setPdfJsLoaded = (loaded) => {
//     if (loaded) {
//       // Initialize the viewer when the PDF.js library is loaded
//       // Now you can use window.pdfjsLib
//       renderPage(pageNum);
//     }
//   };

//   const handlePdfInputChange = (e) => {
//     const file = e.target.files[0];
//     const fileReader = new FileReader();

//     fileReader.onload = function () {
//       const typedarray = new Uint8Array(this.result);
//       try {
//         displayPDF(typedarray);
//       } catch (error) {
//         console.error('Error displaying PDF:', error);
//       }
//     };

//     fileReader.onerror = function (error) {
//       console.error('File reading error:', error);
//     };

//     try {
//       fileReader.readAsArrayBuffer(file);
//     } catch (error) {
//       console.error('Error reading file:', error);
//     }
//   };

//   const displayPDF = (data) => {
//     try {
//       window.pdfjsLib.getDocument(data).promise.then((pdfDoc_) => {
//         setPdfDoc(pdfDoc_);
//         renderPage(pageNum);
//       });
//     } catch (error) {
//       console.error('Error loading PDF:', error);
//     }
//   };

//   const renderPage = (num) => {
//     setPageRendering(true);
//     const canvas = canvasRef.current;
//     const container = document.createElement('div');
//     container.className = 'page-container';

//     for (let i = 0; i < 2; i++) {
//       const pageCanvas = document.createElement('canvas');
//       pageCanvas.className = 'page-canvas';
//       container.appendChild(pageCanvas);
//     }

//     if (canvas) {
//       try {
//         canvas.innerHTML = '';
//         canvas.appendChild(container);

//         const canvasList = container.querySelectorAll('.page-canvas');
//         const renderTasks = [];

//         for (let i = 0; i < 2; i++) {
//           const page = pdfDoc.getPage(num + i);
//           renderTasks.push(renderPageToCanvas(page, canvasList[i]));
//         }

//         Promise.all(renderTasks).then(() => {
//           setPageRendering(false);

//           if (pageNumPending !== null) {
//             renderPage(pageNumPending);
//             setPageNumPending(null);
//           }
//         });
//       } catch (error) {
//         console.error('Error rendering page:', error);
//       }
//     }
//   };

//   const renderPageToCanvas = (page, canvas) => {
//     const viewportPromise = page.getViewport({ scale: 1 });
//     const canvasWidth = canvas.clientWidth;
//     const canvasHeight = canvas.clientHeight;

//     return viewportPromise.then((viewport) => {
//       const scaleNeeded = Math.min(
//         canvasWidth / viewport.width,
//         canvasHeight / viewport.height
//       );
//       const scaledViewport = viewport.clone({ scale: scale * scaleNeeded });

//       canvas.height = scaledViewport.height;
//       canvas.width = scaledViewport.width;

//       return page.render({
//         canvasContext: canvas.getContext('2d'),
//         viewport: scaledViewport,
//       }).promise;
//     });
//   };

//   const queueRenderPage = (num) => {
//     if (pageRendering) {
//       setPageNumPending(num);
//     } else {
//       try {
//         renderPage(num);
//       } catch (error) {
//         console.error('Error queuing render:', error);
//       }
//     }
//   };

//   const handlePrevPage = () => {
//     if (pageNum <= 2) {
//       return;
//     }
//     setPageNum((prevPageNum) => prevPageNum - 2);
//     queueRenderPage(pageNum);
//   };

//   const handleNextPage = () => {
//     if (pageNum >= pdfDoc.numPages) {
//       return;
//     }
//     setPageNum((prevPageNum) => prevPageNum + 2);
//     queueRenderPage(pageNum);
//   };

//   return (
//     <div>
//       <input
//         type="file"
//         id="pdf-input"
//         accept="application/pdf"
//         onChange={handlePdfInputChange}
//       />
//       <div id="viewer" ref={canvasRef}></div>
//       <div>
//         <button id="prev-page" onClick={handlePrevPage}>
//           Previous Page
//         </button>
//         <button id="next-page" onClick={handleNextPage}>
//           Next Page
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PdfViewer;

// "use client"
// import React, { useEffect, useRef } from 'react';

// export default function App() {
// 	const containerRef = useRef(null);

// 	useEffect(() => {
// 		const container = containerRef.current;
// 		let PSPDFKit;

// 		(async function () {
// 			PSPDFKit = await import('pspdfkit');

// 			if (PSPDFKit) {
// 				PSPDFKit.unload(container);
// 			}

// 			await PSPDFKit.load({
// 				container,
// 				document: '/document.pdf',
// 				baseUrl: `${window.location.protocol}//${window.location.host}/`,
// 			});
// 		})();

// 		return () => PSPDFKit && PSPDFKit.unload(container);
// 	}, []);

// 	return <div ref={containerRef} style={{ height: '100vh' }} />;
// }
// import React from 'react';
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
// import pdfFile from './květen-červen.pdf'

// function App() {

//     return (
//         <div>
//             <Document file={pdfFile}>
//                 <Page pageNumber={1} />
//             </Document>
//         </div>
//     );
// }

// export default App;

// import pdfjsLib from "pdfjs-dist";

// import LoadScript from "react-load-script";

// const PdfViewerDynamic = dynamic(() => import("pdfjs-dist/build/pdf"), {
//   ssr: false, // Ensure this component is not rendered on the server-side
// });

// function PdfViewer() {
//   const [pdfLoaded, setPdfLoaded] = useState(false);
//   const [pdfDocument, setPdfDocument] = useState(null);

//   useEffect(() => {
//     if (pdfLoaded) {
//       // pdf.js is loaded, load the PDF document
//       loadPdf();
//     }
//   }, [pdfLoaded]);

//   function loadPdf() {
//     var myState = {
//       pdf: null,
//       currentPage: 1,
//       zoom: 1,
//     };

//     pdfjsLib.getDocument("./květen-červen.pdf").promise.then(
//       (pdf) => {
//         myState.pdf = pdf;
//         setPdfDocument(pdf);
//         render();
//       },
//       (error) => {
//         console.error("Error loading PDF:", error);
//       }
//     );

//     function render() {
//       // Your rendering logic here
//       // Update canvas and navigation controls based on myState.pdf
//     }

//     // Your other event handlers and rendering logic here

//     // Cleanup function to release resources
//     return () => {
//       myState.pdf && myState.pdf.destroy();
//     };
//   }

//   function handleScriptLoad() {
//     // This function will be called when pdf.js is loaded successfully
//     setPdfLoaded(true);
//   }

//   return (
//     <div id="my_pdf_viewer">
//       <PdfViewerDynamic onLoadSuccess={handleScriptLoad} />
//       <div id="canvas_container">
//         {pdfDocument && <canvas id="pdf_renderer"></canvas>}
//       </div>
//       <div id="navigation_controls">
//         {/* <button id="go_previous">Previous</button>
//         <input id="current_page" defaultValue="1" type="number" />
//         <button id="go_next">Next</button> */}
//       </div>
//       <div id="zoom_controls">
//         <button id="zoom_in">+</button>
//         <button id="zoom_out">-</button>
//       </div>
//     </div>
//   );
// }

// export default PdfViewer;

// const PDFViewer = dynamic(() => import("@react-pdf/renderer").then((module) => module.PDFViewer), {
// ssr: false, // Ensure this component is not rendered on the server-side
// });

// const PDF = () => {
//   return (
//     <div>
//       <p>PDF Component</p>
//     </div>
//   );
// };

// const PDFView = () => {
//   const [client, setClient] = useState(false);

//   useEffect(() => {
//     setClient(true);
//   }, []);

//   return client ? (
//     <PDFViewer>
//       <PDF />
//     </PDFViewer>
//   ) : null;
// };

// export default PDFView;
// import myResume from "./květen-červen.pdf"

// Font.register( {family: "Inter", src: "/assets/font.otf"})

// const styles = StyleSheet.create({
//     body: {
//         paddingTop: 20,
//         fontFamily: "Inter"
//     }
// })

// const PDF = () => {
//     return(
//         <Document>
//             <Page  style={styles.body}>
//                 <View style={{display: 'flex', justifyContent: "center", flexDirection: "column"}}>
//                     <Text wrap={false} style={{alignSelf: "flex-end"}}>Goodbye, world!hgdkljfhsalhgfljadhsgflhasdlhfgsaljdhgflhasgflhgasdl;hfg;aksdjgf;kjsdahf;kjhasd;kjhf;kjashdf;kjhasd;kjfhjks;adhfkjhsadk;jfhaskjdhfkjsahdfkjhsadkj;hfkjsdhfkjhasd;kjhfkjsadhfkjhsda;kjh;</Text>
//                 </View>
//                 <View>
//                     <Image src="/květen-červen.pdf"/>
//                 </View>
//             </Page>
//         </Document>
//     )
// }
// const PDFView = () => {

//     const [client, setClient] = useState(false)

//     useEffect(() => {
//         setClient(true)
//     }, [])

//     return(
//     <PDFViewer>
//         <PDF/>
//     </PDFViewer>
//     )
// }
// export default PDFView
