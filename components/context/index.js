import React, { createContext, useState, useEffect } from 'react'

const initialState = [{ id: 0, value: 0, text: '' }]

const save = (datas) => {
  localStorage.setItem('datas', JSON.stringify(datas))
}

export const Provider = (props) => {
  const [state, setState] = useState(initialState)
  const [loaded, setLoaded] = useState(false)

  //save Item in localStorage
  useEffect(() => {
    if (!loaded) {
      return
    }
    save(state)
  }, [loaded, state])
  console.log(state)

  // Get item on local Storage
  useEffect(() => {
    const localStorageDatas = localStorage.getItem('datas')

    if (!localStorageDatas) {
      setLoaded(true)
      return
    }

    const datas = JSON.parse(localStorageDatas)

    setState(datas)
    setLoaded(true)
  }, [])

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
