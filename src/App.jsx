import React, { useState } from "react";
import TrackerForm from "./components/TrackerForm";
import TrackerList from "./components/TrackerList";
import "./styles/main.scss";

function App() {
  const [trackers, setTrackers] = useState([]);

  const addTracker = (newTracker) => {
    setTrackers([...trackers, newTracker]);
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center">🌐 WebAR Experience Builder</h2>
      <TrackerForm addTracker={addTracker} />
      <TrackerList trackers={trackers} />
    </div>
  );
}

export default App;
