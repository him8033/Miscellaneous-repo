let express = require("express");
let app = express();
let port = 3000;

//      express.urlencoded is used for encoding data to readable form data
app.use(express.urlencoded({extended:true}));

//      express.json is used for json data to readable form data
app.use(express.json());

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

app.get("/register", (req, res) => {
    let { username, password } = req.query;
    res.send(`Standart GET Request Welcome:${username}`);
    console.log(`GET Request ${username} ${password}`);
})

app.post("/register", (req, res) => {
    let { username, password } = req.body;
    res.send(`Standart POST Request Welcome:${username}`);
    console.log(`GET Request ${username} ${password}`);
    console.log(req.body);
})