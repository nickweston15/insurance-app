let applications = [];
let idCounter = 1;

function createApplication(data) {
  const newApp = {
    id: idCounter++,
    ...data,
    status: 'Pending',
    riskScore: calculateRiskScore(data),
    submittedAt: new Date().toISOString(),
  };
  applications.push(newApp);
  return newApp;
}

function calculateRiskScore(data) {
  const checkboxFields = [
    'employeeTraining',
    'dataEncryption',
    'incidentResponse',
    'highRiskIndustry',
    'firewallSecurity',
  ];

  let checkedCount = 0;
  for (const field of checkboxFields) {
    if (data[field] === true || data[field] === 'on') checkedCount++;
  }
  return checkedCount * 20;
}

function getAllApplications() {
  return applications;
}

function getApplicationById(id) {
  return applications.find(app => app.id === Number(id));
}

function updateApplicationStatus(id, newStatus, riskScore = null) {
  const app = getApplicationById(id);
  if (app) {
    app.status = newStatus;
    if (riskScore !== null) app.riskScore = riskScore;
  }
  return app;
}

module.exports = {
  createApplication,
  getAllApplications,
  getApplicationById,
  updateApplicationStatus,
};