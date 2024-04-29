import { useRef, FormEvent } from "react";
import "./JoinUsForm.css";

interface JoinUsFormProps {
  title: string;
  sheetName: string;
}
export const JoinUsForm = ({ title, sheetName }: JoinUsFormProps) => {
  const formRef = useRef<HTMLFormElement>(null!);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const scriptUrl =
      "https://script.google.com/macros/s/AKfycbzS1h9XDbiqhuD_K-cDtyM1rEPmPj0Mc30yzs6jxJv10HZ0LIpwloDwUtXnquuew_YC/exec";
    e.preventDefault();

    const formData = new FormData(formRef.current);
    formData.append("sheetName", sheetName);

    fetch(scriptUrl, { method: "POST", body: formData })
      .then((res) => {
        console.log("SUCCESSFULLY SUBMITTED");
      })
      .catch((err) => console.log(err));
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
                placeholder="Full Name"
              />
            </div>
            <div className="col-md-6 mb-3">
              <input
                type="text"
                name="dob"
                className="form-control"
                placeholder="DOB (DD/MM/YYYY)"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <div className="col-md-6 mb-3">
              <input
                type="text"
                name="phoneNumber"
                className="form-control"
                placeholder="Phone Number"
              />
            </div>
            <div className="col-md-6 mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="areasAvailable"
              className="form-control"
              placeholder="Areas Available"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="skillSet"
              className="form-control"
              placeholder="Your Skill Set"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="availability"
              className="form-control"
              placeholder="Your Availability"
            />
          </div>
          <div className="mb-3 row">
            <div className="col-md-6 mb-3">
              <input
                type="text"
                name="state"
                className="form-control"
                placeholder="State"
              />
            </div>
            <div className="col-md-6 mb-3">
              <input
                type="text"
                name="city"
                className="form-control"
                placeholder="City"
              />
            </div>
          </div>
          <div className="mb-3 text-center">
            <button type="submit" className="btn btn-success px-5">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
