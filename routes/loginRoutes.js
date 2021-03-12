//Setup express
const express = require('express');
const app = express();
const router = express.Router();

//Set our template to pug
app.set('view engine', 'pug');
app.set('views', 'views');

//Router
router.get("/", (req, res, next) => {

    const payload  ={
        pageTitle: "Login"
    }

    res.status(200).render("login", payload);
})

module.exports = router;