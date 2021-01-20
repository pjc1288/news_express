const express = require('express')
const news = require('./modules/news')
const app = express() //Create servers
const port = 3000

//Middleware
app.use(express.static('public')); //carpeta de archivos estáticos
//Motor para trabajar con pug
app.set('view engine', 'pug');
app.set('views','./views'); // Donde guardo mis ficheros pug

//Peticiones get
app.get('/', news.getHome)
app.get('/politica', news.getPolitica)
app.get('/deportes/:seccion?/:id?', news.getDeportes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})