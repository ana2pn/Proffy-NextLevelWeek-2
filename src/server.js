
//Servidor
const express = require('express');
const server = express();

const { 
        pageLanding,
        pageStudy,
        pageGiveClasses,
        saveClasses
      } = require('./pages')

//Configurar nunjuncks(template engine)
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server

.use(express.urlencoded({ extended:true }))

//Configura arquivos estáticos e inicializa o servior
.use(express.static("public"))


//Rotas da aplicação
.get('/', pageLanding)
.get('/study', pageStudy)
.get('/give-classes', pageGiveClasses)
.post('/save-classes', saveClasses)
.listen(5500);