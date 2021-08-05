const express = require('express');
const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {

    console.log("redirect to upload route");
    
    res.redirect(`/upload`);
});

module.exports = indexRouter;