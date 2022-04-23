import React from "react";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";
import "./AdminHome.scss";
export default function AdminHome() {
  const events = [
    {
      name: "Event1",
      url: "/event/1",
    },
    {
      name: "Event2",
      url: "/event/2",
    },
    {
      name: "Event3",
      url: "/event/3",
    },
    {
      name: "Event4",
      url: "/event/4",
    },
  ];
  return (
    <div className="grid">
      {events.map((event) => (
        <Link to={`/admin${event.url}`} replace>
          <div className="card">{event.name}</div>
        </Link>
      ))}
    </div>
  );
}
