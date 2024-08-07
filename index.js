const express = require('express');
const bcrypt = require('bcrypt');

const PORT = 3000;
const app = express();

app.use(express.json());

const players = [
  {
    id: 1,
    name: "Lionel Messi",
    position: "Forward",
    nationality: "Argentinian"
  },
  {
    id: 2,
    name: "Cristiano Ronaldo",
    position: "Forward",
    nationality: "Portuguese"
  },
  {
    id: 3,
    name: "Kylian Mbappé",
    position: "Forward",
    nationality: "French"
  },
  {
    id: 4,
    name: "Kevin De Bruyne",
    position: "Midfielder",
    nationality: "Belgian"
  },
  {
    id: 5,
    name: "Virgil van Dijk",
    position: "Defender",
    nationality: "Dutch"
  },
  {
    id: 6,
    name: "Neymar Jr.",
    position: "Forward",
    nationality: "Brazilian"
  },
  {
    id: 7,
    name: "Luka Modrić",
    position: "Midfielder",
    nationality: "Croatian"
  },
  {
    id: 8,
    name: "Sergio Ramos",
    position: "Defender",
    nationality: "Spanish"
  },
  {
    id: 9,
    name: "Robert Lewandowski",
    position: "Forward",
    nationality: "Polish"
  },
  {
    id: 10,
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
  newPlayer.id = players.length + 1;
  players.push(newPlayer);
  console.log(newPlayer);
  res.status(201).send('Player created');
});

app.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  const findUserByIndex = players.findIndex(x => x.id === parseInt(id, 10));
  if (findUserByIndex === -1) {
    res.status(404).send("Player Not Found");
    return;
  }
  players.splice(findUserByIndex, 1);
  res.send("Deleted");
});

app.listen(PORT, () => console.log(`App is running on http://localhost:${PORT}`));
