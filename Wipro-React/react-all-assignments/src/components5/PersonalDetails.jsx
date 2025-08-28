import React from "react";

function PersonalDetails({ formik, FieldError }) {
  const f = formik;
  return (
    <>
      <div className="col-md-6">
        <label className="form-label">Name</label>
        <input name="name" className="form-control" value={f.values.name} onChange={f.handleChange} onBlur={f.handleBlur}/>
        <FieldError name="name" />
      </div>
      <div className="col-md-6">
        <label className="form-label">Phone</label>
        <input name="phone" className="form-control" value={f.values.phone} onChange={f.handleChange} onBlur={f.handleBlur}/>
        <FieldError name="phone" />
      </div>
      <div className="col-md-6">
        <label className="form-label">Email</label>
        <input name="email" className="form-control" value={f.values.email} onChange={f.handleChange} onBlur={f.handleBlur}/>
        <FieldError name="email" />
      </div>
      <div className="col-md-6">
        <label className="form-label">Organization</label>
        <input name="org" className="form-control" value={f.values.org} onChange={f.handleChange} onBlur={f.handleBlur}/>
        <FieldError name="org" />
      </div>
    </>
  );
}

export default PersonalDetails;
