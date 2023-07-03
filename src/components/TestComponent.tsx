import React, { useEffect, useState } from 'react'

async function getData() {
  try {
    const dataFetched = await fetch('https://test-backend-nestjs-idlm.onrender.com/api/testing')
    return (await dataFetched.json()).data;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export const TestComponent = () => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    getData()
      .then(res => {
        console.log(res.testData)
        setData(res)
      })
  }, [])
  return (
    <>
      <h1>Let's see if it is dinamyc in React too</h1>

      { 
        data
        ? (
          data?.testData?.length
          ? (
            data?.testData?.map((item: any) => {
              return <p key={item.title}>✅ {item.title}</p>
            }) 
          )
          : (
            <p>No hello world today :c</p>
          )
        )
        : (
          <h1>spinner...</h1>
        )
      }
    </>
  )
}
