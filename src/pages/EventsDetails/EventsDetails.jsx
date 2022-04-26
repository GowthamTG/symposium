import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import DisplayEvents from "./DisplayEvents";
import { EventsContext } from "../../EventsContext";

const EventsDetails = () => {
  const event = useContext(EventsContext);
  const { id } = useParams();

  return (
    <div>
      {event
        .filter((eve) => eve.id === parseInt(id))
        .map((eve) => (
          <DisplayEvents key={eve.id} eve={eve} />
        ))}
    </div>
  );
};

export default EventsDetails;
