module.exports = (sequelize, Sequelize) => {
    const user_account = sequelize.define("user_account", {
        ssn: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
        },
        phone_no: {
            type: Sequelize.INTEGER,
        },
        ba_id: {
            type: Sequelize.INTEGER,
        },
        ba_no :{
            type: Sequelize.INTEGER
        },
        pba_verified: {
            type: Sequelize.STRING,
        },
    });


    return user_account;
};