import React, { useContext, useState, useEffect } from 'react'

import Context from '../context'

import Container from 'react-bootstrap/Container'

const IncomeDisplayer = () => {
  const { state } = useContext(Context)

  return (
    <div className="row border">
      {state.map((item, index) => {
        if (index === 0) {
          return
        }
        if (item.value < 0) {
          return (
            <div
              key={index}
              className={`${
                index % 2 === 0 ? 'bg-white' : 'bg-light'
              } p-2 d-flex justify-content-end`}
            >
              <div>
                <div className="d-flex justify-content-end">{item.value}</div>
                <div>{item.text}</div>
              </div>
            </div>
          )
        } else {
          return (
            <div
              key={index}
              className={`${
                index % 2 === 0 ? 'bg-white' : 'bg-light'
              } p-2 d-flex justify-content-center`}
            >
              <div style={{ transform: 'translate(-55%)' }}>
                <div className="d-flex justify-content-end">{item.value}</div>
                <div>{item.text}</div>
              </div>
            </div>
          )
        }
      })}
    </div>
  )
}

const Displayer = () => {
  const { state } = useContext(Context)
  const [positiveValue, setPositiveValue] = useState(['0'])
  const [negativeValue, setNegativeValue] = useState(['0'])
  const [result, setResult] = useState(['0'])

  useEffect(() => {
    state
      ? state.map((item) => {
          setResult((prec) => [...prec, Number(item.value)])
          if (item.value > 0) {
            setPositiveValue((prec) => [...prec, Number(item.value)])
          } else {
            setNegativeValue((prec) => [...prec, Number(item.value)])
          }
        })
      : null
  }, [])

  return (
    <Container className="mt-5 w-50 ">
      <div className="row">
        <div className="col border p-2">Incoming</div>
        <div className="col border p-2">Outgoing</div>
      </div>
      <IncomeDisplayer />
      <div className="row">
        <div className="col border p-2 text-success fw-bolder d-flex justify-content-end">
          <span className="text-black">TOTAL : </span>
          <span className="ms-2">$+</span>
          {positiveValue
            ? positiveValue.reduce((acc, inc) => {
                return Number(acc + inc)
              })
            : null}
        </div>
        <div className="col border p-2 text-danger fw-bolder d-flex justify-content-end">
          <span className="text-black">TOTAL :</span>
          <span className="ms-2">$</span>
          {negativeValue
            ? negativeValue.reduce((acc, inc) => {
                return Number(acc + inc)
              })
            : null}
        </div>
        <div
          className={`${
            result.reduce((acc, inc) => {
              return Number(acc + inc)
            }) >= 0
              ? `text-success `
              : `text-danger`
          }
              p-2 d-flex justify-content-end fw-bolder`}
        >
          Result : <span className="ms-2">$</span>
          {result
            ? result.reduce((acc, inc) => {
                return Number(acc + inc)
              })
            : null}
        </div>
      </div>
    </Container>
  )
}

export default Displayer
