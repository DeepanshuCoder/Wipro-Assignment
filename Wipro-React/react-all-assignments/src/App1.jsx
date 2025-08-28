import React, { useState } from "react";
import { Formik } from "formik";

import withSection from "./components5/withSection";
import PersonalDetails from "./components5/PersonalDetails";
import TicketSelection from "./components5/TicketSelection";
import SessionPreferences from "./components5/SessionPreferences";
import PaymentDetails from "./components5/PaymentDetails";
import Schema from "./validation/schema";

// Wrap sections with HOC
const PersonalDetailsSection = withSection(PersonalDetails, "Personal Details");
const TicketSelectionSection = withSection(TicketSelection, "Ticket Selection");
const SessionPreferencesSection = withSection(SessionPreferences, "Session Preferences");
const PaymentDetailsSection = withSection(PaymentDetails, "Payment Details");

export default function App() {
  const [submitted, setSubmitted] = useState(null);

  if (submitted) {
    const s = submitted;
    return (
      <div className="container py-4">
        <h3 className="mb-3">Registration Confirmed</h3>
        <div className="card p-3">
          <div><strong>Name:</strong> {s.name}</div>
          <div><strong>Email:</strong> {s.email}</div>
          <div><strong>Phone:</strong> {s.phone}</div>
          <div><strong>Organization:</strong> {s.org}</div>
          <div><strong>Ticket:</strong> {s.ticketType} × {s.quantity}</div>
          <div><strong>Sessions:</strong> {s.sessions.join(", ")}</div>
          <div><strong>Payment:</strong> {s.paymentMethod}</div>
          {s.promoCode && <div><strong>Promo:</strong> {s.promoCode}</div>}
          {s.invoiceRequired && <div><strong>Invoice Address:</strong> {s.invoiceAddress}</div>}
        </div>
        <button className="btn btn-secondary mt-3" onClick={() => setSubmitted(null)}>Back to Form</button>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h2 className="mb-4">Online Event Registration</h2>
      <Formik
        initialValues={{
          name: "", email: "", phone: "", org: "",
          ticketType: "", quantity: 1,
          sessions: [], paymentMethod: "", promoCode: "",
          invoiceRequired: false, invoiceAddress: ""
        }}
        validationSchema={Schema}
        onSubmit={(vals) => setSubmitted(vals)}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit} noValidate>
            <PersonalDetailsSection formik={formik} />
            <TicketSelectionSection formik={formik} />
            <SessionPreferencesSection formik={formik} />
            <PaymentDetailsSection formik={formik} />
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-primary">Register</button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
