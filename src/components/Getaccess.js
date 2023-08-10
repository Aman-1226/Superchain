import React from "react";

const Getaccess = () => {
  const showAlert = () => {
    return alert("Please fill the required field");
  };

  return (
    <>
      <div className="container-1">
        <div
          className="text-center"
          style={{ marginTop: "124px", fontSize: "67px" }}
        >
          Get Access
        </div>
        <p className="text-center" style={{ opacity: "0.5", fontSize: "26px" }}>
          Please fill in the form below:
        </p>
      </div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ margin: "84px 33px" }}
      >
        <div class="card" style={{ width: "31rem" }}>
          <div class="card-body">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                What is your name?
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter your name"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                What is your role?
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter your answer"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                What is the name of your organisation?
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter your answer"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                How and why would you like to use Superchain?
                <p style={{ fontSize: "11px", opacity: "0.5" }}>
                  Eg. I would like to use Superchain to gather data from all
                  dexes so I can route my trades between liquidity pools
                  efficiently and get the best price
                </p>
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter your Email address"
              />
            </div>
            <h6>
              (optional) If you'd like to connect with us on social media,
              please provide below
            </h6>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Twitter handle
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter your answer"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Telegram
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter your answer"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Linkedin
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter your answer"
              />
            </div>
            <button onClick={showAlert} type="button" class="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Getaccess;
