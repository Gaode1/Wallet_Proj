import React, { useState } from "react";
import TutorialDataService from "../services/TutorialService";

const AddTutorial = () => {
  const initialTutorialState = {
    id: null,
    description: "",
    published: true,
    amount: "",
    transaction:"",
    email: "",
    name: "",
  };
  const [tutorial, setTutorial] = useState(initialTutorialState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const saveTutorial = () => {
    var data = {
      amount: tutorial.amount,
      description: tutorial.description,
      transaction: tutorial.transaction,
      email: tutorial.email,
      name: tutorial.name,
      published: tutorial.published,
    };

    TutorialDataService.create(data)
      .then(response => {
        setTutorial({
          account_no: response.account_no,
          amount: response.data.amount,
          description: response.data.description,
          published: response.data.published,
          transaction: response.data.transaction,
          name: response.data.name,
          email: response.data.email,
          balance: response.data.balance,
        
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newTutorial = () => {
    setTutorial(initialTutorialState);
    setSubmitted(false);
  };

  return (
	<div className="submit-form">
	{submitted ? (
	  <div>
	    <h4>You submitted successfully!</h4>
	    <button className="btn btn-success" onClick={newTutorial}>
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
		value={tutorial.name}
		onChange={handleInputChange}
		name="name"
	      />
	    </div>
      <div className="form-group">
	      <label htmlFor="description">Email</label>
	      <input
		type="email"
		className="form-control"
		id="email"
		required
		value={tutorial.email}
		onChange={handleInputChange}
		name="email"
	      />
	    </div>
	    <div className="form-group">
	      <label htmlFor="amount">Amount</label>
	      <input
		type="number"
		className="form-control"
		id="amount"
		required
		value={tutorial.amount}
		onChange={handleInputChange}
		name="amount"
	      />
	    </div>

      <div className="form-group">
      <label htmlFor="amount">Transaction</label>
      <select className="form-select" aria-label="select Transaction Type" name="transaction" value={tutorial.transaction} onChange={handleInputChange}>
      <option selected>Select a Transaction Type</option>
      <option name="transaction">Send</option>
      <option name="transaction">Request</option>
      </select>
      </div>
    
	    <div className="form-group">
	      <label htmlFor="description">Description</label>
	      <input
		type="text"
		className="form-control"
		id="description"
		required
		value={tutorial.description}
		onChange={handleInputChange}
		name="description"
	      />
	    </div>

	    <button onClick={saveTutorial} className="btn btn-success">
	      Submit
	    </button>
	  </div>
	)}
      </div>
    );
  };
  

export default AddTutorial;