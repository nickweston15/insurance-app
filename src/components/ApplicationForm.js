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
      <h2>Submit Application</h2>
      <label>
        Company Name:
        <input
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Submit Application</button>
    </form>
  );
}

export default ApplicationForm;