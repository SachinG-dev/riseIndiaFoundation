import { FormEvent, useRef, useState } from "react";
import { toast } from 'react-toastify';
import "./DonationForm.css";

export const DonationForm = () => {
  const formRef = useRef<HTMLFormElement>(null!);
  const [validFrom, setValidForm] = useState<boolean>(true);
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [panNumber, setPanNumber] = useState<string>("");
  const [pinCode, setpinCode] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const [isAmountErrored, setIsAmountErrored] = useState<boolean>(false);
  const [isFullNameErrored, setIsFullNameErrored] = useState<boolean>(false);
  const [isDobErrored, setIsDobErrored] = useState<boolean>(false);
  const [isPhoneNumberErrored, setIsPhoneNumberErrored] =
    useState<boolean>(false);
  const [isEmailErrored, setIsEmailErrored] = useState<boolean>(false);
    useState<boolean>(false);
  const [isPanNumberErrored, setIsPanNumberErrored] = useState<boolean>(false);
  const [isPinCodeErrored, setIsPinCodeErrored] =
    useState<boolean>(false);
  const [isAddressErrored, setIsAddressErrored] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log('paymentMethod==> ', paymentMethod);
    console.log('tt=> ', 
    validFrom,
    amount, 
    fullName, 
    dob, 
    phoneNumber, 
    email, 
    panNumber, 
    pinCode, 
    address,
  );

    e.preventDefault();
    // if (!validFrom) {
      const scriptUrl =
        "https://script.google.com/macros/s/AKfycbzS1h9XDbiqhuD_K-cDtyM1rEPmPj0Mc30yzs6jxJv10HZ0LIpwloDwUtXnquuew_YC/exec";

      const formData = new FormData(formRef.current);
      formData.append("sheetName", 'Donation');

      // Trim values before appending to formData
      const entriesArray = Array.from(formData.entries());
      for (const [name, value] of entriesArray) {
        if (typeof value === "string") {
          formData.set(name, value.trim());
        }
      }

      fetch(scriptUrl, { method: "POST", body: formData })
        .then((res) => {
          toast('Successfully submitted');
        })
        .catch((err) => console.log(err));
    // }
  };

  const onBlurHandler = (e: any) => {
    const { name, value } = e.target;

    // Regular expressions for field validation
    const amountRegex = /^\d{10}$/;
    const fullNameRegex = /^[a-zA-Z\s]{1,20}$/;
    const dobRegex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
    const phoneNumberRegex = /^\d{10}$/;
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    const panNumberRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
    const pinCodeRegex = /^\d{6}$/;
    const AddressRegex = /^.{1,30}$/;

    switch (name) {
      case "Amount":
        if (!amountRegex.test(value)) {
          setIsAmountErrored(true);
        }
        break;
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
      case "panNumber":
        if (!panNumberRegex.test(value)) {
          setIsPanNumberErrored(true);
        }
        break;
      case "pinCode":
        if (!pinCodeRegex.test(value)) {
          setIsPinCodeErrored(true);
        }
        break;
      case "Address":
        if (!AddressRegex.test(value)) {
          setIsAddressErrored(true);
        }
        break;
      default:
        break;
    }

    // Check if all fields are valid
    const isFormValid =
      amountRegex.test(amount) && 
      fullNameRegex.test(fullName) &&
      dobRegex.test(dob) &&
      phoneNumberRegex.test(phoneNumber) &&
      emailRegex.test(email) &&
      panNumberRegex.test(panNumber) &&
      pinCodeRegex.test(pinCode) &&
      paymentMethod &&
      AddressRegex.test(address);

    // Set the validForm state
    setValidForm(!isFormValid);
  };

  const onChangeHandler = (e: any) => {
    const { name, value } = e.target;
    switch (name) {
      case "paymentMethod":
        setPaymentMethod(value);
        break;
      case "amount":
        setAmount(value);
        if (value) {
          setIsAmountErrored(false);
        }
        break;
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
      case "panNumber":
        setPanNumber(value);
        if (value) {
          setIsPanNumberErrored(false);
        }
        break;
      case "pinCode":
        setpinCode(value);
        if (value) {
          setIsPinCodeErrored(false);
        }
        break;
      case "address":
        setAddress(value);
        if (value) {
          setIsAddressErrored(false);
        }
        break;
      default:
        break;
    }

    if (
      paymentMethod &&
      amount &&
      fullName &&
      dob &&
      phoneNumber &&
      email &&
      panNumber &&
      pinCode &&
      address
    ) {
      setValidForm(false);
    } else {
      setValidForm(true);
    }
  };

  return (
    <section className="donation">
      <div className="container">
        <h2 className="text-center fw-bold mb-4 font-dark-gray">I Pledge</h2>
        <form 
          className="donation__form"
          method="post"
          ref={formRef}
          name="google-sheet"
          onSubmit={handleSubmit}
        >
          <div className="mb-3 row">
            <label className="form-label col-md-4 col-form-label font-green donation__form--label">
              Payment Method
            </label>
            <div className="col-md-8 radio">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="once"
                  value="once"
                  defaultChecked
                />
                <label className="form-check-label radio--label" htmlFor="once">
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
                <label className="form-check-label radio--label" htmlFor="monthly">
                  MONTHLY
                </label>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="amount"
              className="form-control"
              placeholder="Amount*"
              onChange={onChangeHandler}
              onBlur={onBlurHandler}
            />
             {isAmountErrored && (
                <span className="text-danger pl-12">
                  <small>
                    Amount must be required and valid (accept digits
                    only)
                  </small>
                </span>
              )}
          </div>
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
          <div className="mb-3 row">
            <div className="col-md-6 mb-3">
              <input
                type="text"
                name="panNumber"
                className="form-control"
                placeholder="PAN Number*"
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
              {isPanNumberErrored && (
                <span className="text-danger pl-12">
                  <small>Pan Number must be required and valid (accept 10 alphanumeric)</small>
                </span>
              )}
            </div>
            <div className="col-md-6 mb-3">
              <input
                type="text"
                name="pinCode"
                className="form-control"
                placeholder="Pin Code*"
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
              {isPinCodeErrored && (
                <span className="text-danger pl-12">
                  <small>Pin Code must be required and valid (accept 6 digit only)</small>
                </span>
              )}
            </div>
          </div>

          <div className="mb-3 textarea">
            <textarea
              name="address"
              placeholder="Full Address*"
              className="form-control"
              rows={3}
              onChange={onChangeHandler}
              onBlur={onBlurHandler}
            ></textarea>
            {isAddressErrored && (
                <span className="text-danger pl-12">
                  <small>Address must be required and valid (accept upto 30 characters)</small>
                </span>
              )}
          </div>
          <div className="mb-3 text-center">
            <button type="submit" className="btn btn-success btn-height px-5 m-3">
              Donate
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
