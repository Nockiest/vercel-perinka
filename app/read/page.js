// import Slider from '@/components/Slider'
// import React from 'react';
// import { Document, Page } from 'react-pdf';
// // import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
// import { Viewer } from '@react-pdf-viewer/core';

// // Import the styles
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import resume from '../../public/květen-červen.pdf'
"use client"
// import { Document, Page, View, Text, Image,  StyleSheet, Font } from "@react-pdf/renderer";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
function Resume() {
  return (
    <iframe className={"w-full h-screen"} src='/květen-červen.pdf' style={{ height: "100vh" }} />
  );
}

export default Resume
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