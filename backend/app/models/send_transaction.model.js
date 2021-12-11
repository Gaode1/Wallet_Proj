module.exports = (sequelize, Sequelize) => {
    const send_transaction = sequelize.define("send_transaction", {
        ST_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        amount: {
            type: Sequelize.INTEGER,
        },
        date_time: {
            type: Sequelize.DATE,
        },

        memo:{
            type: Sequelize.STRING
        },
        cancel_reason:{
            type: Sequelize.STRING
        },
        id:{
            type: Sequelize.INTEGER
        },
        SSN: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
    });

    return send_transaction;
};