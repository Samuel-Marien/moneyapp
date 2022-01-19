import React from 'react'
import { useFormik } from 'formik'
import { Formik } from 'formik'
import * as Yup from 'yup'

import Container from 'react-bootstrap/Container'

const MyForm = () => {
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
          .typeError('age must be a number'),
        description: Yup.string()
          .max(200, 'Must be 200 characters or less')
          .min(5, 'Must be 5 characters or more')
          .required('Required')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
      }}
    >
      {(formik) => (
        <Container className="mt-5 d-flex justify-content-center">
          <form
            className="d-flex flex-column w-50"
            onSubmit={formik.handleSubmit}
          >
            <label htmlFor="newData">Add your new datas</label>
            <input
              id="newData"
              name="newData"
              type="text"
              {...formik.getFieldProps('newData')}
            />
            {formik.touched.newData && formik.errors.newData ? (
              <div>{formik.errors.newData}</div>
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
              <div>{formik.errors.description}</div>
            ) : null}
            <div className="d-flex justify-content-end">
              <button type="submit" className="mt-5">
                Submit
              </button>
            </div>
          </form>
        </Container>
      )}
    </Formik>
  )
}

export default MyForm
