import React, { useState } from "react";

const SourcesTable = () => {
  // Mock data for sources
  const initialSources = [
    {
      id: 1,
      location: "Chatterpari",
      city: "Muzaffarabad",
      testDate: "15 March 2025",
      tds: "120 ppm",
      ph: "7.2",
      status: "Safe"
    },
    { 
      id: 2,
      location: "Nalochi", 
      city: "Muzaffarabad", 
      testDate: "20 March 2025",
      tds: "150 ppm",
      ph: "6.8",
      status: "Safe"
    },
    { 
      id: 3,
      location: "Jhelum River", 
      city: "Islamabad", 
      testDate: "10 March 2025",
      tds: "180 ppm",
      ph: "7.0",
      status: "Safe"
    },
    { 
      id: 4,
      location: "Khanpur Dam", 
      city: "Haripur", 
      testDate: "5 March 2025",
      tds: "200 ppm",
      ph: "7.5",
      status: "Safe"
    },
    { 
      id: 5,
      location: "Rawal Lake", 
      city: "Islamabad", 
      testDate: "1 March 2025",
      tds: "220 ppm",
      ph: "7.8",
      status: "Safe"
    },

  ];

  const [sources, setSources] = useState(initialSources);
  const [searchTerm, setSearchTerm] = useState("");
  const [cityFilter, setCityFilter] = useState("all");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [sourceToDelete, setSourceToDelete] = useState(null);

  // Get unique cities for filter dropdown
  const cities = [...new Set(initialSources.map(source => source.city))];

  const handleUpdate = (id) => {
    console.log(`Update source with id ${id}`);
  };

  const confirmDelete = (source) => {
    setSourceToDelete(source);
    setShowDeleteModal(true);
  };

  const handleDelete = () => {
    setSources(sources.filter(source => source.id !== sourceToDelete.id));
    setShowDeleteModal(false);
    console.log(`Deleted source with id ${sourceToDelete.id}`);
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

  return (
    <>
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

      <div className="search-filter">
        <input
          type="text"
          placeholder="Search by location or city..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
        >
          <option value="all">All Cities</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>{city}</option>
          ))}
        </select>
      </div>

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
              <tr key={source.id} className="sources-table-row">
                <td>{source.location}</td>
                <td>{source.city}</td>
                <td>{source.testDate}</td>
                <td>{source.tds}</td>
                <td>{source.ph}</td>
                <td>{source.status}</td>
                <td>
                  <button
                    className="update-button"
                    onClick={() => handleUpdate(source.id)}
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
    </>
  );
};

export default SourcesTable;