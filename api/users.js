const users = require('./users.data.js');

module.exports = (req, res) => {
    if (req.method === 'GET') {
        res.status(200).json(users);
    } else {
        res.status(405).end();
    }
};