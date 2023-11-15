import { StrictMode, useEffect, useState } from "react";
import { ErrorMessage, Field, Formik, useFormik } from "formik";
export default function Form() {
  const [email, setEmail] = useState("");
  const [firstName, setFisrstName] = useState("");
  const [lastName, setLastName] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      termsAcepted: false
    },
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
    },
    validate: handleValidate
  });

  function handleSubmit(e) {
    e.preventDefault();

    console.log({
      email,
      firstName,
      lastName,
      termsAcepted: false
    });
  }

  function handleChange(e) {
    const input = e.target;

    if (input.name === "email") setEmail(input.value);
    if (input.name === "firstName") setFisrstName(input.value);
    if (input.name === "lastName") setLastName(input.value);
  }

  function handleValidate(values) {
    const errors = {};
    const { email, firstName, lastName } = values;

    if (firstName.length === 0) {
      errors.firstName = "el nombre es requerido";
    } else if (firstName.length <= 5) {
      errors.firstName = "el nombre debe tener más de 5 letras";
    }
    if (lastName.length === 0) {
      errors.lastName = "el apellio es requerido";
    } else if (lastName.length <= 5) {
      errors.lastName = "el apellido debe tener más de 5 letras";
    }

    if (email.length === 0) {
      errors.email = "el email es requerido";
      errors.email = "el email debe terner el @ y despues letras";
    } else if (!/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i.test(formik.values.email)) {
    }
    return errors;
  }

  return (
    <div>
      <h1>Formulario dinámico</h1>
      <div>Email: {formik.values.email}</div>
      <div>First Name: {formik.values.firstName}</div>
      <hr />
      <Formik
        initialValues={{
          email: "",
          firstName: "",
          lastName: "",
          termsAcepted: false
        }}
        onSubmit={handleSubmit}
        validate={handleValidate}
      >
        {(formik) => (
          <Form>
            <div>
              <label htmlFor="email">Email</label>
              <Field
                name="email"
                id="email"
                type="text"
                {...formik.getFieldProps("email")}
              />
              <ErrorMessage name="email" />
            </div>
            {formik.values.email.length > 0 ? (
              <>
                <div>
                  <label htmlFor="firstName">First Name</label>
                  <Field
                    name="firstName"
                    id="firstName"
                    type="text"
                    {...formik.getFieldProps("firstName")}
                  />
                  <ErrorMessage name="firstName" />
                </div>
                <div>
                  <label htmlFor="lastName">Last Name</label>
                  <Field
                    name="lastName"
                    id="lastName"
                    type="text"
                    {...formik.getFieldProps("lastName")}
                  />
                  <ErrorMessage name="lastName" />
                </div>
                <div>
                  <label htmlFor="termsAcepted">Terms Acept</label>
                  <Field
                    id="termsAcepted"
                    type="checkbox"
                    name="termsAcepted"
                    {...formik.getFieldProps("termsAcepted")}
                  />
                </div>
              </>
            ) : null}

            <button type="submit">Enviar</button>
            <button type="reset">Limpiar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
