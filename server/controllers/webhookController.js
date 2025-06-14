const appModel = require('../models/applicationModel');

exports.handleSecurityScan = (req, res) => {
  const { applicationId, riskScore } = req.body;
  const status = riskScore;
  const updatedApp = appModel.updateApplicationStatus(applicationId, status, riskScore);

  if (!updatedApp) return res.status(404).json({ message: 'Application not found' });

  console.log(`Webhook received: App ${applicationId} marked as ${status}`);
  res.json({ message: 'Application updated via webhook', application: updatedApp });
};
