const express = require('express');

const PORT = 3000;
const app = express();

app.use(express.json());

const players = [
  {
    name: "Lionel Messi",
    position: "Forward",
    nationality: "Argentinian"
  },
  {
    name: "Cristiano Ronaldo",
    position: "Forward",
    nationality: "Portuguese"
  },
  {
    name: "Kylian Mbappé",
    position: "Forward",
    nationality: "French"
  },
  {
    name: "Kevin De Bruyne",
    position: "Midfielder",
    nationality: "Belgian"
  },
  {
    name: "Virgil van Dijk",
    position: "Defender",
    nationality: "Dutch"
  },
  {
    name: "Neymar Jr.",
    position: "Forward",
    nationality: "Brazilian"
  },
  {
    name: "Luka Modrić",
    position: "Midfielder",
    nationality: "Croatian"
  },
  {
    name: "Sergio Ramos",
    position: "Defender",
    nationality: "Spanish"
  },
  {
    name: "Robert Lewandowski",
    position: "Forward",
    nationality: "Polish"
  },
  {
    name: "Manuel Neuer",
    position: "Goalkeeper",
    nationality: "German"
  }
];

app.get('/', (req, res) => res.send('<h1>Hello, This is My First Test With Express</h1>'));

app.get('/docker', (req, res) => res.send('<h1>Hello, This is My First Test With Docker</h1>'));

app.get('/players', (req, res) => res.json(players));

app.post('/create', (req, res) => {
  const newPlayer = req.body;
  players.push(newPlayer);
  console.log(newPlayer);
  res.status(201).send('Player created');
});



app.listen(PORT, () => console.log(`App is running on http://localhost:${PORT}`));
