import "./JoinUsForm.css";

export const JoinUsForm = () => {
  return (
    <div className="joinUsFormSectionBackground">
      <div className="container p-4 ">
        <h2 className="text-center fw-bold">Join Us</h2>
        <form>
          <div className="mb-3 row">
            <div className="col-md-6 mb-3">
              <input
                type="text"
                id="fullName"
                className="form-control"
                placeholder="Full Name"
              />
            </div>
            <div className="col-md-6 mb-3">
              <input
                type="text"
                id="dob"
                className="form-control"
                placeholder="DOB (DD/MM/YYYY)"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <div className="col-md-6 mb-3">
              <input
                type="text"
                id="phoneNumber"
                className="form-control"
                placeholder="Phone Number"
              />
            </div>
            <div className="col-md-6 mb-3">
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="mb-3">
            <input
              type="text"
              id="areasAvailable"
              className="form-control"
              placeholder="Areas Available"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              id="skillSet"
              className="form-control"
              placeholder="Your Skill Set"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              id="availability"
              className="form-control"
              placeholder="Your Availability"
            />
          </div>
          <div className="mb-3 row">
            <div className="col-md-6 mb-3">
              <input
                type="text"
                id="state"
                className="form-control"
                placeholder="State"
              />
            </div>
            <div className="col-md-6 mb-3">
              <input
                type="text"
                id="city"
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
