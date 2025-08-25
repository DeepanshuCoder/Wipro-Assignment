import React, { useEffect, useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// npm i axios
// npm i -g json-server
// using this command (json-server --watch db.json --port 5000) to access the below url
const API = "http://localhost:5000/players";

// yup validation rules
const schema = Yup.object({
  name: Yup.string().min(3).required(),
  age: Yup.number().min(16).max(40).required(),
  position: Yup.string().oneOf(["Forward", "Midfielder", "Defender", "Goalkeeper"]).required(),
  club: Yup.string().required(),
  nationality: Yup.string().required(),
  goals: Yup.number().min(0).required(),
  matchesPlayed: Yup.number().min(0).required(),
  jerseyNumber: Yup.number().min(1).max(99).required(),
  email: Yup.string().email().required(),
  contactNumber: Yup.string().matches(/^\d{10}$/, "Must be 10 digits").required(),
});

const empty = {
  id: null, name: "", age: "", position: "", club: "", nationality: "",
  goals: "", matchesPlayed: "", jerseyNumber: "", email: "", contactNumber: ""
};

function App() {
  const [players, setPlayers] = useState([]);
  const [editing, setEditing] = useState(null);
  const [msg, setMsg] = useState("");

  // load all players
  const load = async () => setPlayers((await axios.get(API)).data);

  // flash message
  const flash = (t) => { setMsg(t); setTimeout(() => setMsg(""), 1500); };

  useEffect(() => { load(); }, []);

  // add or update player
  const onSubmit = async (values, { resetForm }) => {
    try {
      if (editing) {
        // update existing
        await axios.put(`${API}/${editing.id}`, { ...values, id: editing.id });
        flash("Player updated");
      } else {
        // add new (let json-server create new id)
        await axios.post(API, values);
        flash("Player added");
      }
      resetForm(); setEditing(null); load();
    } catch {
      flash("Action failed");
    }
  };

  // delete player
  const remove = async (id) => {
    if (!window.confirm("Delete player?")) return;
    await axios.delete(`${API}/${id}`);
    flash("Player deleted"); load();
  };

  return (
    <div className="container my-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h4 className="mb-3">Player Form</h4>
          {msg && <div className="alert alert-success py-1">{msg}</div>}
          <Formik
            enableReinitialize
            initialValues={editing ? editing : empty}
            validationSchema={schema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting, resetForm }) => (
              <Form>
                <div className="row g-3">
                  {/* main input fields */}
                  <div className="col-md-6">
                    <label className="form-label">Name</label>
                    <Field name="name" className="form-control" />
                    <ErrorMessage name="name" className="text-danger small" component="div" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Age</label>
                    <Field name="age" type="number" className="form-control" />
                    <ErrorMessage name="age" className="text-danger small" component="div" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Position</label>
                    <Field as="select" name="position" className="form-select">
                      <option value="">Select</option>
                      <option>Forward</option><option>Midfielder</option>
                      <option>Defender</option><option>Goalkeeper</option>
                    </Field>
                    <ErrorMessage name="position" className="text-danger small" component="div" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Club</label>
                    <Field name="club" className="form-control" />
                    <ErrorMessage name="club" className="text-danger small" component="div" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Nationality</label>
                    <Field name="nationality" className="form-control" />
                    <ErrorMessage name="nationality" className="text-danger small" component="div" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Goals</label>
                    <Field name="goals" type="number" className="form-control" />
                    <ErrorMessage name="goals" className="text-danger small" component="div" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Matches Played</label>
                    <Field name="matchesPlayed" type="number" className="form-control" />
                    <ErrorMessage name="matchesPlayed" className="text-danger small" component="div" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Jersey Number</label>
                    <Field name="jerseyNumber" type="number" className="form-control" />
                    <ErrorMessage name="jerseyNumber" className="text-danger small" component="div" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <Field name="email" type="email" className="form-control" />
                    <ErrorMessage name="email" className="text-danger small" component="div" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Contact Number</label>
                    <Field name="contactNumber" className="form-control" />
                    <ErrorMessage name="contactNumber" className="text-danger small" component="div" />
                  </div>
                </div>

                <div className="mt-3 d-flex gap-2">
                  <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    {editing ? "Update Player" : "Add Player"}
                  </button>
                  {editing && (
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => { setEditing(null); resetForm(); }}
                    >
                      Cancel Edit
                    </button>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      <h4 className="mt-4 mb-2">Player List</h4>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th><th>Age</th><th>Position</th><th>Club</th>
            <th>Goals</th><th>Matches Played</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {players.map(p => (
            <tr key={p.id}>
              <td>{p.name}</td><td>{p.age}</td><td>{p.position}</td>
              <td>{p.club}</td><td>{p.goals}</td><td>{p.matchesPlayed}</td>
              <td>
                <button className="btn btn-sm btn-outline-primary me-2"
                  onClick={() => setEditing(p)}>Edit</button>
                <button className="btn btn-sm btn-outline-danger"
                  onClick={() => remove(p.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;