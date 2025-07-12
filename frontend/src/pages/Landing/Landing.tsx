import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import QrScanner from "../../components/QrScanner/QrScanner";

export default function Landing() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            {/* Navbar */}
            <Navbar />

            <div className="flex items-center justify-center">
                <QrScanner />
            </div>


            {/* Footer */}
            <Footer />
        </div>
    )
}