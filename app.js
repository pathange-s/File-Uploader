// Dependencies required
const express = require('express')
const app = express();
const path = require('path');

// configs


// List of Routers
const uploadRouter = require('./routes/upload');
const indexRouter = require('./routes/index');




// API calls
app.get('/', indexRouter);
app.get('/upload', uploadRouter);
app.post('/upload', uploadRouter)



// app.get('/admin',adminRouter);
// app.post('/checkin',checkinRouter);

app.listen(3000);