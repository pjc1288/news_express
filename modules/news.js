const fetch = require('node-fetch');
const API_KEY = '74412956b05c4a4e95232edaa1efb460';

//Home
exports.getHome = (req, res) => {
    res.render('index',{
        name:"noticias PUG",
        desc:"Bienvenido a la página de perritos"})
  }


//Politica

exports.getPolitica = (req, res) => {
//Consultat API de noticias
fetch(`http://newsapi.org/v2/everything?q=bitcoin&from=2020-12-15&sortBy=publishedAt&apiKey=${API_KEY}`)
.then(news => news.json())
.then(news => {
    console.log(news.articles[0]);
    console.log(news.articles[0].title);
    console.log(news.articles[0].content);
    res.render('politica', {titulo:news.articles[0].title, contenido:news.articles[0].content
    })
})
.catch(e => console.log(e))
}

//Deportes

exports.getDeportes = (req, res) => {

    console.log(req.params.seccion); //Parametro de seccion
    console.log(req.params);
  
    //Con seccion +ID --> 
  
    if(req.params.seccion && req.params.id){
      //Futbol, Baloncesto u otros
      console.log(`seccion: ${req.params.seccion} noticia ${req.params.id}`);
      let msj = `Te renderizo la seccion: ${req.params.seccion} y la noticia ${req.params.id}`;
      res.render('deportes',{message:msj})
    }
    //Con seccion. 
    else if (req.params.seccion){
        let msj = `Te renderizo la seccion: ${req.params.seccion}`
        res.render('deportes',{message:msj});
  
    } else{
      // Deportes
      let msj = 'Te renderizo la pagina de deportes';
      res.render('deportes',{message:msj})
  
    }
  }