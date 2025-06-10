import React from 'react';

function ApplicationsList({ applications }) {
  if (applications.length === 0) return <p>No applications yet.</p>;

  return (
    <div>
      <h2>Submitted Applications</h2>
      <ul>
        {applications.map((app) => (
          <li key={app.id}>
            <strong>{app.companyName}</strong><br />
            Status: <em>{app.status}</em><br />
            Risk Score: {app.riskScore ?? 'Pending'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ApplicationsList;