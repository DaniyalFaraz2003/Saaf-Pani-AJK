import React from "react";
import { useNavigate } from "react-router-dom";
import { IconArrowLeftCircle, IconLogout } from "@tabler/icons-react";

const SourcesHeader = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleLogout = () => {
    navigate("/adminlogin");
  };

  return (
    <div className="sources-header">
      <div className="back-button" onClick={handleBack}>
        <IconArrowLeftCircle size={40} color="#0E3A93" />
        <span>BACK</span>
      </div>
      <h1 className="sources-title">WATER SOURCES</h1>
      <div className="logout-button flex flex-col" onClick={handleLogout}>
      <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/97c749ad8132c69a40e98c1ef72e64804eaed1ed?placeholderIfAbsent=true"
              alt="Logout"
              className="w-16 h-16 object-contain"
            />
        <span>LOGOUT</span>
      </div>
    </div>
  );
};

export default SourcesHeader;