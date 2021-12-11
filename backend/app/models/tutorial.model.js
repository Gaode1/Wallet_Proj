module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", {
      account_no: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      name:{
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      balance: {
        type: Sequelize.FLOAT
      },
      transaction:{
        type: Sequelize.STRING
      },
      amount:{
        type: Sequelize.FLOAT
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN,
        // values: ['completed', 'pending', 'failed']
      }
    });
  
    return Tutorial;
  };