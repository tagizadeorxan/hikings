const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const dataRoute = require('./routes/data');

const bodyParser = require('body-parser');
dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
app.use('/api/data', dataRoute);


app.listen(8080, () => {
    console.log("running on port 3000")
})
