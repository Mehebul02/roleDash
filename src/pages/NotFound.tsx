// src/pages/NotFound.tsx
import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
        color: "#333",
      }}
    >
      {/* Logo */}
      {/* <RoleDashLogo size={80} /> */}

      <h1 style={{ fontSize: "5rem", margin: "20px 0" }}>404</h1>
      <p style={{ fontSize: "1.5rem", marginBottom: "20px" }}>
        Oops! Page not found.
      </p>
      <Link
        to="/login/admin"
        style={{
          textDecoration: "none",
          padding: "10px 20px",
          backgroundColor: "#F9D8D8",
          color: "#333333",
          borderRadius: "6px",
          fontWeight: "bold",
        }}
      >
        Go to Login
      </Link>
    </div>
  );
};

export default NotFoundPage;
