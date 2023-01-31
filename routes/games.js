const epxress = require('express')
const router = epxress.Router()

router.get('/new', (req, res) => {
  res.render('/views/games/addgame.ejs')
  //res.render('games/addgame')
})

module.exports = router
