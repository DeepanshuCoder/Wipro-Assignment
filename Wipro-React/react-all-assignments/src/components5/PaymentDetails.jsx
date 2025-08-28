import React from "react";

function PaymentDetails({ formik, FieldError }) {
  const f = formik;
  return (
    <>
      <div className="col-md-6">
        <label className="form-label">Payment Method</label>
        <select name="paymentMethod" className="form-select" value={f.values.paymentMethod} onChange={f.handleChange} onBlur={f.handleBlur}>
          <option value="">Select…</option>
          <option value="Credit Card">Credit Card</option>
          <option value="UPI">UPI</option>
          <option value="PayPal">PayPal</option>
        </select>
        <FieldError name="paymentMethod" />
      </div>
      <div className="col-md-6">
        <label className="form-label">Promo Code</label>
        <input name="promoCode" className="form-control" value={f.values.promoCode} onChange={f.handleChange} onBlur={f.handleBlur}/>
        <FieldError name="promoCode" />
      </div>
      <div className="col-12">
        <div className="form-check mb-2">
          <input className="form-check-input" type="checkbox" id="invoiceRequired" name="invoiceRequired" checked={f.values.invoiceRequired} onChange={f.handleChange}/>
          <label className="form-check-label" htmlFor="invoiceRequired">Invoice Address</label>
        </div>
        {f.values.invoiceRequired && (
          <>
            <textarea name="invoiceAddress" className="form-control" rows="2" placeholder="Enter invoice address" value={f.values.invoiceAddress} onChange={f.handleChange} onBlur={f.handleBlur}/>
            <FieldError name="invoiceAddress" />
          </>
        )}
      </div>
    </>
  );
}

export default PaymentDetails;
