const express = require('express');
const app = express();
app.use(express.json());

const todoArr = [
    { id: 1, title: 'ToDo 1', desc: 'This is todo 1', completed: true },
    { id: 2, title: 'ToDo 2', desc: 'This is todo 2', completed: false },
    { id: 3, title: 'ToDo 3', desc: 'This is todo 3', completed: true },
    { id: 4, title: 'ToDo 4', desc: 'This is todo 4', completed: true },
]
app.get('/todos', (req, res) => {
    res.status(200).json(todoArr);
});
app.get('/todos/:id([0-9]{1})', (req, res) => {
    const todoObj = todoArr.find(todo => todo.id === +req.params.id);
    res.status(200).json(todoObj);
});
app.get('/courses/:coursename/:topicname', (req, res) => {
    res.send(`Course name is ${req.params.coursename} and topic name is ${req.params.topicname}`)
});
app.get('*', (req, res) => {
    res.send('<h1>No page found</h1>')
});
app.listen(5000, () => {
    console.log('server listening on http://localhost:5000')
});