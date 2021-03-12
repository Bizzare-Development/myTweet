//Setup express
const express = require('express');
const loginRoutes = require('./routes/loginRoutes');
const middleware = require('./middleware');
const path = require('path');

const app = express();
const port = 3000;

//Listen to port
const server = app.listen(port, () => {
    console.log("Server listening on port " + port);
})

//Set our template to pug
app.set('view engine', 'pug');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/login", loginRoutes);

app.get("/", middleware.requireLogin, (req, res, next) => {
    
    const payload  ={
        pageTitle: "Home"
    }

    res.status(200).render("home", payload);
})