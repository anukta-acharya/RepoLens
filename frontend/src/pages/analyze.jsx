import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Analyze() {
  const [repoUrl, setRepoUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const analyzeRepo = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "https://repolens-6l4w.onrender.com/analyze",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            repoUrl,
          }),
        }
      );

      const data = await response.json();

      navigate("/results", {
        state: data,
      });
    } catch (error) {
      console.log(error);
      alert("Failed to analyze repository");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/images/analyze-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        padding: "20px",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.7)",
        }}
      ></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          position: "relative",
          zIndex: 10,
          width: "600px",
          padding: "40px",
          borderRadius: "25px",
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(14px)",
          border: "1px solid rgba(255,255,255,0.1)",
          textAlign: "center",
          boxShadow: "0 0 50px rgba(139,92,246,0.3)",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            marginBottom: "20px",
          }}
        >
          Analyze Repository
        </h1>

        <p
          style={{
            color: "#cbd5e1",
            marginBottom: "30px",
            lineHeight: "1.7",
          }}
        >
          Paste a GitHub repository URL and let RepoLens analyze
          architecture, activity, and repository intelligence.
        </p>

        <input
          type="text"
          placeholder="https://github.com/facebook/react"
          value={repoUrl}
          onChange={(e) => setRepoUrl(e.target.value)}
          style={{
            width: "100%",
            padding: "18px",
            borderRadius: "15px",
            border: "none",
            outline: "none",
            marginBottom: "25px",
            fontSize: "16px",
            background: "#111827",
            color: "white",
          }}
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={analyzeRepo}
          style={{
            padding: "15px 40px",
            borderRadius: "14px",
            border: "none",
            background: "linear-gradient(90deg,#3b82f6,#9333ea)",
            color: "white",
            fontSize: "17px",
            cursor: "pointer",
            boxShadow: "0 0 25px rgba(147,51,234,0.4)",
          }}
        >
          {loading ? "Analyzing..." : "Analyze Repository"}
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Analyze;