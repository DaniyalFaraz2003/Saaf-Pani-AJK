import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IconArrowLeft, IconX } from "@tabler/icons-react";
import axios from "axios";
import "./AdminReportPage.css";

function AdminReportPage() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null); // 'update' or 'resolve'
  const [selectedReport, setSelectedReport] = useState(null);
  const [newStatus, setNewStatus] = useState("");

  // Fetch reports from backend
  useEffect(() => {
    const fetchReports = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("adminUser"));
        if (!user) {
          window.location.href = "/adminlogin";
          return;
        }

        const response = await axios.get("http://localhost:5000/api/reports");
        
        setReports(response.data.reports || []);
      } catch (err) {
        setError("Failed to load reports. Please try again later.");
        console.error("Error fetching reports:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

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

  const updateReportStatus = async () => {
    if (!selectedReport) return;
    
    try {
      const user = JSON.parse(localStorage.getItem("adminUser"));
      if (!user) {
        window.location.href = "/adminlogin";
        return;
      }

      await axios.put(
        `http://localhost:5000/api/reports/${selectedReport._id}/status`,
        { status: newStatus });

      // Update local state
      const updatedReports = reports.map(report => 
        report._id === selectedReport._id 
          ? { ...report, status: newStatus } 
          : report
      );
      
      setReports(updatedReports);
      closeModal();
    } catch (err) {
      setError("Failed to update report status. Please try again.");
      console.error("Error updating report:", err);
    }
  };

  const markReportResolved = async () => {
    if (!selectedReport) return;
    
    try {
      const user = JSON.parse(localStorage.getItem("adminUser"));
      if (!user) {
        window.location.href = "/adminlogin";
        return;
      }

      await axios.put(
        `http://localhost:5000/api/reports/${selectedReport._id}/status`,
        { status: "resolved" });

      // Update local state
      const updatedReports = reports.map(report => 
        report._id === selectedReport._id 
          ? { ...report, status: "resolved" } 
          : report
      );
      
      setReports(updatedReports);
      closeModal();
    } catch (err) {
      setError("Failed to mark report as resolved. Please try again.");
      console.error("Error resolving report:", err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminUser");
    window.location.href = "/adminlogin";
  };

  if (loading) {
    return (
      <div className="admin-report-container">
        <div className="loading-message">Loading reports...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="admin-report-container">
        <div className="error-message">{error}</div>
      </div>
    );
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
          {reports.length === 0 ? (
            <div className="no-reports-message">No reports found</div>
          ) : (
            reports.map((report) => (
              <div key={report._id} className="report-card">
                <div className="report-header">
                  <h3>{report.name}</h3>
                  <span className={`status-badge ${report.status.toLowerCase()}`}>
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
                    <span className="detail-value">
                      {new Date(report.createdAt).toLocaleDateString()}
                    </span>
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
                  {report.status !== "resolved" && (
                    <button 
                      className="action-button resolve-button"
                      onClick={() => openModal('resolve', report)}
                    >
                      MARK RESOLVED
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="footer-bar" />
      </div>

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
                    value="pending"
                    checked={newStatus === "pending"}
                    onChange={() => setNewStatus("pending")}
                  />
                  <span className="radio-label">Pending</span>
                </label>
                
                <label>
                  <input
                    type="radio"
                    name="status"
                    value="resolved"
                    checked={newStatus === "resolved"}
                    onChange={() => setNewStatus("resolved")}
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
                onClick={updateReportStatus}
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
                onClick={markReportResolved}
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