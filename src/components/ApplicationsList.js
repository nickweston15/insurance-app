import React from 'react';

function ApplicationsList({ applications }) {
  if (applications.length === 0) return <p>No applications yet.</p>;

  return (
    <div>
      <h2>Submitted Applications</h2>
      <table className="applications-table">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Status</th>
            <th>Risk Score</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.id}>
              <td><strong>{app.companyName}</strong></td>
              <td><em>{app.status}</em></td>
              <td>{app.riskScore ?? 'Pending'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ApplicationsList;