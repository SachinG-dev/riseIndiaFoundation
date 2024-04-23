import "./DonationForm.css";

export const DonationForm = () => {
  return (
    <div className="donationSectionBackground">
      <div className="container">
        <h2>I Pledge</h2>
        <form>
          <div className="mb-3 row">
            <label className="form-label col-md-3 col-form-label fw-bold">
              Payment Method
            </label>
            <div className="col-md-9">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="once"
                  value="once"
                />
                <label className="form-check-label" htmlFor="once">
                  ONCE
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="monthly"
                  value="monthly"
                />
                <label className="form-check-label" htmlFor="monthly">
                  MONTHLY
                </label>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <input
              type="text"
              id="amount"
              className="form-control"
              placeholder="Amount"
            />
          </div>
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
          <div className="mb-3 row">
            <div className="col-md-6 mb-3">
              <input
                type="text"
                id="panCardNumber"
                className="form-control"
                placeholder="PAN Card Number"
              />
            </div>
            <div className="col-md-6 mb-3">
              <input
                type="text"
                id="pinCode"
                className="form-control"
                placeholder="Pin Code"
              />
            </div>
          </div>

          <div className="mb-3">
            <textarea
              id="fullAddress"
              placeholder="Full Address"
              className="form-control"
            ></textarea>
          </div>
          <div className="mb-3 text-center">
            <button type="submit" className="btn btn-success px-5 m-3">
              Donate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
