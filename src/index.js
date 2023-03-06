const express = require('express')
const path = require('path')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const session = require('express-session')
const flash = require('connect-flash')
const MongoStore = require('connect-mongo')
const mongoose = require('mongoose')

require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

// Shopping Cart
app.use(session({
    secret: 'mysupersecret',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: 'mongodb+srv://admin:XMnuIU05kyjV2x7r@e-commerce.asumm.mongodb.net/e_commerce?retryWrites=true&w=majority'
     }), 
    cookie: { maxAge: 180 * 60 * 1000 }
}))

// Pass session
app.use(function(req, res, next) {
    res.locals.session = req.session;
    next();
})

// Connect to DB
const db = require('./config/db');
db.connect();

// Route init
const route = require('./routes')
route(app);

// Static public file
app.use(express.static(path.join(__dirname, 'public')));

// Template engine
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// HTTP Logger
app.use(morgan('dev'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})