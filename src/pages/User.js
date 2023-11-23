import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LeaveRequestForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    id: '',
    reason: 'sick',
  });

  const [adminResponse, setAdminResponse] = useState(null);
  const [adminDecision, setAdminDecision] = useState(null);
  const [submittedData, setSubmittedData] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdminAction = (action) => {
    if (action === 'accept') {
      setAdminResponse('Your leave request has been accepted.');
      setAdminDecision('accept');
    } else if (action === 'reject') {
      setAdminResponse('Your leave request has been rejected.');
      setAdminDecision('reject');
    } else if (action === 'submit') {
      setSubmittedData({ ...formData, decision: 'submit' });
      setAdminResponse('Leave request submitted successfully.');
      setAdminDecision('submit');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Leave Request Form */}
        <div className="col-md-6">
          <h2>Request to Leave</h2>
          <form>
            <div className="form-group">
              <label>First Name:</label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Last Name:</label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>ID:</label>
              <input
                type="text"
                className="form-control"
                name="id"
                value={formData.id}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Reason to Leave:</label>
              <select
                className="form-control"
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
              >
                <option value="sick">Sick</option>
                <option value="travel">Travel</option>
                <option value="family">Family Problem</option>
                <option value="other">Other</option>
              </select>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleAdminAction('submit')}
            >
              Submit
            </button>
          </form>
        </div>

        {/* Admin Page */}
        <div className="col-md-6">
          <div className="border p-3">
            <h2>Admin Page</h2>
            {submittedData && (
              <>
                <p>Name: {submittedData.firstName} {submittedData.lastName}</p>
                <p>ID: {submittedData.id}</p>
                <p>Reason: {submittedData.reason}</p>
                <p>Decision: {submittedData.decision}</p>
              </>
            )}
            <div>
              <button className="btn btn-success" onClick={() => handleAdminAction('accept')}>
                Accept
              </button>
              <button className="btn btn-danger" onClick={() => handleAdminAction('reject')}>
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Display Admin Response with Color */}
      {adminResponse && (
        <div className="mt-3" style={{ color: adminDecision === 'accept' ? 'green' : 'red' }}>
          <h3>Admin Response:</h3>
          <p>{adminResponse}</p>
        </div>
      )}
    </div>
  );
};

export default LeaveRequestForm;
