import React from "react";
import { Link } from "react-router-dom";

const page = () => {
  return (
    <div className="font-sans m-0 p-0 min-h-screen text-white">
      <section class="hero">
        <h1>Design Your Learning Path</h1>
        <p>Get a personalized tech roadmap in seconds.</p>
          <Link to="/2">Start Now</Link>
      </section>
    </div>
  );
};

export default page;
