import React, { useState, useEffect } from "react";
import axios from "axios";

const SourcesTable = () => {
  const user = JSON.parse(localStorage.getItem("adminUser"));
  if (!user) {
    window.location.href = "/adminlogin";
  }
  

  const [sources, setSources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [cityFilter, setCityFilter] = useState("all");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [sourceToDelete, setSourceToDelete] = useState(null);
  const [cities, setCities] = useState([]);

  // Fetch all water sources
  useEffect(() => {
    const fetchSources = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/water-sources");
        setSources(response.data.waterSources || []);
        
        // Extract unique cities for filter
        const uniqueCities = [...new Set(response.data.waterSources.map(source => source.city))];
        setCities(uniqueCities);
      } catch (err) {
        setError("Failed to load water sources. Please try again later.");
        console.error("Error fetching sources:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSources();
  }, []);

  const handleUpdate = (id) => {
    console.log(`Update source with id ${id}`);
    // Will implement this later as per your instructions
  };

  const confirmDelete = (source) => {
    setSourceToDelete(source);
    setShowDeleteModal(true);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `http://localhost:5000/api/water-sources/${sourceToDelete._id}`);
      
      // Update local state to remove the deleted source
      setSources(sources.filter(source => source._id !== sourceToDelete._id));
      setShowDeleteModal(false);
    } catch (err) {
      setError("Failed to delete water source. Please try again.");
      console.error("Error deleting source:", err);
    }
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setSourceToDelete(null);
  };

  // Filter sources based on search term and city filter
  const filteredSources = sources.filter(source => {
    const matchesSearch = source.location.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         source.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity = cityFilter === "all" || source.city === cityFilter;
    return matchesSearch && matchesCity;
  });

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  };

  if (loading) {
    return <div className="loading-message">Loading water sources...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="sources-management-container">
      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="delete-modal-overlay">
          <div className="delete-modal">
            <h3>Confirm Deletion</h3>
            <p>Are you sure you want to delete the source at {sourceToDelete?.location}?</p>
            <div className="modal-buttons">
              <button className="cancel-button" onClick={cancelDelete}>
                Cancel
              </button>
              <button className="confirm-delete-button" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="search-filter-container">
        <input
          type="text"
          placeholder="Search by location or city..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <select
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
          className="city-filter-select"
        >
          <option value="all">All Cities</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>{city}</option>
          ))}
        </select>
      </div>

      {filteredSources.length === 0 ? (
        <div className="no-results-message">
          No water sources found matching your criteria.
        </div>
      ) : (
        <div className="sources-table-container">
          <table className="sources-table">
            <thead className="sources-table-header">
              <tr>
                <th>LOCATION</th>
                <th>CITY</th>
                <th>TEST DATE</th>
                <th>TDS</th>
                <th>pH</th>
                <th>STATUS</th>
                <th>UPDATE</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {filteredSources.map((source) => (
                <tr key={source._id} className="sources-table-row">
                  <td>{source.location}</td>
                  <td>{source.city}</td>
                  <td>{formatDate(source.dateOfTest)}</td>
                  <td>{source.TDS} ppm</td>
                  <td>{source.phValue}</td>
                  <td>
                    <span className={`status-badge ${source.isSafeForDrinking ? 'safe' : 'unsafe'}`}>
                      {source.isSafeForDrinking ? "Safe" : "Unsafe"}
                    </span>
                  </td>
                  <td>
                    <button
                      className="update-button"
                      onClick={() => handleUpdate(source._id)}
                    >
                      UPDATE
                    </button>
                  </td>
                  <td>
                    <button
                      className="delete-button"
                      onClick={() => confirmDelete(source)}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {/* Add some basic CSS */}
      <style jsx>{`
        .sources-management-container {
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        
        .search-filter-container {
          display: flex;
          gap: 15px;
          margin-bottom: 20px;
        }
        
        .search-input {
          padding: 8px 12px;
          border: 1px solid #ddd;
          border-radius: 4px;
          flex-grow: 1;
          max-width: 400px;
        }
        
        .city-filter-select {
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        
        .status-badge {
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 0.8em;
          font-weight: bold;
        }
        
        .status-badge.safe {
          background-color: #d4edda;
          color: #155724;
        }
        
        .status-badge.unsafe {
          background-color: #f8d7da;
          color: #721c24;
        }
        
        
        .loading-message, .error-message, .no-results-message {
          padding: 20px;
          text-align: center;
          font-size: 1.1em;
        }
        
        .error-message {
          color: #dc3545;
        }
      `}</style>
    </div>
  );
};

export default SourcesTable;