const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));

app.use(express.json())
app.listen(3000, () => console.log("server started"));