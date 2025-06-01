import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Security Analyst",
          "Cloud Engineer",
          "DevOps Engineer",
          "Software Engineer",
          "Data Analyst"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
