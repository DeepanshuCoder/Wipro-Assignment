import React from "react";
import { PowerCutProvider } from "./component/PowerCutContext";
import SendAnnouncement from "./component/SendAnnouncement";
import AnnouncementList from "./component/AnnouncementList";

export default function App() {
  return (
    <PowerCutProvider>
      <div className="container my-4">
        <SendAnnouncement />
        <AnnouncementList />
      </div>
    </PowerCutProvider>
  );
}
