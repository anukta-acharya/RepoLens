import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";

function Results() {
  const location = useLocation();

  const data = location.state;

  console.log(data);

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
        backgroundImage:
          "linear-gradient(rgba(2,6,23,0.88), rgba(15,23,42,0.92)), url('/images/results-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        color: "white",
        padding: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          width: "850px",
          padding: "45px",
          borderRadius: "30px",
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(14px)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 0 50px rgba(139,92,246,0.25)",
        }}
      >
        <h1
          style={{
            fontSize: "52px",
            marginBottom: "15px",
            fontWeight: "bold",
            background: "linear-gradient(90deg,#a855f7,#3b82f6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Analysis Results
        </h1>

        <h2
          style={{
            fontSize: "30px",
            marginBottom: "10px",
          }}
        >
          {data.name || "Repository"}
        </h2>

        <p
          style={{
            color: "#cbd5e1",
            marginBottom: "35px",
            lineHeight: "1.8",
            fontSize: "17px",
          }}
        >
          {data.description || "No description available."}
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
          }}
        >
          <motion.div whileHover={{ scale: 1.05 }} style={cardStyle}>
            ⭐
            <h3>Stars</h3>
            <h2>{data.stars ?? 0}</h2>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} style={cardStyle}>
            🍴
            <h3>Forks</h3>
            <h2>{data.forks ?? 0}</h2>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} style={cardStyle}>
            🐛
            <h3>Open Issues</h3>
            <h2>{data.issues ?? 0}</h2>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} style={cardStyle}>
            💻
            <h3>Language</h3>
            <h2>{data.language || "Not detected"}</h2>
          </motion.div>
        </div>

        <div
          style={{
            marginTop: "35px",
            padding: "25px",
            borderRadius: "22px",
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 0 30px rgba(59,130,246,0.15)",
          }}
        >
          <h3
            style={{
              marginBottom: "12px",
              fontSize: "22px",
            }}
          >
            ⚡ Last Commit
          </h3>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "16px",
            }}
          >
            {data.lastCommit
              ? new Date(data.lastCommit).toLocaleString()
              : "No commit data available"}
          </p>
        </div>

        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              marginTop: "40px",
              padding: "16px 38px",
              borderRadius: "16px",
              border: "none",
              background: "linear-gradient(90deg,#3b82f6,#9333ea)",
              color: "white",
              cursor: "pointer",
              fontSize: "17px",
              fontWeight: "600",
              boxShadow: "0 0 25px rgba(147,51,234,0.4)",
            }}
          >
            Back Home
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}

const cardStyle = {
  background: "rgba(255,255,255,0.05)",
  padding: "30px",
  borderRadius: "22px",
  textAlign: "center",
  fontSize: "18px",
  border: "1px solid rgba(255,255,255,0.08)",
  backdropFilter: "blur(12px)",
  boxShadow: "0 0 25px rgba(139,92,246,0.15)",
};

export default Results;