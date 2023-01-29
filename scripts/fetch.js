const cors = require('cors')

const corsOptions = {
  origin: '*',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '3056affeadmshc9899cc804a35d6p1ee643jsn33a054152372',
    'X-RapidAPI-Host': 'the-legend-of-zelda.p.rapidapi.com',
  },
}

fetch(
  'https://the-legend-of-zelda.p.rapidapi.com/games?limit=10&name=Ocarina',
  options,
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response)
  })
