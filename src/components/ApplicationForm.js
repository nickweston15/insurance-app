import React, { useState } from 'react';

function ApplicationForm({ onSubmitted }) {
  const [formData, setFormData] = useState({ companyName: ''});

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Ensure all checkbox fields are present in formData, even if unchecked
    const checkboxFields = [
      'employeeTraining',
      'dataEncryption',
      'incidentResponse',
      'highRiskIndustry',
      'firewallSecurity',
    ];
    const completeFormData = { ...formData };
    checkboxFields.forEach(field => {
      if (typeof completeFormData[field] === 'undefined') {
        completeFormData[field] = false;
      }
    });
    await fetch('http://localhost:5000/api/applications', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(completeFormData),
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
              onChange={handleChange}
              checked={formData.employeeTraining || false}
            />
          </label>
        </li>
        <li className="form-item">
          <label>
            Does the company encrypt data at rest, in transit, and in use?
            <input
              name="dataEncryption"
              type="checkbox"
              onChange={handleChange}
              checked={formData.dataEncryption || false}
            />
          </label>
        </li>
        <li className="form-item">
          <label>
            Does the company have a documented and tested incident response plan?
            <input
              name="incidentResponse"
              type="checkbox"
              onChange={handleChange}
              checked={formData.incidentResponse || false}
            />
          </label>
        </li>
        <li className="form-item">
          <label>
            Is the company involved in any high-risk industries or activities? 
            <input
              name="highRiskIndustry"
              type="checkbox"
              onChange={handleChange}
              checked={formData.highRiskIndustry || false}
            />
          </label>
        </li>
        <li className="form-item">
          <label>
            Does the company use a firewall with active security services?
            <input
              name="firewallSecurity"
              type="checkbox"
              onChange={handleChange}
              checked={formData.firewallSecurity || false}
            />
          </label>
        </li>
      </ul>
      <button type="submit">Submit Application</button>
    </form>
  );
}

export default ApplicationForm;