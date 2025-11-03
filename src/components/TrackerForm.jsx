import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TrackerForm({ addTracker }) {
  const [title, setTitle] = useState("");
  const [trackerImage, setTrackerImage] = useState("");
  const [contentType, setContentType] = useState("text");
  const [contentValue, setContentValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !trackerImage) return alert("Please fill all fields");

    const newTracker = {
      id: uuidv4(),
      title,
      trackerImage,
      contentType,
      contentValue,
    };
    addTracker(newTracker);

    setTitle("");
    setTrackerImage("");
    setContentValue("");
  };

  return (
    <form className="card p-3 mb-4 shadow-sm" onSubmit={handleSubmit}>
      <h5>Add New Tracker</h5>

      <div className="mb-2">
        <label>Tracker Name</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mb-2">
        <label>Tracker Image (URL)</label>
        <input
          type="text"
          className="form-control"
          placeholder="https://example.com/marker.jpg"
          value={trackerImage}
          onChange={(e) => setTrackerImage(e.target.value)}
        />
      </div>

      <div className="mb-2">
        <label>Content Type</label>
        <select
          className="form-select"
          value={contentType}
          onChange={(e) => setContentType(e.target.value)}
        >
          <option value="text">Text</option>
          <option value="image">Image</option>
          <option value="gif">GIF</option>
          <option value="video">Video</option>
          <option value="model">3D Model (.glb URL)</option>
        </select>
      </div>

      <div className="mb-3">
        <label>Content Value / URL</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter text or URL"
          value={contentValue}
          onChange={(e) => setContentValue(e.target.value)}
        />
      </div>

      <button className="btn btn-primary" type="submit">
        Add Tracker
      </button>
    </form>
  );
}
