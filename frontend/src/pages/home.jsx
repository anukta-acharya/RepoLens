import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../assets/home.png";
import logo from "../assets/logo.png";

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `linear-gradient(
          rgba(3, 6, 20, 0.45),
          rgba(3, 6, 20, 0.45)
        ), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          width: "700px",
          padding: "50px",
          borderRadius: "28px",
          background: "rgba(10, 15, 35, 0.45)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 0 50px rgba(90, 120, 255, 0.15)",
          textAlign: "center",
          color: "white",
        }}
      >
        <motion.img
          src={logo}
          alt="RepoLens Logo"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            width: "90px",
            marginBottom: "20px",
            borderRadius: "20px",
            boxShadow: "0 0 25px rgba(140,100,255,0.4)",
          }}
        />

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "72px",
            marginBottom: "20px",
            fontWeight: "700",
            letterSpacing: "-2px",
          }}
        >
          Welcome to RepoLens
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          style={{
            fontSize: "22px",
            lineHeight: "1.8",
            color: "#d1d5db",
            marginBottom: "40px",
          }}
        >
          AI-powered repository intelligence using IBM Bob.
          Understand codebases faster, visualize architecture,
          and accelerate developer workflows with elegant AI insights.
        </motion.p>

        <Link to="/analyze">
          <motion.button
            whileHover={{
              scale: 1.06,
              boxShadow: "0 0 35px rgba(139,92,246,0.7)",
            }}
            whileTap={{ scale: 0.96 }}
            style={{
              padding: "18px 42px",
              borderRadius: "14px",
              border: "none",
              background:
                "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)",
              color: "white",
              fontSize: "18px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "0.3s ease",
            }}
          >
            Start Journey →
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}

export default Home;