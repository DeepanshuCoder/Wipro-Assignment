import React, { useState } from "react";
import { usePowerCut } from "./PowerCutContext";

function SendAnnouncement() {
  const { addAnnouncement } = usePowerCut();
  const [street, setStreet] = useState("");
  const [message, setMessage] = useState("");

  // handle form submit
  const submit = (e) => {
    e.preventDefault();
    if (!street || !message) return;
    addAnnouncement(street, message);
    setStreet(""); setMessage(""); // clear fields
  };

  return (
    <div className="mb-4">
      <h4>Street Power Cut Announcements</h4>
      <form onSubmit={submit}>
        <div className="mb-2">
          <label className="form-label">Street Name:</label>
          <input className="form-control"
                 value={street}
                 onChange={(e) => setStreet(e.target.value)} />
        </div>
        <div className="mb-2">
          <label className="form-label">Message:</label>
          <textarea className="form-control"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)} />
        </div>
        <button className="btn btn-primary">Send Announcement</button>
      </form>
    </div>
  );
}

export default SendAnnouncement;