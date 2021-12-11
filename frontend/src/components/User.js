import React, { useState } from "react";
import TutorialDataService from "../services/TutorialService";

const User = () => {
  const initialUserState = {
    ssn: '',
    name: "",
    phone_no: '',
    balance: "",
    bank_id:"",
    ba_number: "",
    pba_verified:''
  };
  const [user, setUser] = useState(initialUserState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const saveUser = () => {
    var data = {
      ssn: user.ssn,
      name: user.name,
      phone_no: user.phone_no,
      balance: user.balance,
      ba_no: user.ba_no,
      pba_verified: user.pba_verified

    };

    TutorialDataService.create(data)
      .then(response => {
        setUser({
          ssn: response.data.ssn,
          name: response.data.name,
          phone_no: response.data.phone_no,
          balance: response.data.balance,
          ba_no: response.data.ba_no,
          pba_verified: response.data.pba_verified
        
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newUser = () => {
    setUser(initialUserState);
    setSubmitted(false);
  };

  return (
	<div className="submit-form">
	{submitted ? (
	  <div>
	    <h4>User created successfully!</h4>
	    <button className="btn btn-success" onClick={newUser}>
	      Add
	    </button>
	  </div>
	) : (
	  <div>
       <div className="form-group">
	      <label htmlFor="description">Name</label>
	      <input
		type="text"
		className="form-control"
		id="name"
		required
		value={user.name}
		onChange={handleInputChange}
		name="name"
	      />
	    </div>
      <div className="form-group">
	      <label htmlFor="description">SSN</label>
	      <input
		type="number"
		className="form-control"
		id="ssn"
		required
		value={user.ssn}
		onChange={handleInputChange}
		name="ssn"
	      />
	    </div>
	    <div className="form-group">
	      <label htmlFor="amount">Amount</label>
	      <input
		type="number"
		className="form-control"
		id="amount"
		required
		value={user.amount}
		onChange={handleInputChange}
		name="amount"
	      />
	    </div>
        <div className="form-group">
          <label htmlFor="amount">Phone no</label>
          <input
              type="number"
              className="form-control"
              id="phone_no"
              required
              value={user.phone_no}
              onChange={handleInputChange}
              name="phone_no"
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Bank no</label>
          <input
              type="text"
              className="form-control"
              id="ba_no"
              required
              value={user.ba_no}
              onChange={handleInputChange}
              name="ba_no"
          />
        </div>
	    <button onClick={saveUser} className="btn btn-success">
	      Submit
	    </button>
	  </div>
	)}
      </div>
    );
  };
  

export default User;