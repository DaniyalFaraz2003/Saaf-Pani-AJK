import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconArrowLeft, IconLogout, IconX } from "@tabler/icons-react";
import "./AdminReportPage.css";

function AdminReportPage() {
  // Sample report data
  const [reports, setReports] = useState([
    {
      id: 1,
      name: "John Doe",
      location: "Muzaffarabad",
      area: "Chatterpari",
      complaint: "Water contamination detected",
      date: "2023-05-15",
      status: "Pending"
    },
    {
      id: 2,
      name: "Ali Khan",
      location: "Islamabad",
      area: "Sector F-10",
      complaint: "Low water pressure",
      date: "2023-05-10",
      status: "In Progress"
    },
    {
      id: 3,
      name: "Sara Ahmed",
      location: "Rawalpindi",
      area: "Raja Bazaar",
      complaint: "Water supply disruption",
      date: "2023-05-05",
      status: "Resolved"
    },
    {
      id: 4,
      name: "Mohammad Ali",
      location: "Lahore",
      area: "Model Town",
      complaint: "Water quality issues",
      date: "2023-05-01",
      status: "Pending"
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null); // 'update' or 'resolve'
  const [selectedReport, setSelectedReport] = useState(null);
  const [newStatus, setNewStatus] = useState("");

  const openModal = (type, report) => {
    setModalType(type);
    setSelectedReport(report);
    if (type === 'update') {
      setNewStatus(report.status);
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedReport(null);
    setNewStatus("");
  };

  const handleStatusUpdate = () => {
    if (!selectedReport) return;
    
    const updatedReports = reports.map(report => 
      report.id === selectedReport.id 
        ? { ...report, status: newStatus } 
        : report
    );
    
    setReports(updatedReports);
    closeModal();
  };

  const handleMarkResolved = () => {
    if (!selectedReport) return;
    
    const updatedReports = reports.map(report => 
      report.id === selectedReport.id 
        ? { ...report, status: "Resolved" } 
        : report
    );
    
    setReports(updatedReports);
    closeModal();
  };

  const handleLogout = () => {
    // Clear local storage
    localStorage.removeItem("adminUser");
    window.location.href = "/adminlogin";
  }

  return (
    <>
      <div className="admin-report-container">
        {/* Header Section */}
        <div className="header-section">
          <Link to="/adminhome" className="back-button">
            <IconArrowLeft size={40} color="#1142A7" />
            <span>BACK</span>
          </Link>

          <h1 className="reports-title">REPORTS</h1>

          <div onClick={handleLogout} className="logout-section">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/97c749ad8132c69a40e98c1ef72e64804eaed1ed?placeholderIfAbsent=true"
              alt="Logout"
              className="w-16 h-16 object-contain"
            />
            <span className="mt-2 text-xl">LOGOUT</span>
          </div>
        </div>

        {/* Reports Grid */}
        <div className="reports-grid">
          {reports.map((report) => (
            <div key={report.id} className="report-card">
              <div className="report-header">
                <h3>{report.name}</h3>
                <span className={`status-badge ${report.status.toLowerCase().replace(' ', '-')}`}>
                  {report.status}
                </span>
              </div>

              <div className="report-details">
                <div className="detail-row">
                  <span className="detail-label">Location:</span>
                  <span className="detail-value">{report.location}</span>
                </div>

                <div className="detail-row">
                  <span className="detail-label">Area:</span>
                  <span className="detail-value">{report.area}</span>
                </div>

                <div className="detail-row">
                  <span className="detail-label">Date:</span>
                  <span className="detail-value">{report.date}</span>
                </div>

                <div className="detail-row full-width">
                  <span className="detail-label">Complaint:</span>
                  <p className="detail-value">{report.complaint}</p>
                </div>
              </div>

              <div className="report-actions">
                <button 
                  className="action-button update-button"
                  onClick={() => openModal('update', report)}
                >
                  UPDATE STATUS
                </button>
                {report.status !== "Resolved" && (
                  <button 
                    className="action-button resolve-button"
                    onClick={() => openModal('resolve', report)}
                  >
                    MARK RESOLVED
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
      </div>
        <div className="footer-bar" />

      {/* Status Update Modal */}
      {showModal && modalType === 'update' && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Update Status</h3>
              <button onClick={closeModal} className="modal-close-btn">
                <IconX size={24} />
              </button>
            </div>
            
            <div className="modal-body">
              <p>Update status for {selectedReport?.name}'s report:</p>
              
              <div className="status-options">
                <label>
                  <input
                    type="radio"
                    name="status"
                    value="Pending"
                    checked={newStatus === "Pending"}
                    onChange={() => setNewStatus("Pending")}
                  />
                  <span className="radio-label">Pending</span>
                </label>
                
                <label>
                  <input
                    type="radio"
                    name="status"
                    value="In Progress"
                    checked={newStatus === "In Progress"}
                    onChange={() => setNewStatus("In Progress")}
                  />
                  <span className="radio-label">In Progress</span>
                </label>
                
                <label>
                  <input
                    type="radio"
                    name="status"
                    value="Resolved"
                    checked={newStatus === "Resolved"}
                    onChange={() => setNewStatus("Resolved")}
                  />
                  <span className="radio-label">Resolved</span>
                </label>
              </div>
            </div>
            
            <div className="modal-footer">
              <button onClick={closeModal} className="modal-cancel-btn">
                Cancel
              </button>
              <button 
                onClick={handleStatusUpdate}
                className="modal-confirm-btn"
              >
                Update Status
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mark Resolved Confirmation Modal */}
      {showModal && modalType === 'resolve' && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Confirm Resolution</h3>
              <button onClick={closeModal} className="modal-close-btn">
                <IconX size={24} />
              </button>
            </div>
            
            <div className="modal-body">
              <p>Are you sure you want to mark {selectedReport?.name}'s report as resolved?</p>
            </div>
            
            <div className="modal-footer">
              <button onClick={closeModal} className="modal-cancel-btn">
                Cancel
              </button>
              <button 
                onClick={handleMarkResolved}
                className="modal-confirm-btn resolve"
              >
                Confirm Resolution
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AdminReportPage;