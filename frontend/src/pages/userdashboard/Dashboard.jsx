import React from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardStats from "./DashboardStats";
import DashboardProgress from "./DashboardProgress";
import DashboardStatus from "./DashboardStatus";
import DashboardTrend from "./DashboardTrend";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "./dashboard.css"; // Assuming you have a CSS file for styling

function Dashboard() {
  // Data for pie chart
  const pieData = [
    { name: "Tested", value: 6000, color: "#17B6E2" },
    { name: "Pending", value: 1211, color: "#FBE310" },
    { name: "Safe", value: 4789, color: "#05DB9E" }
  ];

  return (
    <div className="dashboard-container">
      <DashboardHeader />

      <div className="dashboard-content">
        {/* Top Section - Stats and Progress */}
        <div className="dashboard-top-section">
          <DashboardStats />
          
          <div className="dashboard-progress-section">
            <DashboardProgress />
            
            {/* Pie Chart */}
            <div className="pie-chart-container">
              <h3 className="pie-chart-title">Water Source Status</h3>
              <div className="pie-chart-wrapper">
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="pie-chart-legend">
                {pieData.map((item) => (
                  <div key={item.name} className="legend-item">
                    <div 
                      className="legend-color" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span>{item.name}: {item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Status and Trend */}
        <div className="dashboard-bottom-section">
          <DashboardStatus />
          <DashboardTrend />
        </div>
      </div>

      <div className="dashboard-footer" />
    </div>
  );
}

export default Dashboard;