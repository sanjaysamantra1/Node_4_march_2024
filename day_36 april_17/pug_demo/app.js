const express = require('express');
const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    // home.pug
    res.render('home')
});
app.get('/users', (req, res) => {
    // users.pug
    let users = ['Srinivas', 'Akshay', 'Deepak', 'Manjusha', 'Yeshwant']
    res.render('users', { users })
});

app.listen(5000, () => {
    console.log('server listening on http://localhost:5000')
});