import React from "react";
import { usePowerCut } from "./PowerCutContext";

function AnnouncementList() {
  const { announcements } = usePowerCut();

  return (
    <div>
      <h4>Power Cut Announcements</h4>
      <div style={{ maxHeight: "300px", overflowY: "auto" }}>
        {announcements.map(a => (
          <div key={a.id} className="border rounded p-2 mb-2">
            <div><b>Street:</b> {a.street}</div>
            <div><b>Message:</b> {a.message}</div>
            <div><b>Time:</b> {a.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnnouncementList;