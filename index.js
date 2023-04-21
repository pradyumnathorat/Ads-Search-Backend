const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config()
app.use(cors());
app.use(express.json());
const postRoutes = require('./routes/post');

app.use("/post" , postRoutes)

const port = process.env.PORT || 8080;
mongoose.connect(process.env.CONNECTION_URL)
    .then(() => {
        app.listen(port, () => {
            console.log(`server is up on port ${port}`);
        })
    }).catch((err) => {
        console.log(err.message);
    })


