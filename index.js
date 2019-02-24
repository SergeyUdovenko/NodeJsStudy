const app = require('./app.js');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const passport = require('passport')

const {queryParsingMiddleware} = require('./middlewares');

const routers = require('./routes');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(queryParsingMiddleware);
app.use(passport.initialize());


app.use('/', routers);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`App listening on port ${port}`))