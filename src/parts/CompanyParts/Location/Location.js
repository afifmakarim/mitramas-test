import { Button } from "react-bootstrap";
import React from "react";
import "./Location.scss";

const locationList = [
  {
    name: "Induk",
    count: 20,
    icon: <i className="bi bi-building fs-2" />,
    color: "#42934a",
  },
  {
    name: "Sub Lokasi Level 1",
    count: 3,
    icon: <i className="bi bi-tools fs-2" />,
    color: "#50b058",
  },
  {
    name: "Sub Lokasi Level 2",
    count: 1,
    icon: <i className="bi bi-briefcase fs-2" />,
    color: "#6dbd74",
  },
];

export default function Location() {
  return (
    <div
      id="location"
      className="location p-4 border rounded-2 h-100 bg-white shadow-sm"
    >
      <div className="d-flex justify-content-between w-100 mb-3">
        <h4>Lokasi</h4>
        <Button variant="link">Lihat Semua</Button>
      </div>
      <div className="cards d-flex gap-2 ">
        {locationList.map((item, index) => (
          <div
            key={index}
            style={{ background: item.color }}
            className="card-item d-flex justify-content-between border rounded-3 p-3 text-white "
          >
            {item.icon}
            <span className="d-flex flex-column align-items-end">
              <p className="fs-5 fw-bolder">{item.count}</p>
              <p className="fw-lighter">{item.name}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
