const db = require("../models/index.js");
const Tutorial = db.tutorials;
const User = db.user_accounts;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Val account_no at request
    if (!req.body.amount) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }

    //Create a Tutorial
    // const tutorial = {
    //   balance: req.body.balance,
    //   amount: req.body.amount,
    //   transaction: req.body.transaction,
    //   description: req.body.description,
    //   published: req.body.published,
    //   account_no: req.body.account_no,
    //   name: req.body.name,
    //   email: req.body.email,
    // };

    //Create a User
    const user = {
        ssn: req.body.ssn,
        name: req.body.name,
        phone_no: req.body.phone_no,
        balance: req.body.balance,
        ba_no: req.body.ba_no,
        pba_verified: req.body.pba_verified,
        ba_id: req.body.ba_id
    };

    //save user in the database
    user_accounts.create(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the User."
            });
        });

    // Save Tutorial in the database
    Tutorial.create(tutorial)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  };

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const transaction = req.query.transaction;
    var condition = transaction ? { transaction: { [Op.like]: `%${transaction}%` } } : null;
  
    Tutorial.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving transactions."
        });
      });
  };

// Find a single Tutorial with an account_no
exports.findOne = (req, res) => {
    const account_no = req.params.account_no;
  
    Tutorial.findByPk(account_no)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Tutorial with account_no=${account_no}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with account_no=" + account_no
        });
      });
  };

  exports.update = (req, res) => {
    const account_no = req.params.account_no;
  
    Tutorial.update(req.body, {
      where: { account_no: account_no },
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Tutorial with account_no=${account_no}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with account_no=" + account_no
        });
      });
  };

// Delete a Tutorial with the specified account_no in the request
exports.delete = (req, res) => {
    const account_no = req.params.account_no;
  
    Tutorial.destroy({
      where: { account_no: account_no }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Tutorial with account_no=${account_no}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with account_no=" + account_no
        });
      });
  };

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Tutorial.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Tutorials were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all tutorials."
        });
      });
  };
// Find all published Tutorials
exports.findAllPublished = (req, res) => {
    Tutorial.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };