const UserEvent = require('../models/UserEvents');

const createUserEvent = async (req, res) => {
    try {
        const { userID, name } = req.body;

        const existingEvent = await UserEvent.findOne({ userID });

        if(existingEvent) {
            return res.status(409).json({ message: "Event Already exist for this user" });
        }

        const events = [
            {
                userID,
                name,
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

const getUserEvent = async(req, res) => {
    try {
        const { userID } = req.params;

        const userEvent = await UserEvent.findOne({ userID });

        if(!userEvent) {
            return res.status(404).json({ error: 'Failed to fetch user'});
        }
        
        res.status(200).json(userEvent);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch user', err});
    }
}

module.exports = { createUserEvent, getUserEvent };