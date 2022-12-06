const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
require('express-async-errors');
const morgan = require('morgan');
// const cors = require('cors');
// app.use(cors);


const { dirname } = require('path');
const { fileURLToPath } = require('url');
const path = require('path');


// hello
// db and authenticateUser

// routers
// const authRouter = require( './routes/authRoutes.js';
 const dashboardRouter = require( './routes/dashboardRoutes.js');

// middleware
const {notFoundMiddleware}= require( './middleware/not-found.js');
const {errorHandlerMiddleware} = require( './middleware/error-handler.js');
//const authenticateUser = require( './middleware/auth.js');

if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
}

//const __dirname = dirname(fileURLToPath(const.meta.url));

// only when ready to deploy
//app.use(express.static(path.resolve(__dirname, './client/build')));

app.use(express.json());
// app.use(helmet());
// app.use(xss());
// app.use(mongoSanitize());
// app.use(cookieParser());

app.use('/api/dashboard',dashboardRouter);

// only when ready to deploy
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
// });

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = () => {
    try {
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
