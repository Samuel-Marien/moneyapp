import React, { createContext, useState } from 'react'

const initialState = [{ id: 0, value: 0, text: '' }]

export const Provider = (props) => {
  const [state, setState] = useState(initialState)

  return (
    <Context.Provider
      {...props}
      value={{
        state,
        setState
      }}
    />
  )
}

const Context = createContext()
export default Context
