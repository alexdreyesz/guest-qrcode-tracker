const mongoose = require('mongoose');
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

const updateScannedCondition = async (req, res) => {
  try {
    const { userID } = req.params;
    const { subEventId } = req.body;

    if (!mongoose.Types.ObjectId.isValid(subEventId)) {
      return res.status(400).json({ error: "Invalid subEventId format" });
    }

    const userEvent = await UserEvent.findOne({ userID });

    if (!userEvent) {
      return res.status(404).json({ error: "User not found" });
    }

    let updated = false;
    let toggledEvent = null;

    for (let i = 0; i < userEvent.events.length; i++) {
      const group = userEvent.events[i];
      const subEvent = group.event.id(subEventId);

      if (subEvent) {
        console.log("Before toggle:", subEvent.scanned);
        subEvent.scanned = !subEvent.scanned;
        console.log("After toggle:", subEvent.scanned);

        userEvent.markModified(`events.${i}.event`);
        updated = true;
        toggledEvent = subEvent;
        break;
      }
    }

    if (!updated) {
      return res.status(404).json({ error: "Sub-event not found by ID" });
    }

    try {
      await userEvent.save();
    } catch (e) {
      return res.status(500).json({ error: "Save failed", details: e.message });
    }

    res.status(200).json({
      message: "Scanned status toggled successfully",
      updated: toggledEvent
    });

  } catch (err) {
    console.error("Toggle error:", err);
    res.status(500).json({ error: "Failed to update scanned status", err: err.message });
  }
};

module.exports = { createUserEvent, getUserEvent, updateScannedCondition };