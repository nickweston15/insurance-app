const appModel = require('../models/applicationModel');

exports.create = (req, res) => {
  const newApp = appModel.createApplication(req.body);

  // Simulate webhook after 10 seconds
  setTimeout(() => {
    const riskScore = Math.floor(Math.random() * 100); // Simple simulated risk
    const status = riskScore > 70 ? 'flagged_for_review' : 'approved';
    appModel.updateApplicationStatus(newApp.id, status, riskScore);
    console.log(`Webhook simulated: App ${newApp.id} marked as ${status}`);
  }, 10000);

  res.status(201).json(newApp);
};

exports.getAll = (req, res) => {
  const apps = appModel.getAllApplications();
  res.json(apps);
};

exports.getById = (req, res) => {
  const app = appModel.getApplicationById(req.params.id);
  if (!app) return res.status(404).json({ message: 'Application not found' });
  res.json(app);
};

exports.updateStatus = (req, res) => {
  const { status, riskScore } = req.body;
  const app = appModel.updateApplicationStatus(req.params.id, status, riskScore);
  if (!app) return res.status(404).json({ message: 'Application not found' });
  res.json(app);
};