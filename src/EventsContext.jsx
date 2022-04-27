// import { createContext, useState } from "react";

// export const EventsContext = createContext();

// export const EventsProvider = (props) => {
//   const [events, setEvents] = useState([
//     {
//       id: 1,
//       title: "PROJECT 360",
//       desc: "Project 360 is a technical event in which the participants have to present the project ideas. Innovative project presentations and idea presentations are to be showcased with the help of ppt.",
//       staff: [],
//       coordinators: [
//         "Ms.Kunguma Swetha A - 8248264840",
//         "Ms.Lekha Dharashini - 8072788806",
//       ],
//       organiser: [
//         "Ms.Harini K.K ",
//         "Ms.Divya V.M",
//         "Ms.Iswarya K",
//         "Ms.Jayashree P",
//       ],
//       Hall: "200",
//       staff: ["Prof.D.Balamurugan ", "Prof.J.Dhayanidhi"],
//       posterImg: "./assets/Ad Zap.png",
//       timing: "NA",
//       date: "6/05/2022",
//       tech: "Technical Event",
//       criteria:
//         "Judgement is precisely based on the rank of scores obtained by the participants.",
//       rules: [
//         "1. Mobile phones can be used. ",
//         "2. Meme shouldn't be offensive or related to politics and religions.",
//         "3. Plagiarism is strictly prohibited.",
//         "4. No discussion among the participants during the event.",
//       ],
//       cardLogo: "./assets/super1.png",
//       cardDesc:
//         "Project 360 is a technical event in which the participants have to present the project ideas. Innovative project presentations and idea presentations are to be showcased with the help of ppt.",
//       rounds: [
//         "In the first-round participants are expected to present their ideas.",
//         "In the second-round participants expected to present their projects.",
//       ],
//     },
//     {
//       id: 2,
//       title: "HUNKY BRAINS",
//       desc: "Hunky Brains is to check the participant's cognitive thinking skills aptitude, verbal and reasoning problems within a given time. The participants are required to solve the given simple questions that are related to general aptitude.",
//       criteria:
//         "Judgement is precisely based on the rank of scores obtained by the participants.",
//       staff: ["Prof.V.Vinodini", "Prof.R.Balaji "],
//       coordinators: ["Ms.Anusha S-9384543668", "Ms.Abinaya S-9600345871"],
//       organiser: [
//         "Mr.Karthikeya",
//         "Mr.Harish S",
//         "Mr.Gowtham N",
//         "Mr.Harish S.M",
//       ],
//       rules: [
//         "1. Single member event. Therefore, team participation is not encouraged.",
//         "2. Mobile phones and similar gadgets are strictly prohibited.",
//         "3. No discussion among the participants during the event.",
//       ],
//       rounds: [
//         "The first round consists of multiple-choice questions from quantitative aptitude, reasoning and verbal.",
//         "The second round consists on multiple-choice questions from quantitative advanced aptitude,concepts of reasoning and verbal.",
//       ],

//       Hall: "200",
//       posterImg: "./assets/img.jpeg",
//       timing: "1 pm",
//       date: "05/05/2022",
//       tech: "Technical Event",
//       cardLogo: "./assets/super1.png",
//       cardDesc:
//         "Hunky Brains is to check the participant's cognitive thinking skills aptitude, verbal and reasoning problems within a given time. The participants are required to solve the given simple questions that are related to general aptitude.",
//     },
//     {
//       id: 3,
//       title: "Webster",
//       desc: "This event is based on developing a web page for the given scenario. Simple web pages are to be developed using HTML, CSS, etc., as per the requirement given.",
//       Hall: "200",
//       posterImg: "./assets/img.jpeg",
//       timing: "1 pm",
//       date: "05/05/2022",
//       tech: "Technical Event",
//       cardLogo: "./assets/super1.png",
//       staff: ["Prof.M.Marimuthu", "Prof.G.Mohanraj"],
//       rules: [],
//       criteria:
//         "Judgement is precisely based on the rank of scores obtained by the participants.",
//       coordinators: [
//         "Mr.Praveen Raj S - 7538858580",
//         "Mr.Praveen Kumar M - 8245416861",
//       ],
//       organiser: [
//         "Mr.Kavin Raj M",
//         "Mr.Santhosh L",
//         "Mr.Mathan Kumar M",
//         "Mr.Prasanna Perumal P",
//       ],
//       rounds: [
//         "The first round consists of multiple-choice questions related to web development.",
//         "The second round is based on developing a web page.",
//       ],
//       cardDesc:
//         "This event is based on developing a web page for the given scenario. Simple web pages are to be developed using HTML, CSS, etc., as per the requirement given.",
//     },
//     {
//       id: 4,
//       title: "BIG O OF ONE-0(1)",
//       desc: "This event is based on writing programs and code snippets for the given question. The participants are expected to code for the given scenario to get the required output.",
//       criteria:
//         "Judgement is precisely based on the rank of scores obtained by the participants.",
//       staff: ["Dr.R.Sivakami", "Dr.V.Sathiya Moorthi"],
//       coordinators: [
//         "Mr.A R Muhil Raj - 8072498381",
//         "Mr.S Kalaiyarasan-6379014934",
//       ],
//       organiser: [
//         "Mr.Shreinik Jain U",
//         "Mr.Senthil Sivaraman S",
//         "Mr.Vickramadhityaa R.K",
//         "Mr.Harshvardan S.M",
//       ],
//       rules: [
//         "1. Single member event. Therefore, team participation is not encouraged.",
//         "2. Mobile phones and similar gadgets are strictly prohibited.",
//         "3. No discussion among the participants during the event.",
//       ],
//       rounds: [
//         "The first round consists of multiple-choice questions related to coding.",
//         "The second round is based on writing codes for given questions.",
//       ],
//       Hall: "200",
//       posterImg: "./assets/img.jpeg",
//       timing: "1 pm",
//       date: "05/05/2022",
//       tech: "Technical Event",
//       cardLogo: "./assets/super1.png",
//       cardDesc:
//         "This event is based on writing programs and code snippets for the given question. The participants are expected to code for the given scenario to get the required output.",
//     },
//     {
//       id: 5,
//       title: "DATA FLOW",
//       desc: "This event is based on writing queries in Structures Query Language (SQL). Simple scenarios will be provided as questions for which the participants are expected to write the queries such that it fetches the required output.",
//       criteria:
//         "Judgement is precisely based on the rank of scores obtained by the participants.",
//       staff: ["Dr.V.Nandhini", "Dr.K.C.Rajeshwari"],
//       coordinators: [
//         "Ms.Indhirajothi S-9087060772",
//         "Ms.Indhumathi C-8072400962",
//       ],
//       organiser: [
//         "Ms.Priyadharshini ",
//         "Ms.Preethisri S.S",
//         "Ms.Mahapreetha",
//         "Ms.Nishalini",
//       ],
//       rules: [
//         "1. Single member event. Therefore, team participation is not encouraged.",
//         "2. Mobile phones and similar gadgets are strictly prohibited.",
//         "3. No discussion among the participants during the event.",
//       ],
//       rounds: [
//         "The first round consists of multiple-choice questions from SQL.",
//         "The second round is based on writing SQL queries.",
//       ],
//       Hall: "200",
//       posterImg: "./assets/img.jpeg",
//       timing: "1 pm",
//       date: "05/05/2022",
//       tech: "Technical Event",
//       cardLogo: "./assets/super1.png",
//       cardDesc:
//         "This event is based on writing queries in Structures Query Language (SQL). Simple scenarios will be provided as questions for which the participants are expected to write the queries such that it fetches the required output.",
//     },
//     {
//       id: 6,
//       title: "MEME CREATION",
//       desc: "This event is based on creating memes. A topic will be provided on spot for which the participants are expected to create ingenious memes.",
//       rules: [
//         "1. Mobile phones can be used. ",
//         "2. Meme shouldn't be offensive or related to politics and religions.",
//         "3. Plagiarism is strictly prohibited.",
//         "4. No discussion among the participants during the event.",
//       ],

//       rounds: [
//         "The first round is based on image meme",
//         "The second round is based on video meme",
//       ],
//       criteria:
//         "Judgement is precisely based on the creativity applied by the participants.",
//       staff: ["Dr.S.Sakthivel"],

//       coordinators: [
//         "Mr.Madhan RI - 7010767487",
//         "Mr.Parthasarathy S - 8870865343",
//       ],
//       organiser: [
//         "Mr.Kavin Raj M",
//         "Mr.Santhosh L",
//         "Mr.Mathan Kumar M",
//         "Mr.Prasanna Perumal P",
//       ],

//       Hall: "200",
//       posterImg: "./assets/img.jpeg",
//       timing: "1 pm",
//       date: "06/05/2022",
//       tech: "Non Technical Event",
//       cardLogo: "./assets/super1.png",
//       cardDesc:
//         "Judgement is precisely based on the creativity applied by the participants.",
//     },
//     {
//       id: 7,
//       title: "SNAP SHOT",
//       desc: "A photograph is not only an image, an interpretation of the reality; it is also a trace, something directly stenciled off the real, like a footprint or a death mask. So this event is all about showcasing the creative and innovative skills on photography.",
//       rules: [
//         "1. Any Device with Camera is allowed. ",
//         "2. Photo must be taken within the College campus based on the given topics.",
//         "3. Minor Editing are allowed, if it is beyond that then it will be disqualified.",
//       ],
//       rounds: [],
//       criteria:
//         "Judgement is precisely based on the effort and the creativity applied on the photograph",
//       staff: ["Dr.S.Sankar", "Prof.M.R.Sundar Kumar"],

//       coordinators: [
//         "Mr.Yogesh Kumar J K - 9791927277",
//         "Ms.Sona R - 6380739006",
//       ],
//       organiser: [
//         "Ms.Jaisree V",
//         "Ms.Deepika M",
//         "Ms.Gayathri M.L",
//         "Ms.Jayapradaa G",
//       ],
//       Hall: "200",
//       posterImg: "./assets/img.jpeg",
//       timing: "1 pm",
//       date: "06/05/2022",
//       tech: "Non Technical Event",
//       cardLogo: "./assets/super1.png",
//       cardDesc:
//         "Judgement is precisely based on the creativity applied by the participants.",
//     },
//     {
//       id: 8,
//       title: "COLORFUL VISION",
//       desc: "Art is a vision on paper not to reproduce reality but to create a reality of same intensity. This event is based on pencil sketch and painting.",
//       rules: [
//         "1. Mobile phones can be used. ",
//         "2. Malpractice is strictly prohibited. ",
//         "3. No discussion during the event.",
//       ],
//       rounds: [
//         "First round is based on pencil sketches on a given topic, no colors allowed.",
//         "Second round will be painting on a given topic.",
//       ],
//       criteria:
//         "Judgement is precisely based on the creativity applied by the participants.",
//       staff: ["Dr.G.Kirubashri", "Prof.G.Vidhya"],
//       coordinators: [
//         "Ms.Priyadharashini P - 7708666522",
//         "Ms.Madhu Harshini V H - 6379555234",
//       ],
//       organiser: [
//         "Ms.Guru Lakshmi S",
//         "Ms.Dhivya Bharathi P",
//         "Ms.Ramya R",
//         "Ms.Sindhu B",
//       ],
//       Hall: "200",
//       posterImg: "./assets/img.jpeg",
//       timing: "1 pm",
//       date: "06/05/2022",
//       tech: "Non Technical Event",
//       cardLogo: "./assets/super1.png",
//       cardDesc:
//         "Art is a vision on paper not to reproduce reality but to create a reality of same...",
//     },
//     {
//       id: 9,
//       title: "FILMY WAR",
//       desc: "A short film is an audiovisual production that is mainly characterized by its short duration and deals with innovative issues and concept oriented.",
//       rules: [
//         "1.Any Device with Camera is allowed ",
//         "2. The short film can be based on any open topic. ",
//         "3. Duration must be within 10-15 minutes.",
//       ],
//       rounds: [],
//       criteria:
//         "Judgement is precisely based on the effort and the creativity applied on the film making.Judgement will be provided in a single round.",
//       staff: ["Dr.R.C.Narayanan", "Prof.D.Vidhyabharathi"],
//       coordinators: [
//         "Mr.Jeeva K-8608781628 - 7708666522",
//         "Mr.Santhosh - 7094571688",
//       ],
//       organiser: ["Mr.Chiranjith Raghawa S", "Mr. Mohamed Niyas R"],
//       Hall: "200",
//       posterImg: "./assets/img.jpeg",
//       timing: "1 pm",
//       date: "06/05/2022",
//       tech: "Non Technical Event",
//       cardLogo: "./assets/super1.png",
//       cardDesc:
//         "Judgement is precisely based on the creativity applied by the participants.",
//     },
//     {
//       id: 10,
//       title: "MIND FIZZ",
//       desc: "A quiz is conducted to test the knowledge and cognitive skills of the participants.",
//       rules: [
//         "1. Mobile phones are not allowed ",
//         "2. Malpractice is strictly prohibited.",
//       ],
//       rounds: [
//         "First round will be based on multiple choice",
//         "Second round will be solving puzzles. Coordinate Details",
//       ],
//       criteria:
//         "Judgement is precisely based on the rank of scores obtained by the participants.",
//       staff: ["Dr.J.Jayanthi", "Dr.S.Anitha Elavarasi"],
//       coordinators: ["Ms.Nisha M - 7010489831", "Ms.Pavithra M - 9047616100"],
//       organiser: [
//         "Mr.Kesavan R",
//         "Mr.Mohammed Jameer K",
//         "Mr.Prasanth G",
//         "Mr.Prabhu M",
//       ],
//       Hall: "200",
//       posterImg: "./assets/img.jpeg",
//       timing: "1 pm",
//       date: "06/05/2022",
//       tech: "Non Technical Event",
//       cardLogo: "./assets/super1.png",
//       cardDesc:
//         "Judgement is precisely based on the rank of scores obtained by the participants.",
//     },
//     {
//       id: 11,
//       title: "Robotic Process Automation",
//       desc: "Robotic Process Automation (RPA) is a technology that that uses software robots to automate repetitive tasks and manual processes. RPA enhances the work of the employees by interacting with websites, business and desktop applications, databases and people to execute repetitive tasks. The software is programmed to do repetitive tasks across applications and systems. RPA is popular in financial services, Retail, Telecommunications, Education and many other domains. RPA is one of the recent trends and adds value to your CV.",
//       organiser: [
//         "Lorem - 9876543210",
//         "Lorem - 9876543210",
//         "Lorem - 9876543210",
//       ],
//       Hall: "200",
//       posterImg: "./assets/img.jpeg",
//       timing: "1 pm",
//       date: "05/05/2022",
//       tech: "Technical Event",
//       cardLogo: "./assets/super1.png",
//       cardDesc:
//         "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis inventore optio itaque ullam excepturi reprehenderit sequi quidem volupta",
//     },
//     {
//       id: 12,
//       title: "Mobile App Development",
//       desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
//       organiser: [
//         "Lorem - 9876543210",
//         "Lorem - 9876543210",
//         "Lorem - 9876543210",
//       ],
//       Hall: "200",
//       posterImg: "./assets/img.jpeg",
//       timing: "1 pm",
//       date: "05/05/2022",
//       tech: "Technical Event",
//       cardLogo: "./assets/super1.png",
//       cardDesc:
//         "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis inventore optio itaque ullam excepturi reprehenderit sequi quidem volupta",
//     },
//     {
//       id: 13,
//       title: "Web Development",
//       desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
//       organiser: [
//         "Lorem - 9876543210",
//         "Lorem - 9876543210",
//         "Lorem - 9876543210",
//       ],
//       Hall: "200",
//       posterImg: "./assets/img.jpeg",
//       timing: "1 pm",
//       date: "05/05/2022",
//       tech: "Technical Event",
//       cardLogo: "./assets/super1.png",
//       cardDesc:
//         "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis inventore optio itaque ullam excepturi reprehenderit sequi quidem volupta",
//     },
//   ]);

//   return (
//     <EventsContext.Provider value={events}>
//       {props.children}
//     </EventsContext.Provider>
//   );
// };

import { createContext, useState } from "react";

export const EventsContext = createContext();

export const EventsProvider = (props) => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Blind Code",
      desc: "Project 360 is a technical event in which the participants have to present the project ideas. Innovative project presentations and idea presentations are to be showcased with the help of ppt.",
      staff: [],
      coordinators: [
        "Ms.Kunguma Swetha A - 8248264840",
        "Ms.Lekha Dharashini - 8072788806",
      ],
      organiser: [
        "Ms.Harini K.K ",
        "Ms.Divya V.M",
        "Ms.Iswarya K",
        "Ms.Jayashree P",
      ],
      Hall: "200",
      staff: ["Prof.D.Balamurugan ", "Prof.J.Dhayanidhi"],
      posterImg: "./assets/Ad Zap.png",
      timing: "NA",
      date: "6/05/2022",
      tech: "Technical Event",
      criteria:
        "Judgement is precisely based on the rank of scores obtained by the participants.",
      rules: [
        "1. Mobile phones can be used. ",
        "2. Meme shouldn't be offensive or related to politics and religions.",
        "3. Plagiarism is strictly prohibited.",
        "4. No discussion among the participants during the event.",
      ],
      cardLogo: "./assets/super1.png",
      cardDesc:
        "Project 360 is a technical event in which the participants have to present the project ideas. Innovative project presentations and idea presentations are to be showcased with the help of ppt.",
      rounds: [
        "In the first-round participants are expected to present their ideas.",
        "In the second-round participants expected to present their projects.",
      ],
    },
    {
      id: 2,
      title: "Mergeware",
      desc: "Hunky Brains is to check the participant's cognitive thinking skills aptitude, verbal and reasoning problems within a given time. The participants are required to solve the given simple questions that are related to general aptitude.",
      criteria:
        "Judgement is precisely based on the rank of scores obtained by the participants.",
      staff: ["Prof.V.Vinodini", "Prof.R.Balaji "],
      coordinators: ["Ms.Anusha S-9384543668", "Ms.Abinaya S-9600345871"],
      organiser: [
        "Mr.Karthikeya",
        "Mr.Harish S",
        "Mr.Gowtham N",
        "Mr.Harish S.M",
      ],
      rules: [
        "1. Single member event. Therefore, team participation is not encouraged.",
        "2. Mobile phones and similar gadgets are strictly prohibited.",
        "3. No discussion among the participants during the event.",
      ],
      rounds: [
        "The first round consists of multiple-choice questions from quantitative aptitude, reasoning and verbal.",
        "The second round consists on multiple-choice questions from quantitative advanced aptitude,concepts of reasoning and verbal.",
      ],

      Hall: "200",
      posterImg: "./assets/img.jpeg",
      timing: "1 pm",
      date: "06/05/2022",
      tech: "Technical Event",
      cardLogo: "./assets/super1.png",
      cardDesc:
        "Hunky Brains is to check the participant's cognitive thinking skills aptitude, verbal and reasoning problems within a given time. The participants are required to solve the given simple questions that are related to general aptitude.",
    },
    {
      id: 3,
      title: "Web Dev",
      desc: "This event is based on developing a web page for the given scenario. Simple web pages are to be developed using HTML, CSS, etc., as per the requirement given.",
      Hall: "200",
      posterImg: "./assets/img.jpeg",
      timing: "1 pm",
      date: "05/05/2022",
      tech: "Technical Event",
      cardLogo: "./assets/super1.png",
      staff: ["Prof.M.Marimuthu", "Prof.G.Mohanraj"],
      rules: [],
      criteria:
        "Judgement is precisely based on the rank of scores obtained by the participants.",
      coordinators: [
        "Mr.Praveen Raj S - 7538858580",
        "Mr.Praveen Kumar M - 8245416861",
      ],
      organiser: [
        "Mr.Kavin Raj M",
        "Mr.Santhosh L",
        "Mr.Mathan Kumar M",
        "Mr.Prasanna Perumal P",
      ],
      rounds: [
        "The first round consists of multiple-choice questions related to web development.",
        "The second round is based on developing a web page.",
      ],
      cardDesc:
        "This event is based on developing a web page for the given scenario. Simple web pages are to be developed using HTML, CSS, etc., as per the requirement given.",
    },
    {
      id: 4,
      title: "Tech Show",
      desc: "This event is based on writing programs and code snippets for the given question. The participants are expected to code for the given scenario to get the required output.",
      criteria:
        "Judgement is precisely based on the rank of scores obtained by the participants.",
      staff: ["Dr.R.Sivakami", "Dr.V.Sathiya Moorthi"],
      coordinators: [
        "Mr.A R Muhil Raj - 8072498381",
        "Mr.S Kalaiyarasan-6379014934",
      ],
      organiser: [
        "Mr.Shreinik Jain U",
        "Mr.Senthil Sivaraman S",
        "Mr.Vickramadhityaa R.K",
        "Mr.Harshvardan S.M",
      ],
      rules: [
        "1. Single member event. Therefore, team participation is not encouraged.",
        "2. Mobile phones and similar gadgets are strictly prohibited.",
        "3. No discussion among the participants during the event.",
      ],
      rounds: [
        "The first round consists of multiple-choice questions related to coding.",
        "The second round is based on writing codes for given questions.",
      ],
      Hall: "200",
      posterImg: "./assets/img.jpeg",
      timing: "1 pm",
      date: "06/05/2022",
      tech: "Technical Event",
      cardLogo: "./assets/super1.png",
      cardDesc:
        "This event is based on writing programs and code snippets for the given question. The participants are expected to code for the given scenario to get the required output.",
    },
    {
      id: 5,
      title: "Tech Quiz",
      desc: "This event is based on writing queries in Structures Query Language (SQL). Simple scenarios will be provided as questions for which the participants are expected to write the queries such that it fetches the required output.",
      criteria:
        "Judgement is precisely based on the rank of scores obtained by the participants.",
      staff: ["Dr.V.Nandhini", "Dr.K.C.Rajeshwari"],
      coordinators: [
        "Ms.Indhirajothi S-9087060772",
        "Ms.Indhumathi C-8072400962",
      ],
      organiser: [
        "Ms.Priyadharshini ",
        "Ms.Preethisri S.S",
        "Ms.Mahapreetha",
        "Ms.Nishalini",
      ],
      rules: [
        "1. Single member event. Therefore, team participation is not encouraged.",
        "2. Mobile phones and similar gadgets are strictly prohibited.",
        "3. No discussion among the participants during the event.",
      ],
      rounds: [
        "The first round consists of multiple-choice questions from SQL.",
        "The second round is based on writing SQL queries.",
      ],
      Hall: "200",
      posterImg: "./assets/img.jpeg",
      timing: "1 pm",
      date: "06/05/2022",
      tech: "Technical Event",
      cardLogo: "./assets/super1.png",
      cardDesc:
        "This event is based on writing queries in Structures Query Language (SQL). Simple scenarios will be provided as questions for which the participants are expected to write the queries such that it fetches the required output.",
    },
    {
      id: 6,
      title: "Karaoke",
      desc: "This event is based on creating memes. A topic will be provided on spot for which the participants are expected to create ingenious memes.",
      rules: [
        "1. Mobile phones can be used. ",
        "2. Meme shouldn't be offensive or related to politics and religions.",
        "3. Plagiarism is strictly prohibited.",
        "4. No discussion among the participants during the event.",
      ],

      rounds: [
        "The first round is based on image meme",
        "The second round is based on video meme",
      ],
      criteria:
        "Judgement is precisely based on the creativity applied by the participants.",
      staff: ["Dr.S.Sakthivel"],

      coordinators: [
        "Mr.Madhan RI - 7010767487",
        "Mr.Parthasarathy S - 8870865343",
      ],
      organiser: [
        "Mr.Kavin Raj M",
        "Mr.Santhosh L",
        "Mr.Mathan Kumar M",
        "Mr.Prasanna Perumal P",
      ],

      Hall: "200",
      posterImg: "./assets/img.jpeg",
      timing: "1 pm",
      date: "06/05/2022",
      tech: "Non Technical Event",
      cardLogo: "./assets/super1.png",
      cardDesc:
        "Judgement is precisely based on the creativity applied by the participants.",
    },
    {
      id: 7,
      title: "Snapshots",
      desc: "A photograph is not only an image, an interpretation of the reality; it is also a trace, something directly stenciled off the real, like a footprint or a death mask. So this event is all about showcasing the creative and innovative skills on photography.",
      rules: [
        "1. Any Device with Camera is allowed. ",
        "2. Photo must be taken within the College campus based on the given topics.",
        "3. Minor Editing are allowed, if it is beyond that then it will be disqualified.",
      ],
      rounds: [],
      criteria:
        "Judgement is precisely based on the effort and the creativity applied on the photograph",
      staff: ["Dr.S.Sankar", "Prof.M.R.Sundar Kumar"],

      coordinators: [
        "Mr.Yogesh Kumar J K - 9791927277",
        "Ms.Sona R - 6380739006",
      ],
      organiser: [
        "Ms.Jaisree V",
        "Ms.Deepika M",
        "Ms.Gayathri M.L",
        "Ms.Jayapradaa G",
      ],
      Hall: "200",
      posterImg: "./assets/img.jpeg",
      timing: "1 pm",
      date: "06/05/2022",
      tech: "Non Technical Event",
      cardLogo: "./assets/super1.png",
      cardDesc:
        "Judgement is precisely based on the creativity applied by the participants.",
    },
    {
      id: 8,
      title: "Ad-Zap",
      desc: "Art is a vision on paper not to reproduce reality but to create a reality of same intensity. This event is based on pencil sketch and painting.",
      rules: [
        "1. Mobile phones can be used. ",
        "2. Malpractice is strictly prohibited. ",
        "3. No discussion during the event.",
      ],
      rounds: [
        "First round is based on pencil sketches on a given topic, no colors allowed.",
        "Second round will be painting on a given topic.",
      ],
      criteria:
        "Judgement is precisely based on the creativity applied by the participants.",
      staff: ["Dr.G.Kirubashri", "Prof.G.Vidhya"],
      coordinators: [
        "Ms.Priyadharashini P - 7708666522",
        "Ms.Madhu Harshini V H - 6379555234",
      ],
      organiser: [
        "Ms.Guru Lakshmi S",
        "Ms.Dhivya Bharathi P",
        "Ms.Ramya R",
        "Ms.Sindhu B",
      ],
      Hall: "200",
      posterImg: "./assets/img.jpeg",
      timing: "1 pm",
      date: "06/05/2022",
      tech: "Non Technical Event",
      cardLogo: "./assets/super1.png",
      cardDesc:
        "Art is a vision on paper not to reproduce reality but to create a reality of same...",
    },
    {
      id: 9,
      title: "Treasure Hunt",
      desc: "A short film is an audiovisual production that is mainly characterized by its short duration and deals with innovative issues and concept oriented.",
      rules: [
        "1.Any Device with Camera is allowed ",
        "2. The short film can be based on any open topic. ",
        "3. Duration must be within 10-15 minutes.",
      ],
      rounds: [],
      criteria:
        "Judgement is precisely based on the effort and the creativity applied on the film making.Judgement will be provided in a single round.",
      staff: ["Dr.R.C.Narayanan", "Prof.D.Vidhyabharathi"],
      coordinators: [
        "Mr.Jeeva K-8608781628 - 7708666522",
        "Mr.Santhosh - 7094571688",
      ],
      organiser: ["Mr.Chiranjith Raghawa S", "Mr. Mohamed Niyas R"],
      Hall: "200",
      posterImg: "./assets/img.jpeg",
      timing: "1 pm",
      date: "06/05/2022",
      tech: "Non Technical Event",
      cardLogo: "./assets/super1.png",
      cardDesc:
        "Judgement is precisely based on the creativity applied by the participants.",
    },
    {
      id: 10,
      title: "JAM",
      desc: "A quiz is conducted to test the knowledge and cognitive skills of the participants.",
      rules: [
        "1. Mobile phones are not allowed ",
        "2. Malpractice is strictly prohibited.",
      ],
      rounds: [
        "First round will be based on multiple choice",
        "Second round will be solving puzzles. Coordinate Details",
      ],
      criteria:
        "Judgement is precisely based on the rank of scores obtained by the participants.",
      staff: ["Dr.J.Jayanthi", "Dr.S.Anitha Elavarasi"],
      coordinators: ["Ms.Nisha M - 7010489831", "Ms.Pavithra M - 9047616100"],
      organiser: [
        "Mr.Kesavan R",
        "Mr.Mohammed Jameer K",
        "Mr.Prasanth G",
        "Mr.Prabhu M",
      ],
      Hall: "200",
      posterImg: "./assets/img.jpeg",
      timing: "1 pm",
      date: "06/05/2022",
      tech: "Non Technical Event",
      cardLogo: "./assets/super1.png",
      cardDesc:
        "Judgement is precisely based on the rank of scores obtained by the participants.",
    },
    {
      id: 11,
      title: "Robotic Process Automation",
      desc: "Robotic Process Automation (RPA) is a technology that that uses software robots to automate repetitive tasks and manual processes. RPA enhances the work of the employees by interacting with websites, business and desktop applications, databases and people to execute repetitive tasks. The software is programmed to do repetitive tasks across applications and systems. RPA is popular in financial services, Retail, Telecommunications, Education and many other domains. RPA is one of the recent trends and adds value to your CV.",
      organiser: ["Sharvesh A Pareek - 9443800178"],
      Hall: "IBM Lab",
      posterImg: "./assets/img.jpeg",
      timing: "10 am",
      date: "05/05/2022",
      tech: "Workshop",
      cardLogo: "./assets/super1.png",
      cardDesc:
        "RPA enhances the work of the employees by interacting with websites, business and desktop applications, databases and people to execute repetitive tasks.",
    },
    {
      id: 12,
      title: "Android App Development",
      desc: "Android accounts for approximately 85% of all devices sold today (2017 Q1). It only makes sense for you to be developing applications for the Android platform.I will take you through the basics of Android Application development, and introduce some more complex features as well. By completing this course, you will have more than just basic knowledge of Android Application Development.",
      organiser: [
        "Lorem - 9876543210",
        "Lorem - 9876543210",
        "Lorem - 9876543210",
      ],
      Hall: "Apple Lab",
      posterImg: "./assets/img.jpeg",
      timing: "10 am",
      date: "05/05/2022",
      tech: "Workshop",
      cardLogo: "./assets/super1.png",
      cardDesc:
        "Android accounts for approximately 85% of all devices sold today (2017 Q1). It only makes sense for you to be developing applications for the Android platform.",
    },
    {
      id: 13,
      title: "Internet of Things",
      desc: "The Internet of Things (IoT) refers to the billions of physical devices around the world connected over the internet that are collecting and sharing data.Thanks to the arrival of super-cheap computer chips and the ubiquity of wireless networks, it's possible to turn anything from something as small as a pen to something as big as an aeroplane, into a part of IoT. Connecting up all these different objects and adding sensors to them adds a level of digital intelligence to these devices whice would otherwise be dumb in nature. This enables them to communicate real-time data without involving a human being. The Internet of Things is making the fabric of the world around us more smarter and more responsive, merging both the digital and physical universes.",
      organiser: ["Prasanna N R - 9003599651", "Muralikrishnan P - 8124869745"],
      Hall: "IoT Lab",
      posterImg: "./assets/img.jpeg",
      timing: "10 am",
      date: "05/05/2022",
      tech: "Workshop",
      cardLogo: "./assets/super1.png",
      cardDesc:
        "it's possible to turn anything from something as small as a pen to something as big as an aeroplane, into a part of IoT.",
    },
  ]);

  return (
    <EventsContext.Provider value={events}>
      {props.children}
    </EventsContext.Provider>
  );
};
