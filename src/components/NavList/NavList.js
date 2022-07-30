import React, { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { sideBarItems } from "../../config";
import { useLocation } from "react-router-dom";
import "./NavList.scss";

export default function NavList({ withName }) {
  const location = useLocation();
  const [url, setUrl] = useState(null);

  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  return (
    <ListGroup defaultActiveKey="#link1" className="d-flex flex-column fs-5">
      {sideBarItems.map((item, index) => (
        <ListGroup.Item
          variant="lightgreen"
          key={index}
          action
          href={item.href}
          active={url === item.href ? true : false}
          className={`light-green rounded-0 px-4 py-3 d-flex border-0 ${
            withName ? "justify-content-start" : "justify-content-start"
          }`}
        >
          {item.icons} &nbsp;&nbsp;&nbsp; {withName ? item.name : ""}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
