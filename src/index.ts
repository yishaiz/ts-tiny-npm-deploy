import express from 'express';

const app = express();
const port = 3005;

app.get('/', (req, res) => {
  res.send('hello ts express app');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
