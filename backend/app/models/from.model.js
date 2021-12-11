module.exports = (sequelize, Sequelize) => {
    const from = sequelize.define("from", {
        RT_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        percentage: {
            type: Sequelize.FLOAT,
        },
    });

    return from;
};