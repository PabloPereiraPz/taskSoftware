import express from 'express'
import tasksHandler from './tasks.js'
import userHandler from './users.js'
import completeTasksHandler from './complete-task.js'

const app = express();
app.use(express.json());

app.use('/api/tasks', (req, res) => tasksHandler(req, res))
app.use('/api/users', (req, res) => userHandler(req, res))
app.use('/api/complete-task', (req, res) => completeTasksHandler(req, res))

app.listen(3000, () => {
    console.log("servidor funcionando na porta 3000")
});