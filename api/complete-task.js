import { tasks } from './tasks.js';

export default function handler(req, res) {
    if (req.method === 'PATCH') {
        const { id } = req.body;
        if (!id) {
            return res.status(400).json({ error: 'id é obrigatório' });
        }
        let updated = false;
        tasks.forEach((task, idx) => {
            if (task.id === id) {
                tasks[idx] = { ...task, completed: true };
                updated = true;
            }
        });
        if (!updated) {
            return res.status(404).json({ error: 'Tarefa não encontrada' });
        }
        return res.status(200).json({ id, completed: true });
    } else {
        res.status(405).end();
    }
}