module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");
    const user_accounts = require('../controllers/tutorial.controller.js')
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", user_accounts.create);
  
    // Retrieve all Tutorials
    router.get("/", tutorials.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:account_no", tutorials.findOne);
  
    // Update a Tutorial with id
    router.put("/:account_no", tutorials.update);
  
    // Delete a Tutorial with id
    router.delete("/:account_no", tutorials.delete);
  
    // Delete all Tutorials
    router.delete("/", tutorials.deleteAll);
  
    //app.use('/api/tutorials', router);
    app.use('/api/user_accounts', router);
  };