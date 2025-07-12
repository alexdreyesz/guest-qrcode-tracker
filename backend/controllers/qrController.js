const QRUser = require('../models/QRUser');

const createUser = async (req, res) => {
    try {
        const { id, name, country, university, package: pkg, qrid } = req.body;

        const user = new QRUser({
            id,
            name,
            country,
            university,
            package: pkg,
            qrid
        });

        const savedUser = await user.save();
        res.status(201).json(savedUser);

    } catch (err) {
        console.error(err); 

        if (err.code === 11000) {
            res.status(400).json({ error: 'User with same ID or QRID already exists', err });
        } else {
            res.status(500).json({ error: 'Failed to create user', err });
        }
    }
};

const getAllUsers = async (req, res) => {
    try{
        const users = await QRUser.find();
        res.json(users);
    } catch(err) {
        res.status(500).json({error: 'Failed to fetch users'});
    }
};

const getUserByQRID = async (req, res) => {
    try {
        const { qrid } = req.params;
        const user = await QRUser.findOne({ qrid });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user' });
    }
};

module.exports = { createUser, getAllUsers, getUserByQRID };