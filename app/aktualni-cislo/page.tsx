import ArticleSummary from '../../components/ArticleSummary'
import Hero from '../../components/global/Hero'
import React from 'react'

const NewNumber = () => {

  return (
    <div>
      <Hero firstHeading={"AKTUÁLNÍ <br />ČÍSLO"} secondHeading={"AKTUÁLNÍ ČÍSLO"}   />
      <ArticleSummary reversed={false}/>
      <ArticleSummary reversed={true} />
    </div>
  )
}

export default NewNumber