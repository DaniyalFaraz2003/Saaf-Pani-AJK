import React from "react";

function DashboardStatus() {
  const statusData = [
    {
      location: "Nalochi",
      area: "Muzaffarabad",
      type: "Spring",
      safe: false
    },
    {
      location: "Kundal Shahi",
      area: "Neelum",
      type: "Filtration plant",
      safe: true
    },
    {
      location: "Dhirkot",
      area: "Bagh",
      type: "Spring",
      safe: true
    },
    {
      location: "Abbaspur",
      area: "Rawalakot",
      type: "Borewell",
      safe: false
    }
  ];

  return (
    <div className="status-container">
      <h2 className="status-title">Recent Water Source Status</h2>
      
      <div className="status-table">
        <div className="table-header">
          <div>Location</div>
          <div>Area</div>
          <div>Type</div>
          <div>Status</div>
        </div>
        
        {statusData.map((item, index) => (
          <div key={index} className="table-row">
            <div>{item.location}</div>
            <div>{item.area}</div>
            <div>{item.type}</div>
            <div className={`status-badge ${item.safe ? 'safe' : 'unsafe'}`}>
              {item.safe ? 'SAFE' : 'UNSAFE'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardStatus;