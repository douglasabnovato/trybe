import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Logo from '../../images/logo.png';
import './index.css';

function Login() {
  const handleClickLogin = (values) => {
    console.log(values);
  };

  const validationsLogin = yup.object().shape({
    email: yup
      .string()
      .email('email inválido')
      .required('O email é obrigatório'),
    password: yup
      .string()
      .min(6, 'A senha deve ter pelo menos 6 caracteres')
      .required('A senha é obrigatória'),
  });

  return (
    <div className="container">
      <div className="image-logo">
        <img src={ Logo } width="100%" alt="Logo da Trybe" />
      </div>
      <Formik
        initialValues={ {} }
        onSubmit={ handleClickLogin }
        validationSchema={ validationsLogin }
      >
        <Form className="login-form">
          <div className="login-form-group">
            <Field
              name="email"
              className="form-field-email"
              placeholder="Email"
              data-testid="email-input"
            />
            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            />
          </div>
          <div className="form-group">
            <Field
              name="password"
              className="form-field-password"
              placeholder="Senha"
              data-testid="password-input"
            />
            <ErrorMessage
              component="span"
              name="password"
              className="form-error"
            />
          </div>
          <button className="button" type="submit">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Login;
