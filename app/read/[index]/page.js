"use client"
import { useRouter, usePathname } from 'next/navigation'
import { useState, useEffect } from "react";
 
function Resume() {
  const router = useRouter();
  const [selectedPdf, setSelectedPdf] = useState("/leden-únor.pdf");
  const pathname = usePathname()
  
  // Sync the state with the URL when the component mounts or when the URL changes
  useEffect(() => {
    const  segments = pathname.split("/");
    const lastSegment = segments[segments.length - 1];
    console.log(lastSegment)
    if (lastSegment) {
      setSelectedPdf(`/${lastSegment}`);
    }
  }, [router]);

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
