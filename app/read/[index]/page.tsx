"use client"
import { useRouter, usePathname } from 'next/navigation'
import { useState, useEffect, ChangeEvent } from "react";
import React from "react"
import ShareBtn from '../../../components/buttons/ShareBtn';
import Reader from '../Reader';

function Resume() {
  const router = useRouter();
  const [selectedPdf, setSelectedPdf] = useState<string>("/leden-únor.pdf");
  const pathname = usePathname();

  // Sync the state with the URL when the component mounts or when the URL changes
  useEffect(() => {
    const segments = pathname.split("/");
    const lastSegment = segments[segments.length - 1];
    console.log(lastSegment);
    if (lastSegment) {
      setSelectedPdf(`/${lastSegment}`);
    }
  }, [router]);

  const handleChangePdf = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedPdf(selectedValue);

    // Update the URL when the PDF is changed
    const pdfName = selectedValue.substring(1); // Remove the leading '/'
    router.push(`/read/${pdfName}`, undefined,  );
  };

  return (
    <div  >
      <ShareBtn link={''} />

      <Reader selectedPdf={selectedPdf} handleChangePdf={handleChangePdf} />
    </div>
  );
}
export default Resume;
