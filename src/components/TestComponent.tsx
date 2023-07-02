import React, { useEffect, useState } from 'react'

export const TestComponent = ({ helloData }: any) => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    setData(helloData);
    console.log(helloData)
  }, [helloData])
  return (
    <>
      <h1>Let's see if it is dinamyc in React too</h1>

      { 
        data
        ? (
          data?.testData.length
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
