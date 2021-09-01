import React from "react";

const Dashboard = ({ handleSignOut }) => {
  return (
    <section className="hero">
      <nav>
        <h1>Welcome</h1>
        <button onClick={handleSignOut}>Logout</button>
      </nav>
    </section>
  );
};

export default Dashboard;
