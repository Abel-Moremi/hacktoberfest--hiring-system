const express = require('express');
const app = express();
const path = require('path');
const port = process.env.APP_PORT || 3000;
const apiRouter = require('./routes');

app.use('/static', express.static(path.join(`${__dirname}/public`)));

app.use('/api', apiRouter);

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/public/index.html`));
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
