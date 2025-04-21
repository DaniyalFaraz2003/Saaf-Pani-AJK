import React from "react";

function DashboardStats() {
  const stats = [
    {
      title: "Total Areas",
      value: "149",
      icon: "📍",
      bgColor: "rgba(246,228,60,1)"
    },
    {
      title: "Water Sources",
      value: "6000",
      icon: "💧",
      bgColor: "rgba(150,206,234,1)"
    },
    {
      title: "Safe Sources",
      value: "4789",
      icon: "✅",
      bgColor: "rgba(5,219,158,1)"
    }
  ];

  return (
    <div className="stats-container">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className="stat-card"
          style={{ backgroundColor: stat.bgColor }}
        >
          <div className="stat-icon">{stat.icon}</div>
          <div className="stat-value">{stat.value}</div>
          <div className="stat-title">{stat.title}</div>
        </div>
      ))}
    </div>
  );
}

export default DashboardStats;