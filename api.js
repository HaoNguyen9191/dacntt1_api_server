// Libraries
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json()); 

// Routes
const customerRoutes = require('./routes/customerRoutes.js');
const orderRoutes = require('./routes/orderRoutes.js');
const productRoutes = require('./routes/productRoutes.js');
const staffRoutes = require('./routes/staffRoutes.js');
const grnRoutes = require('./routes/grnRoutes.js');

app.use('/api/client', customerRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/product', productRoutes);
app.use('/api/staff', staffRoutes);
app.use('/api/grn', grnRoutes);

// Run server
app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
