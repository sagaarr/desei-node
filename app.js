const bodyParser = require("body-parser");
const express = require("express");
const methodOverride = require('method-override');
var app = express();

//APP CONFIG .......
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

//MONGOOSE MODEL CONFIG.........



// RESTFUL ROUTES................


app.get("/", function (req, res) {
    res.render("index.ejs");
});



const PORT = process.env.PORT || 3000
app.listen(PORT, function () {
    console.log("SERVER IS RUNNING!!!!!!!!!!!!!!!!!!");
})