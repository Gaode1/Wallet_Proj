module.exports = (sequelize, Sequelize) => {
    const bank_account = sequelize.define("bank_account", {
        ba_id: {
            type: Sequelize.UUID,
            primaryKey: true,
            allowNull: false,
        },
        ba_number: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true,
        },
    });

    return bank_account;
};