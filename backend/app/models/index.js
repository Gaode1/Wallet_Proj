const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.bank_account = require("./bank_account.model.js")(sequelize, Sequelize);
db.elect_add = require("./elect_add.model.js")(sequelize, Sequelize);
db.email = require("./email.model.js")(sequelize, Sequelize);
db.from = require("./from.model.js")(sequelize, Sequelize);
db.has_additional = require("./has_additional.model.js")(sequelize, Sequelize);
db.request_transaction = require("./request_transaction.model.js")(sequelize, Sequelize);
db.send_transaction = require("./send_transaction.model.js")(sequelize, Sequelize);
db.user_account = require("./user_account.model.js")(sequelize, Sequelize);

module.exports = db;