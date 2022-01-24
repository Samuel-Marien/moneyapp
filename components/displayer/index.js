import React, { useContext } from 'react'

import Context from '../context'

import Container from 'react-bootstrap/Container'

const IncomeDisplayer = (props) => {
  const { data } = props

  return (
    <div className="row border">
      {data.map((item, index) => {
        if (item.value < 0) {
          return (
            <div
              key={index}
              className={`${
                index % 2 === 0 ? 'bg-white' : 'bg-light'
              } p-2 d-flex justify-content-end text-danger`}
            >
              <div>
                <div className="d-flex justify-content-end fw-bold">
                  $ {item.value}
                </div>
                <div className="text-secondary fst-italic">{item.text}</div>
              </div>
            </div>
          )
        } else {
          return (
            <div
              key={index}
              className={`${
                index % 2 === 0 ? 'bg-white' : 'bg-light'
              } p-2 d-flex justify-content-center text-success`}
            >
              <div style={{ transform: 'translate(-55%)' }}>
                <div className="d-flex justify-content-end fw-bold">
                  $ {Number(item.value)}
                </div>
                <div className="text-secondary fst-italic">{item.text}</div>
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
  const { positiveValue } = useContext(Context)
  const { negativeValue } = useContext(Context)
  const { result } = useContext(Context)

  console.log(positiveValue)

  return (
    <Container className="w-50 ">
      <div className="row">
        <div className="col border p-2">Incoming</div>
        <div className="col border p-2">Outgoing</div>
      </div>

      <IncomeDisplayer data={state} />
      <div className="row">
        <div className="col border p-2 text-success fw-bolder d-flex justify-content-end">
          <span className="text-black">TOTAL : </span>
          <span className="ms-2">$+</span>
          {positiveValue}
        </div>
        <div className="col border p-2 text-danger fw-bolder d-flex justify-content-end">
          <span className="text-black">TOTAL :</span>
          <span className="ms-2">$</span>
          {negativeValue}
        </div>
        <div className={`p-2 d-flex justify-content-end fw-bolder`}>
          <span className="text-black">Result :</span>{' '}
          {positiveValue + negativeValue <= 0 ? (
            <div className="text-danger">
              <span className="ms-2">$</span>
              {positiveValue + negativeValue}
            </div>
          ) : (
            <div className="text-success">
              <span className="ms-2">$</span>
              {positiveValue + negativeValue}
            </div>
          )}
        </div>
      </div>
    </Container>
  )
}

export default Displayer
