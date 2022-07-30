import React from "react";
import "./Profile.scss";

import { Form, Button } from "react-bootstrap";

export default function Profile() {
  return (
    <div
      id="profile"
      className="border d-flex flex-column position-relative rounded-2 bg-white shadow-sm"
    >
      <img
        src="https://picsum.photos/800/200"
        alt=""
        width="100%"
        height="auto"
        className="rounded-2"
      />
      <div className="logo mt-4">
        <img
          className="rounded-circle img-thumbnail"
          src="https://picsum.photos/200"
          alt=""
          width="100%"
          height="auto"
        />
      </div>

      <div className="profile-name d-flex flex-column align-items-center">
        <h5>Mitramas Infosys Global</h5>
        <p>Layanan IT</p>
        <Button variant="link">
          <i className="bi bi-pencil" /> Sunting Profile
        </Button>
      </div>
      <div className="bio p-4 d-flex flex-column gap-1">
        <div className="bio-item">
          <h4 className="text-muted">Status Perusahaan</h4>
          <div className="d-flex align-items-center justify-content-between">
            <p className="fw-bolder text-primary">Active</p>
            <Form.Check type="switch" id="custom-switch" defaultChecked />
          </div>
        </div>
        <div className="bio-item">
          <h4 className="text-muted">Singkatan</h4>
          <p>MIG</p>
        </div>
        <div className="bio-item">
          <h4 className="text-muted">Alamat Perusahaan</h4>
          <p>JL. Tebet Raya No.42, Jakarta Selatan</p>
        </div>
        <div className="bio-item">
          <h4 className="text-muted">Penanggung Jawab (PIC)</h4>
          <p>John Doe</p>
        </div>
        <div className="bio-item">
          <h4 className="text-muted">Tanggal PKP</h4>
          <p>03 Maret 2021</p>
        </div>
        <div className="bio-item">
          <h4 className="text-muted">Email</h4>
          <p className="text-primary">
            <i className="bi bi-envelope"></i> mig@mitrasolusi.group
          </p>
        </div>
        <div className="bio-item">
          <h4 className="text-muted ">No. Telp</h4>
          <p className="text-primary">
            <i className="bi bi-telephone"></i> 021-5678-1234
          </p>
        </div>
        <div className="bio-item">
          <h4 className="text-muted">Situs Web</h4>
          <p className="text-primary">
            <i className="bi bi-browser-chrome"></i> mitramas.com
          </p>
        </div>
      </div>
    </div>
  );
}
