module.exports = (sequelize, Sequelize) => {
    const has_additional = sequelize.define("has_additional", {
        SSN: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        bank_id: {
            type: Sequelize.UUID,
            allowNull: false,
        },
        bank_no: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        verified:{
            type: Sequelize.BOOLEAN
        },

    });

    return has_additional;
};