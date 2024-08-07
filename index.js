import express from 'express';

// Do not have to call the config() function
// this is still the same as doing that
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 6969;

app.use(express.static('./Static'));

app.use('/test', (req, res) => {
    res.send('<h1>HEELLLO</h1>')
});

app.listen(PORT, console.log(`Live on port: http://localhost:${PORT}`))