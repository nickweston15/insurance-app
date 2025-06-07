require('dotenv').config();

const express = require('express');
const cors = require('cors');
const multer = require('multer');
const AWS = require('aws-sdk');
const upload = multer({ storage: multer.memoryStorage() });
const app = express();
const PORT = 5000;

const s3 = new AWS.S3({
  region: process.env.AWS_REGION,
});

app.use(cors());
app.use(express.json());

// Example REST endpoint
app.get('/api/message', (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// Example webhook endpoint
app.post('/api/webhook', (req, res) => {
  console.log('Webhook received:', req.body);
  res.status(200).send('Webhook received');
});

// Endpoint to handle single file uploads to an AWS S3 bucket
app.post('/api/upload', upload.single('file'), async (req, res) => {
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: req.file.originalname,
    Body: req.file.buffer,
    ContentType: req.file.mimetype,
  };

  try {
    const data = await s3.upload(params).promise();
    res.json({ url: data.Location });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Upload failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});