import { useEffect, useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import QrScanner from "../../components/QrScanner/QrScanner";

interface UserProp {
    id: number,
    name: string,
    country: string,
    university: string,
    package: string,
    qrid: string  
}

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export default function FindUserQr() {
    const [userList, setUserList] = useState<UserProp[]>([]);
    const [userData, setUserData] = useState<UserProp | null>(null);
    
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
        console.log(userData)
    }, [userData]);
    
    return (
        <div className="flex flex-col items-center bg-gradient-to-br from-blue-50 to-indigo-100">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <div className="w-full h-200 stretch relative bottom-5 flex flex-col justify-center items-center">
                <div className="w-[50%] flex flex-col md:flex-row justify-center items-center md:items-baseline gap-5 mb-5">
                    <input 
                        type="text" 
                        placeholder="Search user..." 
                        className="w-[340px] border bg-white border-gray-300 rounded-lg p-2" 
                        onChange={(e) => getUserData(e.target.value)}
                    />
                    
                    <select 
                        className="w-[340px] border bg-white border-gray-300 rounded-lg p-2"
                        onChange={(e) => {
                            const selectedUser = userList.find(user => user.name === e.target.value);
                            
                            if (selectedUser) {
                                setUserData(selectedUser);
                            }
                        }}
                    >
                        <option value="">Select a user...</option>
                        {userList.map((user) => {
                            return (
                                <option 
                                    key={`${user.id}`}
                                    value={user.name}
                                >
                                    {user.name}
                                </option>
                            );
                        })}                   
                    </select>
                </div>
                
                <div className="w-[80%] h-[60%] md:h-[70%] flex justify-center items-center bg-white rounded-2xl">
                    <QrScanner /> 
                </div>
            </div>
                    
            {/* Footer */}
            <Footer />
        </div>
    );
}