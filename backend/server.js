const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const initializeDatabase = require('./utils/initDB');

const authRoute = require('./routes/authRoute');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/auth', authRoute);


app.get('/', (req, res) => {
  res.send('Water Sources Management API');
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log('Connected to MongoDB');
  // Initialize database after connection
  return initializeDatabase();
})
.then((result) => {
  console.log('Database initialized:', result);
  // Start the server after database initialization
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch(err => {
  console.error('Database connection or initialization failed:', err);
  process.exit(1);
});