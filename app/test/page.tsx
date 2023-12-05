'use client'
import React, { useState } from 'react'
import UniversalForm from '../../components/global/UniversalForm'

const page = () => {

    const inputData = {
        x: '',
        y: '',
        a: 'array',
        z: 'file',
        b: {
            a:'x',
            b:'x',
            c:'x'
        }

    }
    const [result, setResult] = useState<null|string>(null)

    const parseDataToResult = (data) => {
        const jsonData = JSON.stringify(data);
        setResult(jsonData);
    };

  return (
    <div className='flex'>
        <UniversalForm inputData={inputData} onSubmit={parseDataToResult}/>
        <p className='border-2'>x{result} </p>
    </div>
  )
}

export default page