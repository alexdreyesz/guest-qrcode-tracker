import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getUserByQRID } from "../../api/user";
import type { UserProp } from "../../interfaces";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function UserProfile() {
    const [userData, setUserData] = useState<UserProp | null>(null);
    const location = useLocation();
    const { qrid } = location.state || {};

    useEffect(() => {
        
    }, [userData]);

    useEffect(() => {
        getUserByQRID(qrid, setUserData);
    }, []);
    
    return (
        <div className="flex flex-col items-center w-full min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">    
            {/* Navbar */}
            <Navbar/>
            
            {/* Main Content */}
            <div className="relative flex flex-col items-center w-full min-h-screen px-4 py-8">
                {/* Profile Banner */}
                <div className="absolute h-[200px] md:h-[250px] w-full inset-0 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                
                {/* Profile Card */}
                <div className="w-full max-w-300 relative mt-24 md:mt-18 bg-white rounded-3xl shadow-2xl border border-gray-100 z-10">
                    {/* Profile Header */}
                    <div className="relative px-6 md:px-12 pt-16 pb-8 text-center">
                        {/* Profile Avatar */}
                        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full border-8 border-white shadow-xl flex items-center justify-center">
                                <span className="text-4xl font-bold text-white">
                                    {userData?.name?.charAt(0).toUpperCase() || "?"}
                                </span>
                            </div>
                        </div>
                        
                        {/* User Name */}
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-5 mb-5">
                            {userData?.name || "Loading..."}
                        </h1>
                        
                        {/* QR ID Badge */}
                        <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1V4zm2 2V5h1v1h-1z" clipRule="evenodd" />
                            </svg>
                            {userData?.qrid || "N/A"}
                        </div>
                    </div>
                    
                    {/* Profile Details */}
                    <div className="px-6 md:px-12 pb-12">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Personal Information */}
                            <div className="space-y-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                    Personal Information
                                </h3>
                                
                                <div className="md:h-56 flex flex-col justify-between space-y-4">                                  
                                    <div className="bg-gray-50 rounded-xl p-4">
                                        <label className="text-sm font-medium text-gray-500 uppercase tracking-wide">Full Name</label>
                                        <p className="text-lg font-semibold text-gray-900 mt-1">
                                            {userData?.name || "Not provided"}
                                        </p>
                                    </div>
                                    
                                    <div className="bg-gray-50 rounded-xl p-4">
                                        <label className="text-sm font-medium text-gray-500 uppercase tracking-wide">Country</label>
                                        <p className="text-lg font-semibold text-gray-900 mt-1 flex items-center">
                                            {userData?.country || "Not provided"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Academic & Package Information */}
                            <div className="space-y-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                                    </svg>
                                    Academic & Package Details
                                </h3>

                                <div className="md:h-56 flex flex-col justify-between space-y-4">
                                    {/* University */}
                                    <div className="bg-gray-50 rounded-xl p-4">
                                        <label className="text-sm font-medium text-gray-500 uppercase tracking-wide">University</label>
                                        <p className="text-lg font-semibold text-gray-900 mt-1 flex items-center">
                                            {userData?.university || "Not provided"}
                                        </p>
                                    </div>
                                    
                                    {/* Package Type */}
                                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-4">
                                        <label className="text-sm font-medium text-blue-600 uppercase tracking-wide">Package Type</label>
                                        <p className="text-xl font-bold text-blue-800 mt-1 flex items-center">
                                            {userData?.package || "Not specified"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}