const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/games')
const app = express()
mongoose.set('strictQuery', true)
mongoose.connect(
  'mongodb+srv://hereyes16:hereyes96@cluster0.wsq3zrz.mongodb.net/Game',
)

app.use(express.static('styling'))
app.set('view engine', 'ejs')

app.use('/games', articleRouter)

app.get('/', (req, res) => {
  res.render('games/index')
})

app.listen(5500, function () {
  console.log('server running')
})
