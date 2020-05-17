const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const PORT = process.env.PORT || 8080;
const app = express();

// REQUIRE STATIC ASSETS FROM PUBLIC FOLDER
app.use(express.static(path.join(__dirname, "public")));


// DATA THAT CAN BE USED IN REQ.BODY
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// SET VIEWS DIR FOR ANY VIEWS
app.set('views', path.join(__dirname, './burger/views'));

// SET VIEW ENGINE AS HANDLEBARS
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// REQUIRING ROUTES FROM BURGERS_CONTROLLER
var routes = require("../Eat-DaBurger/burger/controllers/burgers_controller");
app.use(routes);


// TELLING APP TO WORK ON PORT 8080
app.listen(PORT, function(){
    console.log("Server listening on PORT: " + PORT);
});