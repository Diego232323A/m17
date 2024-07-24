const express = require('express');

const app = express();
const port = 3000;

app.get('/health', (req, res) => {
  res.status(200).send({ status: 'UP' });
});

app.listen(port, () => {
  console.log(`HealthCheck service running on port ${port}`);
});
