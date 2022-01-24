import React, { createContext, useState, useEffect } from 'react'

const initialState = [{ id: 0, value: 0, text: '' }]

const save = (datas) => {
  localStorage.setItem('datas', JSON.stringify(datas))
}

export const Provider = (props) => {
  const [state, setState] = useState(initialState)
  const [positiveValue, setPositiveValue] = useState([0])
  const [negativeValue, setNegativeValue] = useState([0])
  const [loaded, setLoaded] = useState(false)

  // Save Item in localStorage
  useEffect(() => {
    if (!loaded) {
      return
    }
    save(state)
  }, [loaded, state])

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

  // Calculate income
  useEffect(() => {
    let totalIncome = state.reduce((total, current) => {
      if (current.value > 0) {
        return Number(total) + Number(current.value)
      }
      return Number(total) + 0
    }, 0)

    setPositiveValue(totalIncome)
  }, [state])

  // Calculate outgoing
  useEffect(() => {
    let totalIncome = state.reduce((total, current) => {
      if (current.value < 0) {
        return Number(total) + Number(current.value)
      }
      return Number(total) + 0
    }, 0)

    setNegativeValue(totalIncome)
  }, [state])

  return (
    <Context.Provider
      {...props}
      value={{
        state,
        setState,
        positiveValue,
        negativeValue
      }}
    />
  )
}

const Context = createContext()
export default Context
