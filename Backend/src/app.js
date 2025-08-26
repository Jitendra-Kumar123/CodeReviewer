const express = require("express");
const app = express();
const aiRoutes = require("./routes/ai.routes");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())

app.get("/", function(req, res){
    res.send("hey");
})

app.use("/ai", aiRoutes);

module.exports = app