import React from "react";

function TicketSelection({ formik, FieldError }) {
  const f = formik;
  return (
    <>
      <div className="col-md-6">
        <label className="form-label">Ticket Type</label>
        <select name="ticketType" className="form-select" value={f.values.ticketType} onChange={f.handleChange} onBlur={f.handleBlur}>
          <option value="">Select…</option>
          <option value="Regular">Regular</option>
          <option value="VIP">VIP</option>
          <option value="Student">Student</option>
        </select>
        <FieldError name="ticketType" />
      </div>
      <div className="col-md-6">
        <label className="form-label">Quantity</label>
        <input type="number" min="1" name="quantity" className="form-control" value={f.values.quantity} onChange={f.handleChange} onBlur={f.handleBlur}/>
        <FieldError name="quantity" />
      </div>
    </>
  );
}

export default TicketSelection;
