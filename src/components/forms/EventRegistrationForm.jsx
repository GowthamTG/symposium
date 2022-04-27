import { motion } from "framer-motion";
import React, { useRef, useState, useContext } from "react";
import { validate } from "validate.js";
import EventRegistrationTypeWriter from "./EventRegistrationTypeWriter";
import { EventsContext } from "../../EventsContext";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  addDoc,
} from "firebase/firestore/lite";
import "./Form.css";

const EventRegistrationForm = (props) => {
  const departments = [
    "Mechanical Engineering",
    "Mechatronics Engineering",
    "Electrical & Electronics Engineering",
    "Electronics and Communication Engineering",
    "Biomedical Engineering",
    "Computer Science and Engineering",
    "Information Technology",
    "Artificial Integlligence and Data Science",
    "Fashion Technology",
    "Civil Engineering",
  ];

  const event = useContext(EventsContext);

  const errorsDefault = {
    name: [],
    email: [],
    phone: [],
    regno: [],
    year: [],
    department: [],
    college: [],
  };

  const formRef = useRef();
  const [formErrors, setformErrors] = useState(errorsDefault);

  const validationRules = {
    name: {
      presence: { allowEmpty: false },
      length: {
        minimum: 2,
        maximum: 128,
      },
    },
    email: {
      presence: { allowEmpty: false },
      email: true,
    },
    phone: {
      presence: { allowEmpty: false },
      format: {
        pattern: "[0-9]{10}",
        message: "Must be a valid phone number !",
      },
    },
    regno: {
      presence: { allowEmpty: false },
      length: {
        minimum: 5,
        maximum: 10,
      },
    },
    year: {
      presence: { allowEmpty: false, message: "Year can't be blank" },
      inclusion: {
        within: ["1", "2", "3", "4"],
        message: "Year cannot be blank !",
      },
    },
    department: {
      presence: { allowEmpty: false, message: "Department can't be blank" },
      inclusion: {
        within: departments,
        message: "Department cannot be blank !",
      },
    },
    college: {
      presence: { allowEmpty: false, message: "College Name can't be blank" },
    },
  };
  const firebaseConfig = {
    apiKey: "AIzaSyCZRWhePnY8wpRy57IjgZaPilFK-z3JplQ",
    authDomain: "threads22-cb396.firebaseapp.com",
    projectId: "threads22-cb396",
    storageBucket: "threads22-cb396.appspot.com",
    messagingSenderId: "1088732062082",
    appId: "1:1088732062082:web:128091aa2396e14fa2ef9b",
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  async function createUser(db, formData) {
    const userDoc = collection(db, "users");
    const res = await addDoc(userDoc, formData);
    console.log(res);
  }
  const submitHandler = (e) => {
    e.preventDefault();

    const formData = validate.collectFormValues(formRef.current);
    createUser(db, formData);
    // const errors = validate(formData, validationRules);
    // if (errors) {
    //   setformErrors(errors);
    // } else {
    //   setformErrors();
    //   createUser(db, formData);
    // }
  };

  return (
    <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
      <div className="wrapper wrapper--w960">
        <div className="card card-3">
          <div
            className="card-heading"
            style={{
              backgroundSize: "cover",
              background:
                'url("https://www.adobe.com/express/create/media_124e910d2174e5390ecd2ab60cc6200784e25282b.jpeg?width=400&format=jpeg&optimize=medium")',
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="card-body">
            <h2 className="description card-heading">
              <EventRegistrationTypeWriter />
            </h2>
            <form onSubmit={submitHandler}>
              <div className="input-group">
                <motion.input
                  name="name"
                  className="input--style-3"
                  type="text"
                  placeholder="Name"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
                {formErrors["name"] ? (
                  formErrors.name.map((error) => (
                    <motion.small
                      key={error}
                      className="text-red-500"
                      animate={{ scale: [1, 2, 1] }}
                      transition={{ duration: 2, delay: 0.5 }}
                    >
                      {error}
                    </motion.small>
                  ))
                ) : (
                  <></>
                )}
              </div>
              <div className="input-group">
                <motion.input
                  name="email"
                  type="email"
                  className="input--style-3"
                  placeholder="Email"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
                {formErrors["email"] ? (
                  formErrors.email.map((error) => (
                    <small key={error} className="text-red-500">
                      {error}
                    </small>
                  ))
                ) : (
                  <></>
                )}
              </div>
              <div className="input-group">
                <motion.input
                  name="phone"
                  className="input--style-3"
                  type="text"
                  placeholder="Phone Number"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
                {formErrors["phone"] ? (
                  formErrors.phone.map((error) => (
                    <small key={error} className="text-red-500">
                      {error}
                    </small>
                  ))
                ) : (
                  <></>
                )}
              </div>
              <div className="input-group">
                <motion.input
                  name="regno"
                  className="input--style-3"
                  type="text"
                  placeholder="Reg No"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
                {formErrors["regno"] ? (
                  formErrors.regno.map((error) => (
                    <small key={error} className={"text-red-500"}>
                      {error}
                    </small>
                  ))
                ) : (
                  <></>
                )}
              </div>
              <div className="input-group">
                <div className="rs-select2 js-select-simple select--no-search">
                  <motion.select
                    name="year"
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                  </motion.select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                  {formErrors["year"] ? (
                    formErrors.year.map((error) => (
                      <small key={error} className="text-red-500">
                        {error}
                      </small>
                    ))
                  ) : (
                    <></>
                  )}

                  <div className="select-dropdown"></div>
                </div>
              </div>
              <div className="input-group">
                <div className="rs-select2 js-select-simple select--no-search">
                  <motion.select
                    name="department"
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="dept-inp"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    {departments.map((department) => (
                      <option key={department} value={department}>
                        {department}
                      </option>
                    ))}
                  </motion.select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="input-group">
                <input
                  className="input--style-3"
                  type="text"
                  placeholder="College Name"
                  name="college"
                />
                {formErrors["college"] ? (
                  formErrors.college.map((error) => (
                    <small key={error} className="text-red-500">
                      {error}
                    </small>
                  ))
                ) : (
                  <></>
                )}
              </div>
              <div className="p-t-10">
                <button className="btn btn--pill btn--green" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventRegistrationForm;
