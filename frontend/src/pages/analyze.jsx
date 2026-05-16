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

      const response = await fetch("http://localhost:5000/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          repoUrl,
        }),
      });

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
        background: "linear-gradient(to bottom right, #020617, #0f172a)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        padding: "20px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          width: "600px",
          padding: "40px",
          borderRadius: "25px",
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.1)",
          textAlign: "center",
          boxShadow: "0 0 50px rgba(139,92,246,0.2)",
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