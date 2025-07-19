import type React from "react";
import type { UserEventsProp } from "../interfaces/userEvents";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export async function createUserEvents(userID: string, name: string) {
    try {
        const response = await fetch(`${baseUrl}/api/userevents/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userID, name }),
        });

        if (response.status === 409) {
            return;
        }

        if (!response.ok) {
            throw new Error("Failed to create user events");
        }

        const data = await response.json();
        console.log("User events created successfully:", data);
        return data;
    } catch (err) {
        console.error("Error creating user events:", err);
    }
}

export async function getUserEvents(
    userID: string,
    setUserEvents: React.Dispatch<React.SetStateAction<UserEventsProp | null>>
) {
    try {
        const response = await fetch(`${baseUrl}/api/userevents/${userID}`);

        if(!response.ok) {
            console.log("Failed to fetch user events");
            return;
        }

        const events = await response.json();
        
        setUserEvents?.(events);
    } catch (err) {
        console.log("Error fetching user events:", err);   
    }
}

export async function updateScannedCondition(
    userID: string, 
    subEventId: string
) {
  try {
    const response = await fetch(`${baseUrl}/api/userevents/${userID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ subEventId }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Failed to toggle scanned');
    }

    console.log('Toggle successful:', result);
    return result;
  } catch (err) {
    console.error('Toggle failed:', err);
    throw err;
  }
}
