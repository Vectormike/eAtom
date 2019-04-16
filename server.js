const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json());

//Test
app.get('/api/details', (req, res) => {
    const details = [
        {id: 1, name: "Victor"}    
    ];
res.json(details)
})


const PORT = 5000;
app.listen(PORT, () => (console.log(`Server running on port ${PORT}`)));