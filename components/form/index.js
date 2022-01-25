import React, { useContext } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

import Context from '../context'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import MyStyledError from './MyStyledError'

import { BsPiggyBank, BsPenFill } from 'react-icons/bs'
import { GiMoneyStack } from 'react-icons/gi'

const MyForm = () => {
  const { setState } = useContext(Context)

  let transactionId = Number(Date.now().toString().slice(5))

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
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setState((previousState) => [
          ...previousState,
          {
            id: transactionId,
            value: values.newData,
            text: values.description
          }
        ])
        resetForm()
        setSubmitting(false)
      }}
    >
      {(formik) => (
        <Container className="col-12 col-md-6 pt-5 d-flex justify-content-center border">
          <form className="d-flex flex-column" onSubmit={formik.handleSubmit}>
            <div className="d-flex flex-column flex-sm-row justify-content-between">
              <label htmlFor="newData" className="me-5">
                <GiMoneyStack size={30} />
                <span className="ms-2"> Last transactions</span>
              </label>
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

            <label htmlFor="description" className="mt-4 mb-2">
              <BsPenFill />
              <span className="ms-2">Description</span>
            </label>
            <textarea
              id="description"
              name="description"
              type="text"
              style={{ height: '80px' }}
              {...formik.getFieldProps('description')}
            />
            {formik.touched.description && formik.errors.description ? (
              <MyStyledError>{formik.errors.description}</MyStyledError>
            ) : null}
            <div className="d-flex justify-content-end">
              <Button
                variant="outline-success shadow"
                type="submit"
                className="my-3  px-4"
              >
                <BsPiggyBank size={30} />
              </Button>
            </div>
          </form>
        </Container>
      )}
    </Formik>
  )
}

export default MyForm
