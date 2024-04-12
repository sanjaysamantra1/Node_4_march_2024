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
app.get('/todos/:id', (req, res) => {
    const todoObj = todoArr.find(todo => todo.id === +req.params.id);
    res.status(200).json(todoObj);
});
app.post('/todos', (req, res) => {
    todoArr.push(req.body);
    res.status(201).send('To do added successfully!!')
});
app.put('/todos/:id', (req, res) => {
    const todoObj = todoArr.find(todo => todo.id === +req.params.id);
    if (todoObj) {
        const { id, title, desc, completed } = req.body;
        todoObj.id = id;
        todoObj.title = title;
        todoObj.desc = desc;
        todoObj.completed = completed;
        res.status(200).json({ msg: 'Updated Successfully!!' })
    } else {
        res.status(404).json({ msg: 'To Do Not found' })
    }
});
app.patch('/todos/:id', (req, res) => {
    let todoObj = todoArr.find(todo => todo.id === +req.params.id);
    if (todoObj) {
        const allKeys = Object.keys(req.body);
        for (key of allKeys) {
            todoObj[key] = req.body[key];
        }
        res.status(200).json({ msg: 'Updated Successfully!!' })
    } else {
        res.status(404).json({ msg: 'To Do Not found' })
    }
});
app.delete('/todos/:id', (req, res) => {
    let todoIndex = todoArr.findIndex(todo => todo.id === +req.params.id);
    if (todoIndex) {
        todoArr.splice(todoIndex, 1);
        res.status(200).json({ msg: 'Deleted Successfully!!' })
    } else {
        res.status(404).json({ msg: 'To Do Not found' })
    }
});
app.listen(5000, () => {
    console.log('server listening on http://localhost:5000')
});