const express = require('express')
const { parse } = require('path')
const app = express()

const port = 5000

const games = [
  {
    name: 'The Legend of Zelda',
    year: 1986,
    console: ['NES', 'GBA'],
    developer: 'nintendo',
  },
  {
    name: 'The Adventure of Link',
    year: 1987,
    console: ['NES', 'GBA'],
    developer: 'nintendo',
  },
  {
    name: 'A Link to the Past',
    year: 1991,
    console: ['SNES', 'GBA'],
    developer: 'nintendo',
  },
  {
    name: 'Link Awakening',
    year: 1993,
    console: ['GB', 'SNES', 'GBA'],
    developer: 'nintendo',
  },
  {
    name: 'Ocarina of Time',
    year: 1998,
    console: ['N64', 'GBC', 'NS'],
    developer: 'nintendo',
  },
  {
    name: 'Majoras Mask',
    year: 2000,
    console: ['N64', '3DS'],
    developer: 'nintendo',
  },
  {
    name: 'Oracle of Seasons and Ages',
    year: 2001,
    console: ['GB-C', 'GBA'],
    developer: 'nintendo',
  },
  {
    name: 'Four Swords',
    year: 2002,
    console: ['SNES', 'GBA'],
    developer: 'nintendo',
  },
  {
    name: 'The Wind Waker',
    year: 2002,
    console: ['GC', 'Wii U'],
    developer: 'nintendo',
  },
  {
    name: 'Four Swords Adventure',
    year: 2004,
    console: ['GC'],
    developer: 'nintendo',
  },
  {
    name: 'The Minish Cap',
    year: 2004,
    console: ['GBA'],
    developer: 'nintendo',
  },
  {
    name: 'Twilight Princess',
    year: 2006,
    console: ['GC', 'Wii', 'Wii U'],
    developer: 'nintendo',
  },
  {
    name: 'Phantom Hourglass',
    year: 2007,
    console: ['NDS'],
    developer: 'nintendo',
  },
  {
    name: 'Spirit Tracks',
    year: 2009,
    console: ['NDS'],
    developer: 'nintendo',
  },
  {
    name: 'Skyward Sword',
    year: 2011,
    console: ['Wii', 'NS'],
    developer: 'nintendo',
  },
  {
    name: 'A Link Between Worlds',
    year: 2013,
    console: ['N3DS'],
    developer: 'nintendo',
  },
  {
    name: 'Tri Force Heroes',
    year: 2016,
    console: ['N3DS'],
    developer: 'nintendo',
  },
  {
    name: 'Breath of the Wild',
    year: 2017,
    console: ['NS'],
    developer: 'nintendo',
  },
]

app.get('/', (req, res) => {
  res.json(games)
})

app.get('/games/:id', (req, res) => {
  res.json(games[parseInt(req.params.id) - 1])
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
