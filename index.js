import express from 'express';
import cookieParser from 'cookie-parser';
import { csv } from 'express-csv';
import { pool } from "../Config/config.js";
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