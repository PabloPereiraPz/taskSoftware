const tasks = require('./tasks.data.js');

module.exports = (req, res) => {
    if (req.method === 'GET') {
        const { userId } = req.query;
        if (!userId) {
            return res.status(400).json({ error: "UserId obrigatório" });
        }
        const userTasks = tasks.filter(task => task.userId === userId);
        return res.status(200).json(userTasks);
    } else if (req.method === 'POST') {
        const newTask = req.body;
        if (!newTask.userId) {
            return res.status(400).json({ error: 'userId é obrigatório' });
        }
        const task = {
            ...newTask,
            id: Date.now().toString(),
            completed: false
        };
        tasks.push(task);
        res.status(201).json(task);
    } else if (req.method === 'DELETE') {
        const id = req.url.split('/').pop();
        if (!id) {
            return res.status(400).json({ error: 'Task ID is required' });
        }
        const idx = tasks.findIndex(task => task.id === id);
        if (idx !== -1) tasks.splice(idx, 1);
        res.status(200).json({ id });
    } else if (req.method === 'PATCH') {
        const { id } = req.body;
        const idx = tasks.findIndex(task => task.id === id);
        if (idx !== -1) tasks[idx].completed = true;
        res.status(200).json({ id, completed: true });
    } else {
        res.status(405).end();
    }
};