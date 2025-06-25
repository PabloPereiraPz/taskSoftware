const tasks = require('./tasks.js');
const users = require('./users.js');
const completeTask = require('./complete-task.js');

module.exports = (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PATCH, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle OPTIONS request for CORS preflight
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    const path = req.url.split('?')[0];
    
    // Route requests to appropriate handlers
    if (path === '/api/tasks') {
        return tasks(req, res);
    } else if (path === '/api/users') {
        return users(req, res);
    } else if (path === '/api/complete-task') {
        return completeTask(req, res);
    } else {
        res.status(404).json({ error: 'Not found' });
    }
};
