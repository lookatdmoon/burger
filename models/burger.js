// Import/Require ORM
var orm = require("../config/orm.js");

// Call  the ORM functions using burger specific input for the ORM.
var burger = {
    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    // valuesObject is an object containing key value pairs for the new data
    create: function (tableName, valuesObject, cb) {
        orm.insertOne("burgers", valuesObject, function (res) {
            cb(res);
        });
    },
    // searchCol and searchVal indicate which record is to be updated
    update: function (tableName, valuesObject, searchCol, searchVal, cb) {
        orm.updateOne("burgers", valuesObject, searchCol, searchVal, function (res) {
            cb(res);
        });
    }
};

// Export module
module.exports = burger;