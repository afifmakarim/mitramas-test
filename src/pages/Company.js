import React from "react";
import AccountBank from "../parts/CompanyParts/AccountBank/AccountBank";
import Activity from "../parts/CompanyParts/Activity/Activity";
import Location from "../parts/CompanyParts/Location/Location";
import Profile from "../parts/CompanyParts/Profile/Profile";
import Relation from "../parts/CompanyParts/Relation/Relation";

export default function Company() {
  return (
    <div className="content-wrapper">
      <Profile />
      <Location />
      <AccountBank />
      <Relation />
      <Activity />
    </div>
  );
}
