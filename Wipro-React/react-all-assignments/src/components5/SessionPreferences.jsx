import React from "react";

function SessionPreferences({ formik, FieldError }) {
  const f = formik;
  const { setFieldValue, values } = f;

  const toggle = (val, checked) => {
    const next = checked
      ? [...values.sessions, val]
      : values.sessions.filter((s) => s !== val);
    setFieldValue("sessions", next);
  };

  const opts = ["Workshop A", "Panel B", "Keynote"];

  return (
    <div className="col-12">
      {opts.map((o) => (
        <div className="form-check" key={o}>
          <input
            type="checkbox"
            className="form-check-input"
            id={o}
            checked={values.sessions.includes(o)}
            onChange={(e) => toggle(o, e.target.checked)}
            onBlur={f.handleBlur}
            name="sessions"
          />
          <label className="form-check-label" htmlFor={o}>{o}</label>
        </div>
      ))}
      <FieldError name="sessions" />
    </div>
  );
}

export default SessionPreferences;
