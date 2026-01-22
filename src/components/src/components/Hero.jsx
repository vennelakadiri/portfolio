import React from "react";

function Hero() {
  return (
    <section style={{ textAlign: "center", background: "#e0e7ff" }}>
      <h1>Hi, I'm John Doe</h1>
      <p>Full-Stack Developer | React | Node.js | Python</p>
      <button onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
        See My Work
      </button>
    </section>
  );
}

export default Hero;
