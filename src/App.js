import React, { useState } from "react";
import "./App.css";

interface BasicFormInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  age: number;
}

interface BasicFormProps {
  onSubmit: (data: BasicFormInput) => void;
}

interface BasicFormState extends BasicFormInput {
  success: boolean;
}

class BasicForm extends React.Component<BasicFormProps, BasicFormState> {
  state: BasicFormState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    age: 0,
    success: false,
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { firstName, lastName, email, password, age } = this.state;
    this.props.onSubmit({ firstName, lastName, email, password, age });
    this.setState({ success: true });
  };

  render() {
    const { firstName, lastName, email, password, age, success } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Last Name
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Age
          <input
            type="number"
            name="age"
            value={age}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
        {success && <p>Data loaded successfully!</p>}
      </form>
    );
  }
}

interface ExtendedFormInput extends BasicFormInput {
  address: string;
  phone: string;
}

interface ExtendedFormProps extends BasicFormProps {}

interface ExtendedFormState extends BasicFormState, ExtendedFormInput {}

class ExtendedForm extends BasicForm {
  state: ExtendedFormState = {
    ...super.state,
    address: "",
    phone: "",
  };

  handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { firstName, lastName, email, password, age, address, phone } = this.state;
    this.props.onSubmit({ firstName, lastName, email, password, age, address, phone });
    this.setState({ success: true });
  };
   render() {
    const { firstName, lastName, email, password, age, address, phone, success } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name 
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Last Name
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Email 
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Password 
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Age 
          <input
            type="number"
            name="age"
            value={age}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Address 
          <input
            type="text"
            name="address"
            value={address}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Phone 
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
        {success && <p>Data loaded successfully!</p>}
      </form>
    );
  }
}

const App = () => {
  const handleSubmit = (data: FormInput) => {
    console.log(data);
  };

  return (
    <div className="App">
      <p>Basic Interface </p>
      <BasicForm onSubmit={handleSubmit} />
      <p> Extended Interface </p>
      <ExtendedForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;