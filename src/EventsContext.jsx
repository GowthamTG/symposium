import { createContext, useState } from "react";

export const EventsContext = createContext();

export const EventsProvider = (props) => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "PROJECT 360",
      desc: "Project 360 is a technical event in which the participants have to present the project ideas. Innovative project presentations and idea presentations are to be showcased with the help of ppt.",
      organiser: [
        "Lorem - 9876543210",
        "Lorem - 9876543210",
        "Lorem - 9876543210",
      ],
      Hall: "200",
      posterImg: "./assets/Ad Zap.png",
      timing: "NA",
      date: "6/05/2022",
      tech: "Technical Event",
      criteria:
        "Judgement is precisely based on the rank of scores obtained by the participants.",

      cardLogo: "../../assets/super1.png",
      cardDesc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis inventore optio itaque ullam excepturi reprehenderit sequi quidem volupta",
      rounds: [""],
    },
    {
      id: 2,
      title: "HUNKY BRAINS",
      desc: "Hunky Brains is to check the participant's cognitive thinking skills aptitude, verbal and reasoning problems within a given time. The participants are required to solve the given simple questions that are related to general aptitude.",

      organiser: [
        "Lorem - 9876543210",
        "Lorem - 9876543210",
        "Lorem - 9876543210",
      ],

      Hall: "200",
      posterImg: "../../assets/img.jpeg",
      timing: "1 pm",
      date: "05/05/2022",
      tech: "Technical Event",
      cardLogo: "../../assets/super1.png",
      cardDesc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis inventore optio itaque ullam excepturi reprehenderit sequi quidem volupta",
    },
    {
      id: 3,
      title: "Webster",
      desc: "This event is based on developing a web page for the given scenario. Simple web pages are to be developed using HTML, CSS, etc., as per the requirement given.",
      organiser: [
        "Lorem - 9876543210",
        "Lorem - 9876543210",
        "Lorem - 9876543210",
      ],
      Hall: "200",
      posterImg: "../../assets/img.jpeg",
      timing: "1 pm",
      date: "05/05/2022",
      tech: "Technical Event",
      cardLogo: "../../assets/super1.png",
      cardDesc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis inventore optio itaque ullam excepturi reprehenderit sequi quidem volupta",
    },
    {
      id: 4,
      title: "BIG O OF ONE-0(1)",
      desc: "This event is based on writing programs and code snippets for the given question. The participants are expected to code for the given scenario to get the required output.",
      organiser: [
        "Lorem - 9876543210",
        "Lorem - 9876543210",
        "Lorem - 9876543210",
      ],
      Hall: "200",
      posterImg: "../../assets/img.jpeg",
      timing: "1 pm",
      date: "05/05/2022",
      tech: "Technical Event",
      cardLogo: "../../assets/super1.png",
      cardDesc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis inventore optio itaque ullam excepturi reprehenderit sequi quidem volupta",
    },
    {
      id: 5,
      title: "DATA FLOW",
      desc: "This event is based on writing queries in Structures Query Language (SQL). Simple scenarios will be provided as questions for which the participants are expected to write the queries such that it fetches the required output.",
      organiser: [
        "Lorem - 9876543210",
        "Lorem - 9876543210",
        "Lorem - 9876543210",
      ],
      Hall: "200",
      posterImg: "../../assets/img.jpeg",
      timing: "1 pm",
      date: "05/05/2022",
      tech: "Technical Event",
      cardLogo: "../../assets/super1.png",
      cardDesc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis inventore optio itaque ullam excepturi reprehenderit sequi quidem volupta",
    },
  ]);

  return (
    <EventsContext.Provider value={events}>
      {props.children}
    </EventsContext.Provider>
  );
};
