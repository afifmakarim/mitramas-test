import React from "react";
import "./Relation.scss";
import { Button } from "react-bootstrap";

export default function Relation() {
  return (
    <div
      id="relation"
      className="relation p-4 border rounded-2 h-100 bg-white shadow-sm"
    >
      <div className="d-flex justify-content-between w-100 mb-4">
        <h4>Relasi</h4>
        <Button variant="link">Lihat Semua</Button>
      </div>
      <div className="relation-wrapper d-flex flex-column gap-3">
        <div className="relation-item d-flex gap-3 align-items-center">
          <i className="bi bi-share fs-4" />
          <div className="d-flex flex-column">
            <h4 className="fw-bolder">20</h4>
            <p className="fw-light">Memiliki</p>
          </div>
        </div>
        <div className="relation-item d-flex gap-3 align-items-center">
          <i className="bi bi-share fs-4" />
          <div className="d-flex flex-column">
            <h4 className="fw-bolder">108</h4>
            <p className="fw-light">Menggunakan</p>
          </div>
        </div>
        <div className="relation-item d-flex gap-3 align-items-center">
          <i className="bi bi-share fs-4" />
          <div className="d-flex flex-column">
            <h4 className="fw-bolder">67</h4>
            <p className="fw-light">Meminjam</p>
          </div>
        </div>
      </div>
    </div>
  );
}
