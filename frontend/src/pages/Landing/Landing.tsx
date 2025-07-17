import { Link } from "react-router-dom";
import PagesURL from "../../../router/routes";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function Landing() {

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="flex flex-col w-screen">
                {/* Hero Section */}
                <section className="min-h-[60vh] sm:min-h-[80vh] flex items-center text-center p-10">
                    <div className="max-w-4xl mx-auto w-full">
                        {/* Title */}
                        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                            Track Your Guests 
                            <span className="block text-blue-600">QR Code Magic</span>
                        </h1>

                        {/* Description */}
                        <p className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
                            Streamline your event management with our intelligent QR code tracking system. 
                            Scan, track, and manage your guests effortlessly with our powerful platform.
                        </p>
                        
                        {/* Navigation Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 sm:mb-16">
                            <Link to={PagesURL.FindUserQr} className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-blue-700 transition-colors shadow-lg">
                                <button>
                                    Test QR Scanning
                                </button>
                            </Link>
                            <button className="border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-blue-50 transition-colors">
                                Watch Demo
                            </button>
                        </div>

                        {/* QR Scanner Card */}
                        <div className="flex justify-center">
                            <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-12 border border-gray-100 max-w-xs sm:max-w-md w-full">
                                <div className="bg-gradient-to-r from-purple-100 via-indigo-100 to-blue-100 rounded-2xl p-4 sm:p-8 mb-4 sm:mb-6">
                                    <div className="h-[23vh] flex justify-center items-center bg-white rounded-xl p-4 sm:p-6 shadow-lg">
                                        <div className="w-26 h-26 sm:w-24 sm:h-24 mx-auto bg-gray-900 rounded-lg flex items-center justify-center">
                                            <div className="w-20 h-20 sm:w-16 sm:h-16 border-4 border-gray-300 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-extrabold text-indigo-700 mb-2 sm:mb-3 tracking-tight drop-shadow-sm">
                                    <span className="inline-block bg-gradient-to-r from-purple-300 via-indigo-300 to-blue-300 bg-clip-text text-transparent">
                                        Scan QR Code
                                    </span>
                                </h3>
                                <p className="text-gray-700 text-base sm:text-lg leading-relaxed italic">
                                    Effortlessly scan guest codes with a single tap fast, secure, and reliable.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="px-4 sm:px-6 py-10 sm:py-16 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-2 sm:mb-4">
                            Everything You Need for Event Success
                        </h2>
                        <p className="text-gray-600 text-center mb-6 sm:mb-12 max-w-2xl mx-auto text-base sm:text-lg">
                            Powerful features designed to make your event management seamless and efficient
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {/* Feature Card 1 */}
                            <div className="bg-blue-50 p-4 sm:p-6 rounded-xl">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-2 sm:mb-4">
                                    <span className="text-white text-lg sm:text-xl">📱</span>
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Quick QR Scanning</h3>
                                <p className="text-gray-600 text-sm sm:text-base">
                                    Instantly scan and identify guests with our fast QR code recognition system.
                                </p>
                            </div>

                            {/* Feature Card 2 */}
                            <div className="bg-green-50 p-4 sm:p-6 rounded-xl">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-lg flex items-center justify-center mb-2 sm:mb-4">
                                    <span className="text-white text-lg sm:text-xl">👥</span>
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Guest Management</h3>
                                <p className="text-gray-600 text-sm sm:text-base">
                                    Easily manage and track all your guests with detailed profiles and information.
                                </p>
                            </div>

                            {/* Feature Card 3 */}
                            <div className="bg-purple-50 p-4 sm:p-6 rounded-xl">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-2 sm:mb-4">
                                    <span className="text-white text-lg sm:text-xl">📊</span>
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Real-time Analytics</h3>
                                <p className="text-gray-600 text-sm sm:text-base">
                                    Get insights and analytics about your event attendance in real-time.
                                </p>
                            </div>

                            {/* Feature Card 4 */}
                            <div className="bg-orange-50 p-4 sm:p-6 rounded-xl">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-2 sm:mb-4">
                                    <span className="text-white text-lg sm:text-xl">🔒</span>
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Secure & Reliable</h3>
                                <p className="text-gray-600 text-sm sm:text-base">
                                    Your data is protected with enterprise-grade security and reliability.
                                </p>
                            </div>

                            {/* Feature Card 5 */}
                            <div className="bg-teal-50 p-4 sm:p-6 rounded-xl">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-2 sm:mb-4">
                                    <span className="text-white text-lg sm:text-xl">⚡</span>
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Lightning Fast</h3>
                                <p className="text-gray-600 text-sm sm:text-base">
                                    Process hundreds of guests in minutes with our optimized scanning technology.
                                </p>
                            </div>

                            {/* Feature Card 6 */}
                            <div className="bg-yellow-50 p-4 sm:p-6 rounded-xl">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-600 rounded-lg flex items-center justify-center mb-2 sm:mb-4">
                                    <span className="text-white text-lg sm:text-xl">📱</span>
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Mobile Friendly</h3>
                                <p className="text-gray-600 text-sm sm:text-base">
                                    Works perfectly on any device - desktop, tablet, or mobile phone.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="px-4 sm:px-6 py-10 sm:py-16">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-12">How It Works</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                            {/* Step 1 */}
                            <div className="text-center">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4">
                                    <span className="text-white text-xl sm:text-2xl font-bold">1</span>
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Scan QR Code</h3>
                                <p className="text-gray-600 text-sm sm:text-base">
                                    Simply point your camera at the guest's QR code to instantly identify them.
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="text-center">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4">
                                    <span className="text-white text-xl sm:text-2xl font-bold">2</span>
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">View Profile</h3>
                                <p className="text-gray-600 text-sm sm:text-base">
                                    Access complete guest information including name, university, and package details.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="text-center">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4">
                                    <span className="text-white text-xl sm:text-2xl font-bold">3</span>
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Track & Manage</h3>
                                <p className="text-gray-600 text-sm sm:text-base">
                                    Keep track of attendance and manage your event with powerful analytics.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="px-4 sm:px-6 py-10 sm:py-16 bg-blue-600 text-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">Ready to Transform Your Events?</h2>
                        <p className="text-base sm:text-xl text-blue-100 mb-4 sm:mb-8">
                            Join thousands of event organizers who trust our QR tracking system.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                Start Free Trial
                            </button>
                            <button className="border border-blue-300 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                Contact Sales
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
}