import React, { useState } from "react";
import NavList from "../NavList/NavList";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
import SidebarOffCanvas from "../SidebarOffCanvas/SidebarOffCanvas";
import { Button } from "react-bootstrap";

export default function Sidebar() {
  const [show, setShow] = useState(false);

  const handleOffcanvas = () => setShow(!show);

  return (
    <div className="sidebar-wrapper d-flex flex-column bg-white shadow-sm">
      <div className="logo p-4 d-flex justify-content-center">
        <Link to={"/"} className="fw-bold fs-2 text-decoration-none">
          M
        </Link>
      </div>
      <Button
        variant="lightgreen"
        className="hamburger fs-1 d-flex justify-content-center"
        onClick={handleOffcanvas}
      >
        <i className="bi bi-list"></i>
      </Button>
      <div className="sidebar-item d-flex flex-column justify-content-between h-100">
        <NavList />
      </div>

      <SidebarOffCanvas show={show} handle={handleOffcanvas} />
    </div>
  );
}
