import { StrictMode, useEffect, useState } from "react";
import { useFormik } from "formik";

export default function BasicForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: ""
    },
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
    }
  });

  useEffect(() => {
    formik.setFieldValue("email", "aaa@hotmail.com");
  }, []);

  return (
    <div>
      <h1>Formulario básico con formik</h1>
      <div>Email: {formik.values.email}</div>
      <div>First Name: {formik.values.firstName}</div>
      <hr />
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>

        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
