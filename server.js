const express = require('express');
const app = express();
const htmlRoutes = require("./routes/htmlRoutes")
const apiRoutes = require("./routes/apiRoutes")
const PORT = process.env.PORT || 3001

// parse incoming string or array data
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

app.use("/api", apiRoutes)
app.use("/", htmlRoutes)

app.use(express.static('public'));


app.listen(PORT, () => {
    console.log(`API server now on port 3001!`);
  });