let tasks = [];

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(tasks);
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
        const { id } = req.body;
        tasks = tasks.filter(task => task.id !== id);
        res.status(200).json({ id });
    } else if (req.method === 'PATCH') {
        const { id } = req.body;
        tasks = tasks.map(task => task.id === id ? { ...task, completed: true } : task);
        res.status(200).json({ id, completed: true });
    } else {
        res.status(405).end();
    }
}