import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { validate } from "validate.js";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

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
    <motion.div className="text-light border border-warning rounded p-3 shadow p-3 m-3"     animate={{ scale:[1,1.2,1] }}
    transition={{ duration: 2,delay:0.5 }}  >
      <h3>Event Registration Form</h3>
      <form ref={formRef} onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="name-inp" className="form-label">
            Name
          </label>
          <motion.input
            type="text"
            id="name-inp"
            className="form-control"
            name="name"
            placeholder="Name"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          />
          {formErrors["name"] ? (
            formErrors.name.map((error) => (
              <motion.small key={error} className="text-danger" animate={{ scale:[1,2,1] }} transition={{ duration: 2,delay:0.5 }}>
                {error}
              </motion.small>
            ))
          ) : (
            <></>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="email-inp" className="form-label">
            Email address
          </label>
          <motion.input
            type="email"
            id="email-inp"
            className="form-control"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Email"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
          {formErrors["email"] ? (
            formErrors.email.map((error) => (
              <small key={error} className="text-danger">
                {error}
              </small>
            ))
          ) : (
            <></>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="phone-inp" className="form-label">
            Phone Number
          </label>
          <motion.input
            type="text"
            id="phone-inp"
            className="form-control"
            name="phone"
            placeholder="Phone Number"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          />
          {formErrors["phone"] ? (
            formErrors.phone.map((error) => (
              <small key={error} className="text-danger">
                {error}
              </small>
            ))
          ) : (
            <></>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="regno-inp" className="form-label">
            Reg No
          </label>
          <motion.input
            type="text"
            id="regno-inp"
            className="form-control"
            name="regno"
            placeholder="Reg No"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          />
          {formErrors["regno"] ? (
            formErrors.regno.map((error) => (
              <small key={error} className="text-danger">
                {error}
              </small>
            ))
          ) : (
            <></>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="year-inp" className="form-label">
            Year
          </label>
          <motion.select name="year" id="year-inp" className="form-select" whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}>
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
          </motion.select>
          {formErrors["year"] ? (
            formErrors.year.map((error) => (
              <small key={error} className="text-danger">
                {error}
              </small>
            ))
          ) : (
            <></>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="dept-inp" className="form-label">
            Year
          </label>
          <motion.select name="department" className="form-select" id="dept-inp" whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}>
            {departments.map((department) => (
              <option key={department} value={department}>
                {department}
              </option>
            ))}
          </motion.select>
          {formErrors["department"] ? (
            formErrors.department.map((error) => (
              <small key={error} className="text-danger">
                {error}
              </small>
            ))
          ) : (
            <></>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="college-inp" className="form-label">
            College Name
          </label>
          <motion.input
            type="text"
            id="college-inp"
            className="form-control"
            name="college"
            placeholder="College Name"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          />
          {formErrors["college"] ? (
            formErrors.college.map((error) => (
              <small key={error} className="text-danger">
                {error}
              </small>
            ))
          ) : (
            <></>
          )}
        </div>
        <input type="submit" className={"btn btn-primary "} value={"Submit"} />
      </form>
    </motion.div>
  );
}

export default EventRegistrationForm;
