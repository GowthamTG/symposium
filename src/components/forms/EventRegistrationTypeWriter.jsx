import React from "react";
import Typewriter from "typewriter-effect";

const EventRegistrationTypeWriter = () => {
  return (
    <Typewriter
      options={{
        autoStart: true,
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString("Event Registration Form !")
          .pauseFor(2000)
          .deleteAll()
          .typeString("CSE Department")
          .pauseFor(2000)
          .deleteAll()
          .typeString("Threads 2022 ")
          .pauseFor(2000)
          .deleteAll()
          .start();
      }}
    />
  );
};

export default EventRegistrationTypeWriter;
