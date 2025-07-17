const UserEvent = require('../models/UserEvents');

const createUserEvent = async (req, res) => {
    try {
        const { userID } = req.body;

        const events = [
            {
                userID,
                events: [
                    {
                        date: "2025-08-04",
                        event: [
                            { name: "Cena de Bienvenida", scanned: false }
                        ]
                    },
                    {
                        date: "2025-08-05",
                        event: [
                            { name: "Almuerzo", scanned: false },
                            { name: "Cena", scanned: false }
                        ]
                    },
                    {
                        date: "2025-08-06",
                        event: [
                            { name: "Almuerzo", scanned: false },
                            { name: "Cena", scanned: false }
                        ]
                    },
                    {
                        date: "2025-08-07",
                        event: [
                            { name: "Almuerzo", scanned: false },
                            { name: "Cena", scanned: false }
                        ]
                    },
                    {
                        date: "2025-08-08",
                        event: [
                            { name: "Almuerzo Cientifico", scanned: false },
                            { name: "Cena de Gala", scanned: false }
                        ]
                    }
                ]
            }
        ];

        const savedEvents = await UserEvent.insertMany(events);

        res.status(201).json({ message: 'User events created successfully', savedEvents });
    } catch (err) {
        console.error('Error creating User Events:', err);

        if (err.code === 11000) {
            res.status(400).json({ error: 'Duplicate user event for the same day/user.', err }); 
        } else {
            res.status(500).json({ error: 'Failed to create user events', err , userID});
        }
    }
};

module.exports = { createUserEvent };