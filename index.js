//=========
// BASIC CONFIG
//=============
const express = require('express');
const cors = require('cors')
const app = express()
require('./db/connection')
const PORT = process.env.PORT
app.set('port', process.env.PORT || 8000 )

//=========
//MIDDLEWARE
//=========
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())


//===========
//ROUTES
//===========
app.get('/', (req, res) => {
    res.redirect('/quotes')
})

//============
//CONTROLLERS
//============
// const quoteController = ('./controllers/quoteController.js')
// app.use('/quotes', quoteController)

// const movieController = ('./controllers/movieController.js')
// app.use('/movies', movieController)

// const characterController = ('./controllers/characterController.js')
// app.use('/characters', characterController)

//==============
//SERVER START 
//===============
app.use((err, req, res, next) => {
    const statusecode = res.statusCode || 500
    const message = err.message || 'Internal Server Error'
    res.status(statusecode).send(message)
})

app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🐉🌟`)
})