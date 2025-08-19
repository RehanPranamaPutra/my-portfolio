import { useEffect, useState } from "react";

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setFadeOut(true); // mulai fade out
          setTimeout(() => {
            onFinish();
          }, 500); // tunggu animasi selesai
          return 100;
        }
        return prev + 1;
      });
    }, 20); // kecepatan loading
    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "48px",
        fontWeight: "bold",
        color: "#fff",
        zIndex: 9999,
        opacity: fadeOut ? 0 : 1, // efek fade out
        transform: fadeOut ? "scale(1.1)" : "scale(1)",
        transition: "opacity 0.5s ease, transform 0.5s ease", // animasi halus
      }}
    >
      {progress}%
    </div>
  );
}
