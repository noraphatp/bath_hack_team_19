const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
app.use(cors());
app.use(express.json());

// Replace the connection string with your own MongoDB connection string
const connectionString = 'mongodb://localhost:27017/myDatabase';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);


app.post('/register', async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10); // Hash the password with a salt round of 10
  
      const newUser = new User({
        username: req.body.username,
        password: hashedPassword, // Store the hashed password instead of the plain text password
      });
  
      const savedUser = await newUser.save();
      res.status(201).send(savedUser);
    } catch (error) {
      res.status(500).send({ message: 'Error registering user', error });
    }
  });

app.get('/users', async (req, res) => {
    try {
      const users = await User.find({});
      res.status(200).send(users);
    } catch (error) {
      res.status(500).send({ message: 'Error fetching users', error });
    }
  });



app.post('/login', async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      if (!user) {
        return res.status(400).send({ message: 'Invalid username or password' });
      }
  
      const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
      if (isPasswordValid) {
        res.status(200).send(user);
      } else {
        res.status(400).send({ message: 'Invalid username or password' });
      }
    } catch (error) {
      res.status(500).send({ message: 'Error logging in', error });
    }
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
