import type { UserProp } from "../interfaces";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

// Get User by Name
export async function getUserBySearchName(
    name: string,
    setUserList: React.Dispatch<React.SetStateAction<UserProp[]>>
) {
    console.log("Fetching user data for:", name);
    try {
        const response = await fetch(`${baseUrl}/search?name=${name}`);

        if (!response.ok) {
            if (response.status === 401) {
                throw new Error("Unauthorized. Please log in.");
            } else if (response.status === 404) {
                throw new Error("User not found.");
            } else {
                throw new Error(`Unexpected error: ${response.status}`);
            }
        }

        const json = await response.json();

        setUserList(json);

        console.log("User Data:", json);
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}

// Get User by QRID
export async function getUserByQRID( 
    qrid: string, 
    setUserData: React.Dispatch<React.SetStateAction<UserProp | null>>
) {
        try {
            const response = await fetch(`${baseUrl}/by-qrid/${qrid}`);

            if (!response.ok) {
                if (response.status === 401) {
                    throw new Error("Unauthorized. Please log in.");
                } else if (response.status === 404) {
                    throw new Error("User not found.");
                } else {
                    throw new Error(`Unexpected error: ${response.status}`);
                }
            }

            const json = await response.json();

            setUserData(json);

            console.log("User Data:", json);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    }