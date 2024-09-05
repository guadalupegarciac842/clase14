const express= require ('express');
const app = express();
const path = require ('path');
const PORT = 3000;

app.listen(PORT, () => console.log (`Server running in http://localhost:${PORT}`));

app.get ('/', (req,res) => {
    return res.sendFile(path.join(__dirname,'views','home.html'));
} )

app.use(express.static(path.join(__dirname, 'public')));
