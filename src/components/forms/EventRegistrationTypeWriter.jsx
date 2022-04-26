import React from "react";
import Typewriter from "typewriter-effect";

const EventRegistrationTypeWriter = (props) => {
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
          .typeString("Event Name")
          .pauseFor(2000)
          .deleteAll()
          .start();
      }}
    />
  );
};

export default EventRegistrationTypeWriter;
