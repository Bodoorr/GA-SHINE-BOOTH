const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const path = require('path')
const imageRoutes = require('./routes/imageRoutes')

const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/upload', imageRoutes)

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.listen(port, () => {
  console.log(`The express app is ready on port ${port}!`)
})
