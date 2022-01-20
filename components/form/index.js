import React, { useContext } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

import Context from '../context'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import MyStyledError from './MyStyledError'

const transactionId = 0

const MyForm = () => {
  const { setState } = useContext(Context)

  return (
    <Formik
      initialValues={{
        newData: '',
        description: ''
      }}
      validationSchema={Yup.object({
        newData: Yup.number()
          .required('Must be 1 digit or more')
          .notOneOf([0], 'not 0...')
          .typeError('must be a number'),
        description: Yup.string()
          .max(200, 'Must be 200 characters or less')
          .min(5, 'Must be 5 characters or more')
          .required('Required')
      })}
      onSubmit={(values, { setSubmitting }) => {
        transactionId++
        setState((previousState) => [
          ...previousState,
          {
            id: transactionId,
            value: values.newData,
            text: values.description
          }
        ])
        setSubmitting(false)
      }}
    >
      {(formik) => (
        <Container className="mt-5 d-flex justify-content-center">
          <form
            className="d-flex flex-column w-50"
            onSubmit={formik.handleSubmit}
          >
            <div className="d-flex justify-content-between">
              <label htmlFor="newData">Last banking transactions</label>
              <input
                id="newData"
                name="newData"
                type="text"
                {...formik.getFieldProps('newData')}
              />
            </div>
            {formik.touched.newData && formik.errors.newData ? (
              <MyStyledError>{formik.errors.newData}</MyStyledError>
            ) : null}

            <label htmlFor="description" className="mt-4">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              type="text"
              {...formik.getFieldProps('description')}
            />
            {formik.touched.description && formik.errors.description ? (
              <MyStyledError>{formik.errors.description}</MyStyledError>
            ) : null}
            <div className="d-flex justify-content-end">
              <Button variant="outline-info" type="submit" className="mt-5">
                Add
              </Button>
            </div>
          </form>
        </Container>
      )}
    </Formik>
  )
}

export default MyForm
