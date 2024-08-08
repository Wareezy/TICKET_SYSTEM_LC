import express from 'express';
import cookieParser from 'cookie-parser';
// Do not have to call the config() function
// this is still the same as doing that
import 'dotenv/config';
import UserRouter from './Routes/UserRoute.js'
import FeedbackCon from './Routes/FeedbackRoute.js';

const app = express();
const PORT = process.env.PORT || 6969;

app.use(express.static('./Static'));
app.use(express.json());
app.use(cookieParser());

app.use('/test', (req, res) => {
    res.send('<h1>HEELLLO</h1>')
});

app.use('/users', UserRouter)
app.use('/feedback', FeedbackCon)

app.listen(PORT, console.log(`Live on port: http://localhost:${PORT}`))