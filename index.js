import express from 'express'
import {config} from 'dotenv'
import cors from 'cors'
// import { authenticate } from './middleware/authenticate.js'
// import { errorHandling } from './middleware/errorHandling.js'
// import loginRouter from './routes/login.js'
import { auth } from './middleware/authenticate.js'
import ticketRouter from './Routes/FeedbackRoute.js'
import userRouter from './Routes/UserRoute.js'
import loginRouter from './Routes/login.js'
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'
import FeedbackCon from './Controller/FeedbackCon.js'
config()
const app = express();
const PORT = process.env.PORT || 6969;

 app.use(cors({
    origin:'http://localhost:8080',
     credentials:true
 }))
app.use(express.static('views'))
app.use(express.json());
app.use(cookieParser());

app.use('/test', (req, res) => {
    res.send('<h1>HEELLLO</h1>')
});

app.use('/user', userRouter)
app.use('/feedback', ticketRouter)
app.use('/login',auth,loginRouter)


app.delete('/logout', (req, res) => {
    // Clear the 'jwt' cookie
    res.clearCookie('token');
    
    res.send({
      msg: 'You have been logged out'
    });
  });


app.listen(PORT, console.log(`Live on port: http://localhost:${PORT}`))