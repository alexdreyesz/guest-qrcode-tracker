import "./QrScanner.css";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import PagesURL from "../../../router/routes";
import { Html5QrcodeScanner } from "html5-qrcode";


export default function QRScanner() {
  const [scannedData, setScannedData] = useState<string | null>(null);
  const scannerInstanceRef = useRef<Html5QrcodeScanner | null>(null);
  const navigate = useNavigate(); 

  const startScanner = () => {
    if (scannerInstanceRef.current) return;

    const scanner = new Html5QrcodeScanner(
      "qr-reader",
      { 
        fps: 10,
        qrbox: (w, h) => {
          const minEdge = Math.min(w, h);
          return { width: minEdge * 0.7, height: minEdge * 0.7 };
        },
        aspectRatio: 1.0,
        disableFlip: false,
        rememberLastUsedCamera: true
      },
      false
    );

    scannerInstanceRef.current = scanner;

    scanner.render(
      (decodedText) => {
        console.log("QR Code scanned:", decodedText);
        setScannedData(decodedText);
        navigate(PagesURL.UserProfile, { state: { qrid: decodedText } });
        scanner.clear()
          .then(() => {
            scannerInstanceRef.current = null;
            console.log("Scanner stopped");
          })
          .catch((err) => console.warn("Clear failed: ", err.message));
      },
      (errorMessage) => {
        // Log errors for debugging but don't spam console
        if (errorMessage.includes("NotFoundException")) {
          // This is normal when no QR code is in view
          return;
        }
        console.warn("QR Scan error:", errorMessage);
      }
    );
  };

  useEffect(() => {
    // Wait longer for mobile devices to be ready
    const timeout = setTimeout(() => {
      startScanner();
    }, 500); // Increased timeout for mobile compatibility

    return () => {
      clearTimeout(timeout);
      if (scannerInstanceRef.current) {
        scannerInstanceRef.current
          .clear()
          .then(() => {
            scannerInstanceRef.current = null;
            console.log("Scanner cleanup complete");
          })
          .catch((err) => console.warn("Cleanup error:", err.message));
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array is intentional here

  const handleRestart = () => {
    setScannedData(null);
    if (scannerInstanceRef.current) {
      scannerInstanceRef.current.clear().then(() => {
        scannerInstanceRef.current = null;
        startScanner();
      });
    } else {
      startScanner();
    }
  };

  return (
    <div className="w-full h-full min-h-[400px] flex flex-col items-center justify-center">
      {!scannedData && (
        <div 
          id="qr-reader" 
          className="w-full h-full" 
        />
      )}
      
      {scannedData && (
        <div className="w-full max-w-md mx-auto flex flex-col justify-center items-center gap-6 p-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 w-full">
            <p className="text-lg font-semibold text-center text-green-800">
              QR Code Scanned Successfully!
            </p>
            <p className="text-sm text-green-600 text-center mt-2 break-all">
              {scannedData}
            </p>
          </div>
          <button 
            onClick={handleRestart} 
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-6 py-3 font-semibold transition-colors w-full"
          >
            Scan Again
          </button>
        </div>
      )}
    </div>
  );
}
