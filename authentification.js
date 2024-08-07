const express = require('express');
const bcrypt = require('bcrypt');

const PORT = 4000;
const app = express();

const users = [
];

app.use(express.json());

app.get('/', (req, res) => res.send('<h1>Hello, This is My First Test With Express</h1>'));
app.listen(PORT, () => console.log(`App is running on http://localhost:${PORT}`));

app.post('/register', async (req, res) => {
  try {
    const newUser = req.body;
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);
    newUser.id = (users.length + 1).toString();
    users.push(newUser);
    res.status(201).send("Created");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const findUser = users.find((data) => email === data.email);
  if (!findUser) {
    return res.status(400).send("Wrong Email or Password");
  }
  const passwordMatch = await bcrypt.compare(password, findUser.password);
  if (passwordMatch) {
    res.status(200).send("Login Successfully");
  } else {
    res.status(400).send("Wrong Email or Password");
  }
});

app.get('/users', (req, res) => res.json(users));
