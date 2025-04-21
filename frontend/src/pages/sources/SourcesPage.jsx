import React from "react";
import SourcesHeader from "./SourcesHeader";
import SourcesTable from "./SourcesTable";
import "./sources.css";

const SourcesPage = () => {
  return (
    <div className="sources-container">
      <SourcesHeader />
      <div className="sources-content">
        <SourcesTable />
      </div>
    </div>
  );
};

export default SourcesPage;