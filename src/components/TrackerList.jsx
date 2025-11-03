import React from "react";
import ViewAR from "./ViewAR";

export default function TrackerList({ trackers }) {
  return (
    <div className="row">
      {trackers.map((t) => (
        <div key={t.id} className="col-md-4 mb-3">
          <div className="card shadow-sm h-100">
            <img src={t.trackerImage} className="card-img-top" alt="marker" />
            <div className="card-body">
              <h5 className="card-title">{t.title}</h5>
              <p className="small text-muted">{t.contentType}</p>
              <ViewAR tracker={t} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
