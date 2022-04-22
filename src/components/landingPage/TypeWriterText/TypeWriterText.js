import React from "react";
import Typewriter from "typewriter-effect";

const TypeWriterText = () => {
  return (
    <div>
      <Typewriter
        options={{
          autoStart: true,
          loop: true
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString("National Level Technical Symposium !")
            .pauseFor(2000)
            .deleteAll()
            .typeString("CSE")
            .pauseFor(2000)
            .deleteAll()
            .typeString("Threads 2022 ")
            .pauseFor(2000)
            .deleteAll()
            .start();
        }}
      />
    </div>
  );
};

export default TypeWriterText;
