import React, { useState, useEffect } from "react";
import TutorialDataService from "../services/TutorialService";


const Tutorial = (props) => {
  const initialTutorialState = {
	account_no: null,
    balance:'',
    description: "",
    published: false,
	transaction:'',
	amount: 0,
	name: '',
	email: ''
	
  };
  const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState);
  const [message, setMessage] = useState("");

  const getTutorial = account_no => {
    TutorialDataService.get(account_no)
      .then(response => {
        setCurrentTutorial(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getTutorial(props.match?.params?.account_no);
  }, [props.match?.params?.account_no]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentTutorial({ ...currentTutorial, [name]: value });
  };

  const updatePublished = status => {
    var data = {
      account_no: currentTutorial.account_no,
      amount: currentTutorial.amount,
      description: currentTutorial.description,
      published: status
    };

    TutorialDataService.update(currentTutorial.id, data)
      .then(response => {
        setCurrentTutorial({ ...currentTutorial, published: status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateTutorial = () => {
    TutorialDataService.update(currentTutorial.id, currentTutorial)
      .then(response => {
        console.log(response.data);
        setMessage("The tutorial was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteTutorial = () => {
    TutorialDataService.remove(currentTutorial.account_no)
      .then(response => {
        console.log(response.data);
        props.history.push("/tutorials");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
	<div>
	{currentTutorial ? (
	  <div className="edit-form">
	    <h4>Transaction</h4>
	    <form>
	      <div className="form-group">
		<label htmlFor="title">Amount</label>
		<input
		  type="text"
		  className="form-control"
		  id="amount"
		  name="amount"
		  value={currentTutorial.amount}
		  onChange={handleInputChange}
		/>
	      </div>
	      <div className="form-group">
		<label htmlFor="description">Description</label>
		<input
		  type="text"
		  className="form-control"
		  id="description"
		  name="description"
		  value={currentTutorial.description}
		  onChange={handleInputChange}
		/>
	      </div>
  
	      <div className="form-group">
		<label>
		  <strong>Status:</strong>
		</label>
		{currentTutorial.published ? "Published" : "Pending"}
	      </div>
	    </form>
  
	    {currentTutorial.published ? (
	      <button
		className="badge badge-primary mr-2"
		onClick={() => updatePublished(false)}
	      >
		UnPublish
	      </button>
	    ) : (
	      <button
		className="badge badge-primary mr-2"
		onClick={() => updatePublished(true)}
	      >
		Publish
	      </button>
	    )}
  
	    <button className="badge badge-danger mr-2" onClick={deleteTutorial}>
	      Delete
	    </button>
  
	    <button
	      type="submit"
	      className="badge badge-success"
	      onClick={updateTutorial}
	    >
	      Update
	    </button>
	    <p>{message}</p>
	  </div>
	) : (
	  <div>
	    <br />
	    <p>Please click on a transaction...</p>
	  </div>
	)}

	
		
      </div>
	
    );
  };

export default Tutorial;