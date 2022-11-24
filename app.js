const express = require('express')
const express_hbs = require('express-handlebars')
require('./config/mongoose')

const app = express()
const PORT = 3000

//set handlebars
app.engine('handlebars',express_hbs.engine({defaultLayout:'main'}))
app.set('view engine','handlebars')

app.get('/',(req,res)=>{
  res.render('index')
})

app.listen(PORT,(req,res)=>{
  console.log(`App is listen on http://localhost:${PORT}`)
})