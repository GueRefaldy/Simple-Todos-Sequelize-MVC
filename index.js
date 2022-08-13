const express = require('express');
const app = express();
const port = 3000;
const TaskController = require('./controllers/taks.controller')

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

app.get('/', TaskController.index);
app.get('/add', TaskController.create);
app.post('/add', TaskController.store);
app.get('/complete/:id', TaskController.complete);
app.get('/uncompleted/:id', TaskController.uncompleted);
app.get('/delete/:id', TaskController.destroy);

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});