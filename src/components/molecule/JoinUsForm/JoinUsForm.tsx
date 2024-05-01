import { useRef, FormEvent, useState } from "react";
import "./JoinUsForm.css";

interface JoinUsFormProps {
  title: string;
  sheetName: string;
}
export const JoinUsForm = ({ title, sheetName }: JoinUsFormProps) => {
  const formRef = useRef<HTMLFormElement>(null!);
  const [validFrom, setValidForm] = useState<boolean>(true);
  const [fullName, setFullName] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [areasAvailable, setAreasAvailable] = useState<string>("");
  const [skillSet, setSkillSet] = useState<string>("");
  const [availability, setAvailability] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [city, setCity] = useState<string>("");

  const [isFullNameErrored, setIsFullNameErrored] = useState<boolean>(false);
  const [isDobErrored, setIsDobErrored] = useState<boolean>(false);
  const [isPhoneNumberErrored, setIsPhoneNumberErrored] =
    useState<boolean>(false);
  const [isEmailErrored, setIsEmailErrored] = useState<boolean>(false);
  const [isAreasAvailableErrored, setIsAreasAvailableErrored] =
    useState<boolean>(false);
  const [isSkillSetErrored, setIsSkillSetErrored] = useState<boolean>(false);
  const [isAvailabilityErrored, setIsAvailabilityErrored] =
    useState<boolean>(false);
  const [isStateErrored, setIsStateErrored] = useState<boolean>(false);
  const [isCityErrored, setIsCityErrored] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (!validFrom) {
      const scriptUrl =
        "https://script.google.com/macros/s/AKfycbzS1h9XDbiqhuD_K-cDtyM1rEPmPj0Mc30yzs6jxJv10HZ0LIpwloDwUtXnquuew_YC/exec";
      e.preventDefault();

      const formData = new FormData(formRef.current);
      formData.append("sheetName", sheetName);

      // Trim values before appending to formData
      const entriesArray = Array.from(formData.entries());
      for (const [name, value] of entriesArray) {
        if (typeof value === "string") {
          formData.set(name, value.trim());
        }
      }

      fetch(scriptUrl, { method: "POST", body: formData })
        .then((res) => {
          console.log("SUCCESSFULLY SUBMITTED");
        })
        .catch((err) => console.log(err));
    }
  };

  const onBlurHandler = (e: any) => {
    const { name, value } = e.target;

    // Regular expressions for field validation
    const fullNameRegex = /^[a-zA-Z\s]{1,20}$/;
    const dobRegex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
    const phoneNumberRegex = /^\d{10}$/;
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    const areaRegex = /^.{1,30}$/;
    const skillSetRegex = /^.{1,80}$/;
    const availabilityRegex = /^.{1,30}$/;
    const stateRegex = /^[a-zA-Z\s]{1,20}$/;
    const cityRegex = /^[a-zA-Z\s]{1,20}$/;

    switch (name) {
      case "fullName":
        if (!fullNameRegex.test(value)) {
          setIsFullNameErrored(true);
        }
        break;
      case "dob":
        if (!dobRegex.test(value)) {
          setIsDobErrored(true);
        }
        break;
      case "phoneNumber":
        if (!phoneNumberRegex.test(value)) {
          setIsPhoneNumberErrored(true);
        }
        break;
      case "email":
        if (!emailRegex.test(value)) {
          setIsEmailErrored(true);
        }
        break;
      case "areasAvailable":
        if (!areaRegex.test(value)) {
          setIsAreasAvailableErrored(true);
        }
        break;
      case "skillSet":
        if (!skillSetRegex.test(value)) {
          setIsSkillSetErrored(true);
        }
        break;
      case "availability":
        if (!availabilityRegex.test(value)) {
          setIsAvailabilityErrored(true);
        }
        break;
      case "state":
        if (!stateRegex.test(value)) {
          setIsStateErrored(true);
        }
        break;
      case "city":
        if (!cityRegex.test(value)) {
          setIsCityErrored(true);
        }
        break;
      default:
        break;
    }

    // Check if all fields are valid
    const isFormValid =
      fullNameRegex.test(fullName) &&
      dobRegex.test(dob) &&
      phoneNumberRegex.test(phoneNumber) &&
      emailRegex.test(email) &&
      areaRegex.test(areasAvailable) &&
      skillSetRegex.test(skillSet) &&
      availabilityRegex.test(availability) &&
      stateRegex.test(state) &&
      cityRegex.test(city);

    // Set the validForm state
    setValidForm(!isFormValid);
  };

  const onChangeHandler = (e: any) => {
    const { name, value } = e.target;
    switch (name) {
      case "fullName":
        setFullName(value);
        if (value) {
          setIsFullNameErrored(false);
        }
        break;
      case "dob":
        setDob(value);
        if (value) {
          setIsDobErrored(false);
        }
        break;
      case "phoneNumber":
        setPhoneNumber(value);
        if (value) {
          setIsPhoneNumberErrored(false);
        }
        break;
      case "email":
        setEmail(value);
        if (value) {
          setIsEmailErrored(false);
        }
        break;
      case "areasAvailable":
        setAreasAvailable(value);
        if (value) {
          setIsAreasAvailableErrored(false);
        }
        break;
      case "skillSet":
        setSkillSet(value);
        if (value) {
          setIsSkillSetErrored(false);
        }
        break;
      case "availability":
        setAvailability(value);
        if (value) {
          setIsAvailabilityErrored(false);
        }
        break;
      case "state":
        setState(value);
        if (value) {
          setIsStateErrored(false);
        }
        break;
      case "city":
        setCity(value);
        if (value) {
          setIsCityErrored(false);
        }
        break;
      default:
        break;
    }

    if (
      fullName &&
      dob &&
      phoneNumber &&
      email &&
      areasAvailable &&
      skillSet &&
      availability &&
      state &&
      city
    ) {
      setValidForm(false);
    } else {
      setValidForm(true);
    }
  };

  return (
    <div className="joinUsFormSectionBackground">
      <div className="container p-4 ">
        <h2 className="text-center fw-bold">{title}</h2>
        <form
          method="post"
          ref={formRef}
          name="google-sheet"
          onSubmit={handleSubmit}
        >
          <div className="mb-3 row">
            <div className="col-md-6 mb-3">
              <input
                type="text"
                name="fullName"
                className="form-control"
                placeholder="Full Name*"
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
              {isFullNameErrored && (
                <span className="text-danger pl-12">
                  <small>
                    Full Name must be required and valid (accept 20 char max)
                  </small>
                </span>
              )}
            </div>
            <div className="col-md-6 mb-3">
              <input
                type="date"
                name="dob"
                className="form-control"
                placeholder="DOB* (DD/MM/YYYY)"
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
                max={new Date().toISOString().split("T")[0]}
              />
              {isDobErrored && (
                <span className="text-danger pl-12">
                  <small>DOB must be required and valid</small>
                </span>
              )}
            </div>
          </div>
          <div className="mb-3 row">
            <div className="col-md-6 mb-3">
              <input
                type="text"
                name="phoneNumber"
                className="form-control"
                placeholder="Phone Number*"
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
              {isPhoneNumberErrored && (
                <span className="text-danger pl-12">
                  <small>
                    Phone Number must be required and valid (accept 10 digit
                    only)
                  </small>
                </span>
              )}
            </div>
            <div className="col-md-6 mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email*"
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
              {isEmailErrored && (
                <span className="text-danger pl-12">
                  <small>Email must be required and valid</small>
                </span>
              )}
            </div>
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="areasAvailable"
              className="form-control"
              placeholder="Areas Available*"
              onChange={onChangeHandler}
              onBlur={onBlurHandler}
            />
            {isAreasAvailableErrored && (
              <span className="text-danger pl-12">
                <small>
                  Areas Available must be required and valid (accept 30 char
                  max)
                </small>
              </span>
            )}
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="skillSet"
              className="form-control"
              placeholder="Your Skill Set*"
              onChange={onChangeHandler}
              onBlur={onBlurHandler}
            />
            {isSkillSetErrored && (
              <span className="text-danger pl-12">
                <small>
                  Skill Set must be required and valid (eg: Teamwork, Conveying
                  information )
                </small>
              </span>
            )}
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="availability"
              className="form-control"
              placeholder="Your Availability*"
              onChange={onChangeHandler}
              onBlur={onBlurHandler}
            />
            {isAvailabilityErrored && (
              <span className="text-danger pl-12">
                <small>
                  Availability must be required and valid (accept 30 char max)
                </small>
              </span>
            )}
          </div>
          <div className="mb-3 row">
            <div className="col-md-6 mb-3">
              <input
                type="text"
                name="state"
                className="form-control"
                placeholder="State*"
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
              {isStateErrored && (
                <span className="text-danger pl-12">
                  <small>State must be required and valid</small>
                </span>
              )}
            </div>
            <div className="col-md-6 mb-3">
              <input
                type="text"
                name="city"
                className="form-control"
                placeholder="City*"
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
              {isCityErrored && (
                <span className="text-danger pl-12">
                  <small>City must be required and valid</small>
                </span>
              )}
            </div>
          </div>
          <div className="mb-3 text-center">
            <button
              type="submit"
              className="btn btn-success px-5"
              disabled={validFrom}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
