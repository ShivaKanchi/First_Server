const express = require('express');
//intialization
const app = express();
app.use(express.json());
const port = 8081;
const todolist = ['Music', 'Play'];

app.get("/todos", (req, res) => {
    res.status(200).send(todolist);
});

app.post("/todos", (req, res) => {
    let newtodolist = req.body.item;
    todolist.push(newtodolist);
    res.status(201).send({
        message: `Data ${req.body.item} added`
    });
});

app.delete("/todos", (req, res) => {
    const itemtodelete = req.body.item;
    todolist.find((i, index) => {
        if (i === itemtodelete) {
            todolist.splice(index, 1);
        }
    });
    res.status(202).send({
        message: `Data - ${req.body.item} deleted`
    });
});

app.all("/todos", (req, res) => {
    res.status(500).send({});
})
app.all("*", (req, res) => {
    res.status(500).send({});
})
app.listen(port, () => {
    console.log("Nodejs server started ", port);
});
    //http://localhost:8081