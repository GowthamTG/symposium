import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { validate } from "validate.js";
import styles from "./EventRegistrationForm.module.css";
import btsp from "./bootstrap.min.module.css";

function EventRegistrationForm() {
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
  const formRef = useRef();
  const [formErrors, setformErrors] = useState({
    name: [],
    email: [],
    phone: [],
    regno: [],
    year: [],
    department: [],
    college: [],
  });
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
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = validate.collectFormValues(formRef.current);
    const errors = validate(formData, validationRules);
    if (errors) {
      setformErrors(errors);
    } else {
      setformErrors({
        name: [],
        email: [],
        phone: [],
        regno: [],
        year: [],
        department: [],
        college: [],
      });
    }
  };

  return (
    <div className={styles["center-align"]}>
      <motion.div
        className={[
          btsp["col-md-4"],
          btsp["col-sm-8"],
          btsp["text-light"],
          btsp["border"],
          btsp["border-warning"],
          btsp["rounded"],
          btsp["p-3"],
          btsp["shadow"],
          btsp["p-3"],
          btsp["m-3"],
        ].join(" ")}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <h3>Event Registration Form</h3>
        <form ref={formRef} onSubmit={submitHandler}>
          <div className={btsp["mb-3"]}>
            <label htmlFor="name-inp" className={btsp["form-label"]}>
              Name
            </label>
            <motion.input
              type="text"
              id="name-inp"
              className={btsp["form-control"]}
              name="name"
              placeholder="Name"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
            {formErrors["name"] ? (
              formErrors.name.map((error) => (
                <motion.small
                  key={error}
                  className={btsp["text-danger"]}
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
          <div className={btsp["mb-3"]}>
            <label htmlFor="email-inp" className={btsp["form-label"]}>
              Email address
            </label>
            <motion.input
              type="email"
              id="email-inp"
              className={btsp["form-control"]}
              name="email"
              aria-describedby="emailHelp"
              placeholder="Email"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
            <div id="emailHelp" className={btsp["form-help"]}>
              We'll never share your email with anyone else.
            </div>
            {formErrors["email"] ? (
              formErrors.email.map((error) => (
                <small key={error} className={btsp["text-danger"]}>
                  {error}
                </small>
              ))
            ) : (
              <></>
            )}
          </div>
          <div className={btsp["mb-3"]}>
            <label htmlFor="phone-inp" className={btsp["form-label"]}>
              Phone Number
            </label>
            <motion.input
              type="text"
              id="phone-inp"
              className={btsp["form-control"]}
              name="phone"
              placeholder="Phone Number"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
            {formErrors["phone"] ? (
              formErrors.phone.map((error) => (
                <small key={error} className={btsp["text-danger"]}>
                  {error}
                </small>
              ))
            ) : (
              <></>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="regno-inp" className={btsp["form-label"]}>
              Reg No
            </label>
            <motion.input
              type="text"
              id="regno-inp"
              className={btsp["form-control"]}
              name="regno"
              placeholder="Reg No"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
            {formErrors["regno"] ? (
              formErrors.regno.map((error) => (
                <small key={error} className={btsp["text-danger"]}>
                  {error}
                </small>
              ))
            ) : (
              <></>
            )}
          </div>
          <div className={btsp["mb-3"]}>
            <label htmlFor="year-inp" className={btsp["form-label"]}>
              Year
            </label>
            <motion.select
              name="year"
              id="year-inp"
              className={btsp["form-select"]}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
            </motion.select>
            {formErrors["year"] ? (
              formErrors.year.map((error) => (
                <small key={error} className={btsp["text-danger"]}>
                  {error}
                </small>
              ))
            ) : (
              <></>
            )}
          </div>
          <div className={btsp["mb-3"]}>
            <label htmlFor="dept-inp" className={btsp["form-label"]}>
              Year
            </label>
            <motion.select
              name="department"
              className={btsp["form-select"]}
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
            {formErrors["department"] ? (
              formErrors.department.map((error) => (
                <small key={error} className={btsp["text-danger"]}>
                  {error}
                </small>
              ))
            ) : (
              <></>
            )}
          </div>
          <div className={btsp["mb-3"]}>
            <label htmlFor="college-inp" className={btsp["form-label"]}>
              College Name
            </label>
            <motion.input
              type="text"
              id="college-inp"
              className={btsp["form-control"]}
              name="college"
              placeholder="College Name"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
            {formErrors["college"] ? (
              formErrors.college.map((error) => (
                <small key={error} className={btsp["text-danger"]}>
                  {error}
                </small>
              ))
            ) : (
              <></>
            )}
          </div>
          <motion.input
            type="submit"
            className={[
              btsp["btn"],
              btsp["btn-outline-primary"],
              btsp["rounded-pill"],
              styles["gradient-background"],
            ].join(" ")}
            value={"Submit"}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          />
        </form>
      </motion.div>
    </div>
  );
}

export default EventRegistrationForm;
