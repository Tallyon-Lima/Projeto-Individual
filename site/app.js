process.env.AMBIENTE_PROCESSO = "desenvolvimento";


var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3333 : 8080;

var app = express();

var indexRouter = require("./src/routes/index")
var batalhaRouter = require("./src/routes/batalha");
var usuarioRouter = require("./src/routes/usuario");
var feedRouter = require("./src/routes/feed");
var seguidorRouter = require("./src/routes/seguidor");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter)
app.use("/batalha", batalhaRouter);
app.use("/usuario", usuarioRouter);
app.use("/feed", feedRouter);
app.use("/seguidor", seguidorRouter);


app.listen(PORTA, function () {
    console.log(`Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://localhost:${PORTA} \n
    Você está rodando sua aplicação em Ambiente de ${process.env.AMBIENTE_PROCESSO} \n
`);
});
