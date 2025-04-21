import React from "react";
import { IconArrowLeft, IconSearch } from "@tabler/icons-react";
import { Link } from "react-router-dom";

function DashboardHeader() {
  return (
    <div className="dashboard-header">
      <Link to="/adminhome" className="back-button">
        <IconArrowLeft size={32} color="#1142A7" />
        <span>BACK</span>
      </Link>

      <div className="header-content">
        <div className="search-bar">
          <IconSearch size={20} color="#737F82" />
          <input type="text" placeholder="Search" />
        </div>

        <div className="dashboard-title">DASHBOARD</div>
      </div>
    </div>
  );
}

export default DashboardHeader;