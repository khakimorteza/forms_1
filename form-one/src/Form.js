import React from "react";
import Radio from "./Radio.js";
import Selects from "./Selects.js";
import Checkbox from "./Checkboxs.js";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      reason: "",
      diet: "",
      country: "",
      formCompleted: false,
      formSubmitted: false,
      underwater: "",
      marital_status: "",
      stress_level: "",
      claustrophobic: "",
      siblings: false,
      parents: false,
      grandparents: false
    };
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      formCompleted: true
    });
  };

  handleCheckboxChange(event) {
    debugger;
    this.setState({
      [event.target.name]: event.target.checked
    });
  }

  // handleCheckboxChange(event) {
  //   if (event.target.id) {
  //     let newState = this.state[event.target.name];
  //     newState[event.target.id] = event.target.checked;
  //     this.setState({
  //       [event.target.name]: newState
  //     });
  //   } else {
  //     this.setState({
  //       [event.target.name]: event.target.checked
  //     });
  //   }
  // }

  handleConfirm = event => {
    event.preventDefault();
    this.setState({
      formSubmitted: true
    });
  };

  render() {
    const {
      name,
      reason,
      formCompleted,
      formSubmitted,
      diet,
      country,
      birthday
    } = this.state;

    console.log(this.state);

    if (!formSubmitted) {
      return (
        <>
          <h1>Mission to Mars Registration Form</h1>
          <div>
            <form className="form" onChange={this.handleChange}>
              <label htmlFor="name">
                Name <abbr title="required">*</abbr>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Full Name"
                value={name}
                id="name"
              />

              <Selects
                handleSelect={this.handleChange}
                birthday={this.state.birthday}
                diet={this.state.diet}
                country={this.state.country}
              />

              <label htmlFor="yourReason">
                Why do want to be a Mars Explorer?
              </label>
              <textarea
                rows="5"
                cols="25"
                wrap="soft"
                overflow="scroll"
                name="reason"
                placeholder="explain why we should select you!"
                type="text"
                id="reason"
                value={reason}
              />

              <Radio
                handleRadioChange={this.handleChange}
                underwater={this.state.underwater}
                marital_status={this.state.marital_status}
                stress_level={this.state.stress_level}
                claustrophobic={this.state.claustrophobic}
              />

              <Checkbox
                handleCheckboxChange={this.handleCheckboxChange}
                siblings={this.state.siblings}
                parents={this.state.parents}
                grandparents={this.state.grandparents}
              />

              <button onClick={this.handleSubmit}>Submit</button>
              <div className="formSubmit">
                <p>
                  {formCompleted
                    ? `
                  Your name: ${name}
                  DOB: ${birthday}
                  Diet: ${diet}
                  Reason: ${reason}
                  Country: ${country}
                  is the information correct?`
                    : ""}
                </p>
              </div>
            </form>
          </div>

          {formCompleted ? (
            <button onClick={this.handleConfirm}>Confirm</button>
          ) : (
            ""
          )}
        </>
      );
    } else {
      return (
        <>
          <p id="pageConfirm">
            You have successfully submitted the application!
          </p>
        </>
      );
    }
  }
}

export default Form;
