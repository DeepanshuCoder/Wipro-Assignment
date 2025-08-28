// HOC for consistent layout, bootstrap styling, error handling

import React from "react";

const withSection = (Component, title) => (props) => {
  const { errors, touched } = props.formik;

  const FieldError = ({ name }) =>
    touched[name] && errors[name] ? (
      <div className="text-danger small mt-1">{errors[name]}</div>
    ) : null;

  return (
    <div className="mb-4">
      <h5 className="mb-3">{title}</h5>
      <div className="row g-3">
        <Component {...props} FieldError={FieldError} />
      </div>
    </div>
  );
};

export default withSection;
