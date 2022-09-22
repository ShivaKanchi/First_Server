const express = require('express');
//intialization
const app = express();
app.use(express.json());
const port = 8081;
const todolist = ['Music', 'Play'];

app.get("/todos", (res, req) => {
    res.status(200).send(todolist);
});

app.post("todos", (res, req) => {
    let newtodolist = req.body.item;
    todolist.push(newtodolist);
    res.status(201).send({
        message: `Data ${req.body.item} added`
    });
});

app.delete("/todos", (re, req) => {
    const itemtodelete = req.body.item;
    todolist.find((i, index) => {
        if (i === itemtodelete) {
            todolist.splice(index, 1);
        }
    });
    res.status(200).send({
        message: `Data ${req.body.item} deleted`
    });
})
app.listen(port, () => {
    console.log("Nodejs server started ", port);
});
    //http://localhost:8081