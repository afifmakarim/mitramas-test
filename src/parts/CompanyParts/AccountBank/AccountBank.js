import { Button } from "react-bootstrap";
import React from "react";
import "./AccountBank.scss";
export default function AccountBank() {
  return (
    <div id="account-bank" className="border rounded-2 h-100 bg-white p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>Akun Bank</h4>
        <Button variant="primary" className="text-white py-2 px-4" size="sm">
          + Tambah Akun Bank
        </Button>
      </div>
      <div className="bank-content d-flex flex-column gap-3">
        <div className="bank-item d-flex gap-3">
          <img
            src="https://picsum.photos/200"
            alt=""
            className="border rounded-2"
          />
          <div className="d-flex flex-column justify-content-between">
            <h4>Bank KB Bukopin</h4>
            <div className="text-muted">
              <p>**** 0876 - Yusron Taufiq</p>
              <p>IDR</p>
            </div>
          </div>
          <div className="d-flex align-items-start gap-2 justify-content-end flex-fill">
            <span>
              <i className="bi bi-pencil-square fs-6 text-primary"></i>
            </span>
            <span>
              <i className="bi bi-trash fs-6 text-danger"></i>
            </span>
          </div>
        </div>
        <div className="bank-item d-flex gap-3">
          <img
            src="https://picsum.photos/200"
            alt=""
            className="border rounded-2"
          />
          <div className="d-flex flex-column justify-content-between">
            <h4>Citibank, NA</h4>
            <div className="text-muted">
              <p>**** 0876 - Si Tampan</p>
              <p>IDR</p>
            </div>
          </div>
          <div className="d-flex align-items-start gap-2 justify-content-end flex-fill">
            <span>
              <i className="bi bi-pencil-square fs-6 text-primary"></i>
            </span>
            <span>
              <i className="bi bi-trash fs-6 text-danger"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
