import React from "react";
import ReactDOM from "react-dom/client";

const App = () => (
  <div style={{ textAlign: "center", marginTop: "50px" }}>
    <h1>🚀 CI/CD Frontend Demo</h1>
    <p>Deployed automatically to AWS S3</p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
