import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Yup validation rules
const schema = Yup.object({
  playerName: Yup.string().min(3).required("Required"),
  dob: Yup.date().required("Required"),
  gender: Yup.string().required("Required"),
  fideId: Yup.string().matches(/^\d{8}$/, "8 digits").required(),
  rating: Yup.number().min(100).max(3000).required(),
  email: Yup.string().email().required(),
  mobile: Yup.string().matches(/^[6-9]\d{9}$/, "Invalid").required(),
  country: Yup.string().required(),
  category: Yup.string().required(),
  parentContact: Yup.string().when("category", {
    is: "U-12",
    then: (s) => s.matches(/^[6-9]\d{9}$/, "Invalid").required(),
  }),
  paymentConfirmed: Yup.boolean().oneOf([true], "Required"),
  terms: Yup.boolean().oneOf([true], "Required"),
});

function ChessTournamentForm() {
  const [players, setPlayers] = useState([]);

  return (
    <div className="container mt-4">
      <h3>Chess Tournament Registration</h3>

      <Formik
        initialValues={{
          playerName: "", dob: "", gender: "", fideId: "", rating: "",
          email: "", mobile: "", country: "", category: "",
          parentContact: "", paymentConfirmed: false, terms: false,
        }}
        validationSchema={schema}
        onSubmit={(v, { resetForm }) => {
          console.log(v);
          setPlayers([...players, v]);
          resetForm();
        }}
      >
        <Form className="row g-3">
          {[
            ["playerName", "Player Name"],
            ["dob", "Date of Birth", "date"],
            ["gender", "Gender", "select", ["Male", "Female", "Other"]],
            ["fideId", "FIDE ID"],
            ["rating", "Rating", "number"],
            ["email", "Email"],
            ["mobile", "Mobile"],
            ["country", "Country"],
            ["category", "Category", "select", ["U-12", "U-18", "Open"]],
            ["parentContact", "Parent Contact"],
          ].map(([name, label, type, options]) => (
            <div key={name} className="col-md-6">
              <label>{label}</label>
              {type === "select" ? (
                <Field as="select" name={name} className="form-control">
                  <option value="">Select</option>
                  {options.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </Field>
              ) : (
                <Field type={type || "text"} name={name} className="form-control" />
              )}
              <ErrorMessage name={name} component="div" className="text-danger" />
            </div>
          ))}

          {["paymentConfirmed", "terms"].map((c) => (
            <div key={c} className="col-md-6 form-check">
              <Field type="checkbox" name={c} className="form-check-input" />
              <label className="form-check-label">{c}</label>
              <ErrorMessage name={c} component="div" className="text-danger" />
            </div>
          ))}

          <div className="col-12">
            <button type="submit" className="btn btn-primary">Register</button>
          </div>
        </Form>
      </Formik>

      {players.length > 0 && (
        <table className="table table-bordered mt-4">
          <thead>
            <tr>
              {Object.keys(players[0]).map((h) => <th key={h}>{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {players.map((p, i) => (
              <tr key={i}>{Object.values(p).map((v, j) => <td key={j}>{v.toString()}</td>)}</tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ChessTournamentForm;