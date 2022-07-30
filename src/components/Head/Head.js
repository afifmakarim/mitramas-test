import React from "react";
import { Breadcrumb } from "react-bootstrap";

export default function Head() {
  return (
    <div className="head-wrapper d-flex justify-content-between align-items-center mb-4">
      <Breadcrumb>
        <Breadcrumb.Item href="#" className="text-muted">
          Perusahaan
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Mitramas Infosys Global</Breadcrumb.Item>
      </Breadcrumb>

      <div className="user-profile d-flex align-items-center gap-2">
        <div className="d-flex gap-3 fs-6 text-primary">
          <i className="bi bi-search" />
          <i className="bi bi-bell" />
        </div>
        <img
          src="https://picsum.photos/45/45
"
          alt=""
          className="rounded-circle rounded-3 img-thumbnail"
        />
        <p style={{ padding: 0, margin: 0 }}>John Doe</p>
      </div>
    </div>
  );
}
