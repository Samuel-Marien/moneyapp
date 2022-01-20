import React from 'react'

import { AiFillAlert } from 'react-icons/ai'

const MyStyledError = (props) => {
  const { children } = props
  return (
    <div
      className="text-danger border border-danger p-2 mt-1 rounded-3 shadow d-flex justify-content-center "
      style={{ backgroundColor: '#F5B7B1' }}
    >
      <div className="d-flex flex-column">
        <AiFillAlert size={25} />
      </div>
      <span className="mx-3">{children}</span>
      <div className="d-flex flex-column">
        <AiFillAlert size={25} />
      </div>
    </div>
  )
}

export default MyStyledError
