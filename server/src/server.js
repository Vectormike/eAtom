const express = require('express')
const app = express();

//Test
app.get('/api/details', (req, res) => {
    const details = [
        {id: 1, name: "Victor"}    
    ];
res.json(details)
})


const PORT = 5000;
app.listen(PORT, () => (console.log(`Server running on port ${PORT}`)));