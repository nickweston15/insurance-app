import React, { useState } from 'react';

function ApplicationForm({ onSubmitted }) {
  const [formData, setFormData] = useState({ companyName: ''});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:5000/api/applications', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    setFormData({ companyName: ''});
    onSubmitted();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Application Form</h2>
      <ul className="form-list">
        <li className="form-item">
          <label>
            Company Name:
            <input
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </label>
        </li>
        <li className="form-item">
          <label>
            Is employee training provided on recognizing phishing and
            other social engineering attacks?
            <input
              name="employeeTraining"
              type="checkbox"
            />
          </label>
        </li>
        <li className="form-item">
          <label>
            Does the company encrypt data at rest, in transit, and in use?
            <input
              name="dataEncryption"
              type="checkbox"
            />
          </label>
        </li>
        <li className="form-item">
          <label>
            Does the company have a documented and tested incident response plan?
            <input
              name="incidentResponse"
              type="checkbox"
            />
          </label>
        </li>
        <li className="form-item">
          <label>
            Is the company involved in any high-risk industries or activities? 
            <input
              name="highRiskIndustry"
              type="checkbox"
            />
          </label>
        </li>
        <li className="form-item">
          <label>
            Does the company use a firewall with active security services?
            <input
              name="firewallSecurity"
              type="checkbox"
            />
          </label>
        </li>
      </ul>
      <button type="submit">Submit Application</button>
    </form>
  );
}

export default ApplicationForm;