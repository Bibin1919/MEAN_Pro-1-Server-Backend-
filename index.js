const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config()
require('./db/connection')
const router = require('./routes/router')


app.use(cors({ origin: 'http://localhost:4200' }));
// Setup middleware
app.use(bodyParser.json());
app.use(router)

// Connect to MongoDB Atlas database
mongoose.connect('mongodb+srv://bibinbinoy1919:bibin@cluster0.7o4brlu.mongodb.net/textile?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch((err) => {
  console.error('Error connecting to MongoDB Atlas:', err);
});

// Define a schema for the data
const contactSchema = new mongoose.Schema({

  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  company: { type: String, required: true },
  business: { type: String, required: true },
  message: { type: String, required: true }
});


// Define a schema for the feedback
const feedbackSchema = new mongoose.Schema({

  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  message: { type: String, required: true }
});
// Define a schema for the data
const addProductSchema = new mongoose.Schema({

  productname: { type: String, required: true },
  smalldesc: { type: String, required: true },
  subheading: { type: String, required: true },
  description: { type: String, required: true },
  imageurl: { type: String, required: true }
});
// Define a schema for the data
const addShopSchema = new mongoose.Schema({

  shopname: { type: String, required: true },
  shopemail: { type: String, required: true },
  shopphone: { type: String, required: true },
  shopaddress: { type: String, required: true },
  shopimageurl: { type: String, required: true }
});


// Admin credentials
const adminUsername = 'admin';
const adminPassword = 'admin';

// Middleware to parse JSON data
app.use(express.json());

// Define a model for the data
const Contact = mongoose.model('Contact', contactSchema);
// Define a model for the data
const Feedback = mongoose.model('Feedback', feedbackSchema);
// Define a model for the data
const Product = mongoose.model('Product', addProductSchema);
// Define a model for the data
const Shop = mongoose.model('Shop', addShopSchema);


// Define a route to handle POST requests to add new contact data
app.post('/contact/add-contact', async (req, res) => {
  try {
    // Create a new Contact object with the data from the request body
    const contact = new Contact({

      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      company: req.body.company,
      business: req.body.business,
      message: req.body.message
    });

    // Save the new contact to the database
    await contact.save();

    res.status(201).send('Contact added successfully');
  } catch (err) {
    console.error('Error adding contact:', err);
    res.status(500).send('Error adding contact');
  }
});

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if username and password are correct
  if (username === adminUsername && password === adminPassword) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Define a route to handle POST requests to add new feedback data
app.post('/feedback', async (req, res) => {
  try {
    // Create a new Contact object with the data from the request body
    const feedback = new Feedback({

      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message
    });

    // Save the new contact to the database
    await feedback.save();

    res.status(201).send('Feedback Sent successfully');
  } catch (err) {
    console.error('Error Sending :', err);
    res.status(500).send('Error adding Feedback');
  }
});

// Define a route to handle POST requests to add new product data
app.post('/admin/add-product', async (req, res) => {
  try {
    // Create a new Contact object with the data from the request body
    const product = new Product({

      productname: req.body.productname,
      smalldesc: req.body.smalldesc,
      subheading: req.body.subheading,
      description: req.body.description,
      imageurl: req.body.imageurl
    });

    // Save the new contact to the database
    await product.save();

    res.status(201).send('Product added successfully');
  } catch (err) {
    console.error('Error adding Item:', err);
    res.status(500).send('Error adding Iqwtem');
  }
});

// Define a route to handle POST requests to add new shop data
app.post('/admin/add-shop', async (req, res) => {
  try {
    // Create a new Contact object with the data from the request body
    const shop = new Shop({

      shopname: req.body.shopname,
      shopemail: req.body.shopemail,
      shopphone: req.body.shopphone,
      shopaddress: req.body.shopaddress,
      shopimageurl: req.body.shopimageurl
    });

    // Save the new contact to the database
    await shop.save();

    res.status(201).send('Shop added successfully');
  } catch (err) {
    console.error('Error adding Item:', err);
    res.status(500).send('Error adding Iqwtem');
  }
});

app.delete('/admin/delete-shop/:id', async (req, res) => {
  try {
    const shopId = req.params.id;

    // Find the shop by ID and delete it
    const result = await Shop.findByIdAndDelete(shopId);

    if (result) {
      res.status(200).send('Shop deleted successfully');
    } else {
      res.status(404).send('Shop not found');
    }
  } catch (err) {
    console.error('Error deleting shop:', err);
    res.status(500).send('Error deleting shop');
  }
});




// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
