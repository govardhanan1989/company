const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://127.0.0.1:27017/MernStack')
.then(() => {
    console.log  ('database has been connected')
})
.catch(() => {
    console.log('not connected');
}

)