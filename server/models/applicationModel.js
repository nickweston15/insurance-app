let applications = [];
let idCounter = 1;

function createApplication(data) {
  const newApp = {
    id: idCounter++,
    ...data,
    status: 'pending_scan',
    riskScore: null,
    submittedAt: new Date().toISOString(),
  };
  applications.push(newApp);
  return newApp;
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