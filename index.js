const express = require('express');
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(express.json());

require('./config/database').connect();

const user = require("./routes/user");
app.use('/api/v1', user);

app.listen(PORT, () => {
    console.log("server is running at", PORT);
})

app.get("/", (req, res) => {
    res.send("<h1>Auth App</h1>")
});