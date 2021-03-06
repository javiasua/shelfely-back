const express = require('express')
const app = express()
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
require("dotenv").config();
var path = require('path');
const fileUpload = require('express-fileupload')



//ensure database is connected
require('./config/database.config')


const cors = require('cors')
app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000']
}))


let MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/Shelfely'
app.use(
  session({
    secret: 'my-secret-weapon',
    saveUninitialized: true,
    resave: true,
    cookie: {
      maxAge: 60 * 60 * 24 * 1000, //60 sec * 60 min * 24hrs = 1 day (in milliseconds)
    },
    store: new MongoStore({
      url: MONGODB_URI,
      // mongooseConnection: mongoose.connection
      //time to live (in seconds)
      ttl: 60 * 60 * 24,
      autoRemove: 'disabled',
    }),
  })
);



const logger = require('morgan');
app.use(logger('dev'));

const cookieParser = require('cookie-parser');
app.use(cookieParser());

//Use body parser. To be able parse post request information
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()) //crucial for post requests from client
//app.use(fileUpload())

app.use(express.static(path.join(__dirname, 'public')));


//Register routes
const BooksRoutes = require('./routes/books.routes');
app.use('/api', BooksRoutes);
const authRoutes = require('./routes/auth.routes')
app.use('/api', authRoutes);
const fileUploads = require('./routes/file-upload.routes')
app.use('/api',fileUploads)

app.use((req, res, next) => {
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(process.env.PORT || 5000, '0.0.0.0', () => {
    console.log('Server is running')
})

