import { useEffect, useState } from "react";

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
    
    return (
        <div className="flex flex-col justify-center items-center h-screen  bg-gradient-to-br from-blue-50 to-indigo-100">
            
            <div className="w-[50%] flex justify-center gap-4 padding-4 mb-4">
                <input 
                    type="text" 
                    placeholder="Search user..." 
                    className="border bg-white border-gray-300 rounded-lg p-2" 
                    onChange={(e) => getUserData(e.target.value)}
                />
                
                <select className="w-[300px] border bg-white border-gray-300 rounded-lg p-2">
                    {userList.map((user) => {
                        return (
                            <option key={`${user.id}`} value={user.name} className="">{user.name}</option>
                        );
                    })}                   
                </select>
            </div>
            
            <div className="w-[50%] h-[80%] bg-white rounded-2xl">


            </div>
        </div>
    );
}