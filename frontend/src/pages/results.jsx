import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";

function Results() {
  const location = useLocation();

  const data = location.state;

  if (!data) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#020617",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
        }}
      >
        No repository data found.
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right,#020617,#111827)",
        color: "white",
        padding: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          width: "750px",
          padding: "40px",
          borderRadius: "28px",
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 0 45px rgba(99,102,241,0.25)",
        }}
      >
        <h1
          style={{
            fontSize: "44px",
            marginBottom: "10px",
            fontWeight: "700",
          }}
        >
          {data.name || "Repository"}
        </h1>

        <p
          style={{
            color: "#cbd5e1",
            marginBottom: "35px",
            lineHeight: "1.8",
          }}
        >
          {data.description || "No description available."}
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "22px",
          }}
        >
          <div style={cardStyle}>
            ⭐ Stars
            <h2>{data.stars ?? 0}</h2>
          </div>

          <div style={cardStyle}>
            🍴 Forks
            <h2>{data.forks ?? 0}</h2>
          </div>

          <div style={cardStyle}>
            🐛 Open Issues
            <h2>{data.issues ?? 0}</h2>
          </div>

          <div style={cardStyle}>
            💻 Language
            <h2>{data.language || "Not detected"}</h2>
          </div>
        </div>

        <div
          style={{
            marginTop: "30px",
            padding: "22px",
            borderRadius: "18px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <h3
            style={{
              marginBottom: "10px",
            }}
          >
            ⚡ Last Commit
          </h3>

          <p
            style={{
              color: "#cbd5e1",
            }}
          >
            {data.lastCommit
              ? new Date(data.lastCommit).toLocaleString()
              : "No commit data available"}
          </p>
        </div>

        <Link to="/">
          <button
            style={{
              marginTop: "35px",
              padding: "14px 34px",
              borderRadius: "14px",
              border: "none",
              background: "linear-gradient(90deg,#3b82f6,#9333ea)",
              color: "white",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "600",
              boxShadow: "0 0 20px rgba(99,102,241,0.4)",
            }}
          >
            Back Home
          </button>
        </Link>
      </motion.div>
    </div>
  );
}

const cardStyle = {
  background: "rgba(255,255,255,0.05)",
  padding: "28px",
  borderRadius: "20px",
  textAlign: "center",
  fontSize: "18px",
  border: "1px solid rgba(255,255,255,0.06)",
};

export default Results;