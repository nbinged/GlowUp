/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
const SALT = "salty";
var sha256 = require('js-sha256');
module.exports = (dbPoolInstance) => {

// `dbPoolInstance` is accessible within this function scope

//Adds the register page, form input data in to the database.

//////////////////////////////////////
//////////////MODELS//////////////////
//////////////////////////////////////

    let checkUserAccount = (username, callback) => {

        let query = 'SELECT username FROM users WHERE username = $1';
        let values = [username.toLowerCase()];
        dbPoolInstance.query(query, values, (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        });
    };

    let registerUser = (username, password, callback) => {

        let query = 'INSERT INTO users (username, password) VALUES($1,$2) RETURNING *';
        let values = [username.toLowerCase(), password];
        dbPoolInstance.query(query, values, (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    console.log('users model',queryResult.rows)
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        });
    };

    let logInUser = (username, password, callback) => {

        let query = 'SELECT * FROM users WHERE username = $1 AND password = $2';
        let values = [username.toLowerCase(), password];
        dbPoolInstance.query(query, values, (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        });
    };

    return {

        checkUserAccount,
        registerUser,
        logInUser
    };
};

