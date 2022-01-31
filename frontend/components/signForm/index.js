import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const MyErrorMessage = (props) => {
  const { name } = props
  return (
    <ErrorMessage name={name}>
      {(msg) => (
        <div
          className="my-2 text-danger border border-danger p-2 mt-1 rounded-3 shadow d-flex justify-content-center "
          style={{ backgroundColor: '#F5B7B1' }}
        >
          {msg}
        </div>
      )}
    </ErrorMessage>
  )
}

const SignForm = () => {
  return (
    <Formik
      initialValues={{ email: '', firstName: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email adress').required('Required'),
        firstName: Yup.string()
          .max(15, 'Must be15 character or less')
          .min(3, 'Must be 3 characters or more')
          .required('Required'),
        password: Yup.string()
          .min(6, 'Password must 6 characters minimum')
          .required('Required')
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          resetForm()
          setSubmitting(false)
        }, 400)
      }}
    >
      {(formik) => (
        <Container className="col-12 col-md-6 pt-2 border ">
          <h3 className="py-3 d-flex justify-content-center">SignIn</h3>
          <Form onSubmit={formik.handleSubmit}>
            <div className="d-flex flex-column col-8 mx-auto ">
              <Field name="firstName" type="text" placeholder="firstname" />
              <MyErrorMessage name="firstName" />

              <Field
                name="email"
                type="email"
                placeholder="email"
                className="my-3"
              />
              <MyErrorMessage name="email" />

              <Field name="password" type="password" placeholder="password" />
              <MyErrorMessage name="password" />

              <div className="d-flex justify-content-end my-3">
                <Button variant="outline-success" type="submit">
                  Signin
                </Button>
              </div>
            </div>
          </Form>
        </Container>
      )}
    </Formik>
  )
}

export default SignForm
