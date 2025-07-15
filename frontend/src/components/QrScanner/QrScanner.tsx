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
        aspectRatio: 1.333333,
        qrbox: (viewfinderWidth, viewfinderHeight) => {
          const minEdge = Math.min(viewfinderWidth, viewfinderHeight);
          return {
            width: Math.floor(minEdge * 0.7),
            height: Math.floor(minEdge * 0.7),
          };
        },
      },
      false
    );

    scannerInstanceRef.current = scanner;

    scanner.render(
      (decodedText) => {
        console.log("QR Code scanned:", decodedText);
        setScannedData(decodedText);
        navigate(PagesURL.UserProfile, { state: { decodedText } });
        scanner.clear()
          .then(() => console.log("Scanner stopped"))
          .catch((err) => console.warn("Clear failed: ", err.message));
      },
      () => {
        // Ignore scan errors silently
      }
    );
  };

  useEffect(() => {
    // Wait for the DOM to be ready before starting the scanner
    const timeout = setTimeout(() => {
      startScanner();
    }, 0);

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
  }, []);

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
    <div className="w-full h-full flex flex-col items-center justify-center">
      {!scannedData && (
        <div id="qr-reader" className="w-[80%] md:w-[40%] h-[70%] justify-center items-center" />
      )}
      
      {scannedData && (
        <div className="w-[80%] md:w-[40%] h-[70%] flex flex-col justify-center items-center gap-10">
          <p className="text-lg font-semibold text-center">Scanned Result:<br></br> <br></br> {scannedData}</p>
          <button onClick={handleRestart} className="bg-blue-500 text-white rounded-md p-2">Scan Again</button>
        </div>
      )}
    </div>
  );
}
