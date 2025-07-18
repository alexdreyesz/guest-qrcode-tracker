import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserBySearchName } from "../../api/user";
import type { UserProp } from "../../interfaces";
import PagesURL from "../../router/routes";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import QrScanner from "../../components/QrScanner/QrScanner";

export default function FindUserQr() {
    const [userList, setUserList] = useState<UserProp[]>([]);
    const [userData, setUserData] = useState<UserProp | null>(null);
    const navigate = useNavigate();

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
                        onChange={(e) => getUserBySearchName(e.target.value, setUserList)}
                    />
                    
                    <select 
                        className="w-[340px] border bg-white border-gray-300 rounded-lg p-2"
                        onChange={(e) => {
                            const selectedUser = userList.find(user => user.name === e.target.value);
                            
                            if (selectedUser) {
                                setUserData(selectedUser);
                                navigate(PagesURL.UserProfile, { state: { qrid: selectedUser.qrid } });
                            }
                        }}
                    >
                        <option value="">"Select a user..."</option>
                        {userList.map((user) => {
                            return (
                                <option 
                                    key={`${user.id}`}
                                    value={user.name}
                                    className="w-20 text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {user.name}
                                </option>
                            );
                        })}                   
                    </select>
                </div>
                
                <div className="w-[80%] max-w-[1200px] h-[60%] md:h-[70%] flex justify-center items-center bg-white rounded-2xl">
                    <QrScanner /> 
                </div>
            </div>
                    
            {/* Footer */}
            <Footer />
        </div>
    );
}