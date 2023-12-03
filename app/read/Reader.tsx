import React from 'react'

const Reader = ({selectedPdf, handleChangePdf}) => {
  return (
    <div>  <select value={selectedPdf} onChange={handleChangePdf}>
    <option value="/květen-červen.pdf">Květen/Červen 2023</option>
    <option value="/březen-duben.pdf">Březen/Duben 2023</option>
    <option value="/leden-únor.pdf">Leden/Únor 2023</option>
    <option value="/komiks.pdf">Komiks</option>
    {/* Add more options for other viewable PDFs */}
  </select>
  <iframe     src={selectedPdf} style={{height: '500vh', width:'100vw'}}  /></div>
  )
}

export default Reader