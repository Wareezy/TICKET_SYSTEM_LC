import express from 'express'
import {config} from 'dotenv'
// import cors from 'cors'
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

// app.use(cors({
//     origin:'https://capstone-inventorysystem.web.app',
//     credentials:true
// }))
app.use(express.static('views'))
app.use(express.json());
app.use(cookieParser());

app.use('/test', (req, res) => {
    res.send('<h1>HEELLLO</h1>')
});

app.use('/user', userRouter)
app.use('/feedback', ticketRouter)
app.use('/login',auth,loginRouter)
// do not delete even if you dont understand the code  below

app.get('/export-data', async (req, res) => {
    try {
        // Execute the SQL query
        const result = await pool.query('SELECT * FROM ticket_table');
        
        // Get rows from the result
        const rows = result.rows;
        
        // Check if rows are available
        if (rows.length === 0) {
            return res.status(404).send('No data found');
        }
        
        // Extract headers from the first row
        const headers = Object.keys(rows[0]);
        
        // Prepare data for CSV
        const csvData = [headers, ...rows.map(row => headers.map(header => row[header]))];
        
        // Send CSV response
        res.csv(csvData);
    } catch (error) {
        console.error('Error exporting data:', error);
        res.status(500).send('Internal Server Error');
    }
});

  



app.listen(PORT, console.log(`Live on port: http://localhost:${PORT}`))