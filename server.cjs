const app = require('./src/app.cjs');

const PORT = process.env.NODE_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
