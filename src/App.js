import { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Any place in your app!</h1>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            const errors = {};

            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }

            if (!values.password) {
              errors.password = 'Must enter password'
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className='form-group'>
                <label htmlFor="email">Email</label>
                <Field id='email' type="email" name="email" />
                <ErrorMessage name="email" component="small" className='error-text' />
              </div>

              <div className='form-group'>
                <label htmlFor="password">Password</label>
                <Field id='password' type="password" name="password" />
                <ErrorMessage name="password" component="small" className='error-text' />
              </div>

              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    )
  }
}

export default App
