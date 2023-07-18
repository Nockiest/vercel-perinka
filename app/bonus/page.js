import BonusPost from '@/components/bonuspagecomponents/BonusPost'
import Hero from '@/components/Hero'
import React from 'react'

const Bonus = () => {
  return (
    <div className='bg-primary-color-20'>
    <Hero firstHeading={"BONUSOVÉ ČLÁNKY"} secondHeading={""} />
    <BonusPost reversed={false} />
    <BonusPost reversed={true} />
    </div>
  )
}

export default Bonus