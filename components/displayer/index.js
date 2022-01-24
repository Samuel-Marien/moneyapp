import React, { useContext } from 'react'

import Context from '../context'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

import { FaEraser } from 'react-icons/fa'

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
  const { resetDatas } = useContext(Context)

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
        <div className="mt-2 pe-2 p-0 m-0 d-flex justify-content-between align-items-center fw-bolder">
          <OverlayTrigger
            key="right"
            placement="right"
            overlay={
              <Tooltip id={`tooltip-"right"`}>Delete all entries!!</Tooltip>
            }
          >
            <Button
              variant="outline-danger shadow"
              className="px-4"
              onClick={resetDatas}
            >
              <FaEraser size={30} />
            </Button>
          </OverlayTrigger>

          {positiveValue + negativeValue <= 0 ? (
            <div className="text-danger">
              <span className="text-black">Result :</span>{' '}
              <span className="ms-2">$</span>
              {positiveValue + negativeValue}
            </div>
          ) : (
            <div className="text-success">
              <span className="text-black">Result :</span>{' '}
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
