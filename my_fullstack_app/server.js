const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');  // Correct path to auth.js
const productRoutes = require('./routes/products');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());  // Middleware to parse JSON data

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Use the product routes
app.use('/products', productRoutes);
app.use('/auth', authRoutes);      // For signup and login

// Connect to MongoDB
mongoose.connect('mongodb+srv://harmanrick81:KbSfJuOecMNtBEyx@cluster0.4zoup.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Database connected'))
.catch(err => console.error('Database connection error:', err));
