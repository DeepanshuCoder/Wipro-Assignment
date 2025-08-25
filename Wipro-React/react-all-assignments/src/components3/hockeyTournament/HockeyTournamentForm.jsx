import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";

// quick age calc
const getAge = d => {
    if (!d) return 0;
    let diff = new Date().getFullYear() - new Date(d).getFullYear();
    return diff;
};

// form validation schema
const schema = Yup.object({
    playerName: Yup.string().matches(/^[A-Za-z ]+$/, "Only letters").min(3).max(40).required(),
    jerseyNumber: Yup.number().min(1).max(99).required(),
    position: Yup.string().required(),
    stickHand: Yup.string().required(),
    dateOfBirth: Yup.date().required().test("age", "Age must be 10-55", d => {
        const a = getAge(d); return a >= 10 && a <= 55;
    }),
    nationality: Yup.string().required(),
    email: Yup.string().email().required(),
    phone: Yup.string().matches(/^[6-9]\d{9}$/, "Invalid").required(),
    playerId: Yup.string().matches(/^HOCK-\d{4}$/, "Format HOCK-XXXX").required(),
    guardianName: Yup.string().when("dateOfBirth", d => {
        return getAge(d) < 18 ? Yup.string().required() : Yup.string();
    }),
    teamName: Yup.string().required(),
    leagueLevel: Yup.string().required(),
    tournamentName: Yup.string().required(),
    startDate: Yup.date().required(),
    endDate: Yup.date().required().min(Yup.ref("startDate"), "End after start"),
    jerseySize: Yup.string().when("position", p => p !== "Goalie" ? Yup.string().required() : Yup.string()),
    padSize: Yup.string().when("position", p => p === "Goalie" ? Yup.string().required() : Yup.string()),
    hasMedicalCondition: Yup.boolean(),
    medicalCertNumber: Yup.string().when("hasMedicalCondition", c => c ? Yup.string().matches(/^MED-\d{4}$/, "Format MED-XXXX").required() : Yup.string()),
    consent: Yup.boolean().oneOf([true], "Consent required"),
    pastTeams: Yup.array().of(
        Yup.object({
            clubName: Yup.string().min(2).max(30).required(),
            years: Yup.number().min(1).max(20).required()
        })
    ).max(3)
});

function HockeyRegistrationForm() {
    const [records, setRecords] = useState([]);
    return (
        <div className="container mt-3">
            <h3>Hockey Tournament Registration</h3>
            <Formik
                initialValues={{
                    playerName: "", jerseyNumber: "", position: "", stickHand: "",
                    dateOfBirth: "", nationality: "", email: "", phone: "", playerId: "",
                    guardianName: "", teamName: "", leagueLevel: "", tournamentName: "",
                    startDate: "", endDate: "", jerseySize: "", padSize: "",
                    hasMedicalCondition: false, medicalCertNumber: "", consent: false,
                    pastTeams: []
                }}
                validationSchema={schema}
                onSubmit={(vals, { resetForm }) => {
                    console.log(vals); // log data
                    setRecords([...records, vals]); // add to table
                    resetForm();
                }}
            >
                {({ values, isValid }) => (
                    <Form>
                        <div className="row">
                            <div className="col-md-6">
                                <label>Player Name</label>
                                <Field name="playerName" className="form-control" />
                                <ErrorMessage name="playerName" component="div" className="text-danger" />
                            </div>
                            <div className="col-md-6">
                                <label>Jersey Number</label>
                                <Field name="jerseyNumber" className="form-control" />
                                <ErrorMessage name="jerseyNumber" component="div" className="text-danger" />
                            </div>
                        </div>

                        <div className="row mt-2">
                            <div className="col-md-6">
                                <label>Position</label>
                                <Field as="select" name="position" className="form-control">
                                    <option value="">Select</option>
                                    <option>Forward</option><option>Defense</option><option>Goalie</option>
                                </Field>
                                <ErrorMessage name="position" component="div" className="text-danger" />
                            </div>
                            <div className="col-md-6">
                                <label>Stick Hand</label>
                                <Field as="select" name="stickHand" className="form-control">
                                    <option value="">Select</option>
                                    <option>Left</option><option>Right</option>
                                </Field>
                                <ErrorMessage name="stickHand" component="div" className="text-danger" />
                            </div>
                        </div>

                        <div className="row mt-2">
                            <div className="col-md-6">
                                <label>Date of Birth</label>
                                <Field type="date" name="dateOfBirth" className="form-control" />
                                <ErrorMessage name="dateOfBirth" component="div" className="text-danger" />
                            </div>
                            <div className="col-md-6">
                                <label>Nationality</label>
                                <Field name="nationality" className="form-control" />
                                <ErrorMessage name="nationality" component="div" className="text-danger" />
                            </div>
                        </div>

                        <div className="row mt-2">
                            <div className="col-md-6">
                                <label>Email</label>
                                <Field name="email" className="form-control" />
                                <ErrorMessage name="email" component="div" className="text-danger" />
                            </div>
                            <div className="col-md-6">
                                <label>Phone</label>
                                <Field name="phone" className="form-control" />
                                <ErrorMessage name="phone" component="div" className="text-danger" />
                            </div>
                        </div>

                        <div className="row mt-2">
                            <div className="col-md-6">
                                <label>Player ID</label>
                                <Field name="playerId" className="form-control" />
                                <ErrorMessage name="playerId" component="div" className="text-danger" />
                            </div>
                            <div className="col-md-6">
                                <label>Guardian Name</label>
                                <Field name="guardianName" className="form-control" />
                                <ErrorMessage name="guardianName" component="div" className="text-danger" />
                            </div>
                        </div>

                        <h5 className="mt-3">Team & Event</h5>
                        <div className="row">
                            <div className="col-md-6">
                                <label>Team Name</label>
                                <Field name="teamName" className="form-control" />
                                <ErrorMessage name="teamName" component="div" className="text-danger" />
                            </div>
                            <div className="col-md-6">
                                <label>League Level</label>
                                <Field as="select" name="leagueLevel" className="form-control">
                                    <option value="">Select</option>
                                    <option>Amateur</option><option>College</option><option>Pro</option>
                                </Field>
                                <ErrorMessage name="leagueLevel" component="div" className="text-danger" />
                            </div>
                        </div>

                        <div className="row mt-2">
                            <div className="col-md-6">
                                <label>Tournament</label>
                                <Field name="tournamentName" className="form-control" />
                                <ErrorMessage name="tournamentName" component="div" className="text-danger" />
                            </div>
                            <div className="col-md-3">
                                <label>Start Date</label>
                                <Field type="date" name="startDate" className="form-control" />
                                <ErrorMessage name="startDate" component="div" className="text-danger" />
                            </div>
                            <div className="col-md-3">
                                <label>End Date</label>
                                <Field type="date" name="endDate" className="form-control" />
                                <ErrorMessage name="endDate" component="div" className="text-danger" />
                            </div>
                        </div>

                        {values.position !== "Goalie" && (
                            <div className="mt-2">
                                <label>Jersey Size</label>
                                <Field name="jerseySize" className="form-control" />
                                <ErrorMessage name="jerseySize" component="div" className="text-danger" />
                            </div>
                        )}
                        {values.position === "Goalie" && (
                            <div className="mt-2">
                                <label>Pad Size</label>
                                <Field name="padSize" className="form-control" />
                                <ErrorMessage name="padSize" component="div" className="text-danger" />
                            </div>
                        )}

                        <h5 className="mt-3">Medical & Consent</h5>
                        <div>
                            <label>
                                <Field type="checkbox" name="hasMedicalCondition" /> Medical Condition
                            </label>
                        </div>
                        {values.hasMedicalCondition && (
                            <div>
                                <label>Medical Cert</label>
                                <Field name="medicalCertNumber" className="form-control" />
                                <ErrorMessage name="medicalCertNumber" component="div" className="text-danger" />
                            </div>
                        )}
                        <div>
                            <label>
                                <Field type="checkbox" name="consent" /> I Consent
                            </label>
                            <ErrorMessage name="consent" component="div" className="text-danger" />
                        </div>

                        <h5 className="mt-3">Past Teams</h5>
                        <FieldArray name="pastTeams">
                            {({ push, remove }) => (
                                <div>
                                    {values.pastTeams.map((t, i) => (
                                        <div key={i} className="row mb-2">
                                            <div className="col-md-6">
                                                <Field name={`pastTeams.${i}.clubName`} placeholder="Club Name" className="form-control" />
                                                <ErrorMessage name={`pastTeams.${i}.clubName`} component="div" className="text-danger" />
                                            </div>
                                            <div className="col-md-4">
                                                <Field name={`pastTeams.${i}.years`} placeholder="Years" className="form-control" />
                                                <ErrorMessage name={`pastTeams.${i}.years`} component="div" className="text-danger" />
                                            </div>
                                            <div className="col-md-2">
                                                <button type="button" className="btn btn-danger" onClick={() => remove(i)}>X</button>
                                            </div>
                                        </div>
                                    ))}
                                    {values.pastTeams.length < 3 && (
                                        <button type="button" className="btn btn-secondary" onClick={() => push({ clubName: "", years: "" })}>Add Past Team</button>
                                    )}
                                </div>
                            )}
                        </FieldArray>

                        <button type="submit" className="btn btn-primary mt-3" disabled={!isValid}>Submit</button>
                    </Form>
                )}
            </Formik>

            <h4 className="mt-4">Records</h4>
            <table className="table table-bordered">
                <thead><tr><th>Name</th><th>Jersey</th><th>Team</th><th>Pos</th><th>Hand</th><th>DOB</th><th>Email</th></tr></thead>
                <tbody>
                    {records.map((r, i) => (
                        <tr key={i}>
                            <td>{r.playerName}</td><td>{r.jerseyNumber}</td><td>{r.teamName}</td>
                            <td>{r.position}</td><td>{r.stickHand}</td><td>{r.dateOfBirth}</td><td>{r.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default HockeyRegistrationForm;