import { useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

export default function QrScanner() {
    useEffect(() => {
    const scanner = new Html5QrcodeScanner("qr-reader", {
      fps: 10,
      qrbox: 250,
    }, false);

    scanner.render(
      (decodedText) => {
        console.log("QR Code Scanned:", decodedText);
      },
      (errorMessage) => {
        console.warn("QR Scan Error:", errorMessage);
      }
    );

    return () => {
      scanner.clear().catch((error) => {
        console.error("Failed to clear scanner", error);
      });
    };
  }, []);

  return (
    <div id="qr-reader" className="w-[50%] h-[40vh]" />
  );
}
