const e = require('express')
const express = require('express')
const express_hbs = require('express-handlebars')
const userData = require('./users.json')

const app = express()
const PORT = 3000

//set handlebars & bodyParser
app.engine('handlebars', express_hbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.urlencoded({ extended: true }))

//home page
app.get('/', (req, res) => {
  res.render('index')
})

//login page run dev

app.post('/', (req, res) => {
  const { email, password } = req.body

  const userInfo = userData.find(user => user.email === email)

  if (!userInfo) {
    return res.render('index', { email, userInfo: !userInfo })
  } else {
    const passwordInfo = userInfo.password === password
    if (!passwordInfo) {
      return res.render('index', { email, passwordInfo: !passwordInfo })
    }
    res.redirect('/' + userInfo.firstName)
  }
})

app.get('/:firstName', (req, res) => {
  const firstName = req.params.firstName
  res.render('welcome', { firstName })
})

app.listen(PORT, (req, res) => {
  console.log(`App is listen on http://localhost:${PORT}`)
})