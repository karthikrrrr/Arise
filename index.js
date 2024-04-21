const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Use port 3000 unless specified otherwise

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.listen(PORT, () => {
    console.log(Server is running on port ${PORT});
});