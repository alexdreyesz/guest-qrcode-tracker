import { useEffect, useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

interface UserProp {
    id: number,
    name: string,
    country: string,
    university: string,
    package: string,
    qrid: string  
}

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export default function UserProfile() {
    const [userList, setUserList] = useState<UserProp[]>([]);
    
    async function getUserData(name: string) {
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

    useEffect(() => {
        
    }, [userList]);

    useEffect(() => {
        getUserData("Nicole");
    }, []);
    
    return (
        <div className="flex flex-col items-center w-screen bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">    
            {/* Navbar */}
            <Navbar/>
            
            {/* Main Content */}
            <div className="relative flex flex-col items-center w-full h-screen overflow-hidden">
                {/* Profile Banner */}
                <div className="absolute h-[40%] w-[100%] inset-0 bg-blue-500"></div>
                
                <div className="w-[50%] h-[80%] bg-white rounded-2xl z-1">
                    
                            
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}