/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */

const SALT = "salty";
var sha256 = require('js-sha256');
module.exports = (dbPoolInstance) => {

//Journal Database models
    let addSingleJournals = (form, callback) => {

        let query = 'INSERT INTO journals (user_id, username, journal_date, skin_rating, journal_notes, image_file) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *';
        let values = [form.user_id, form.username, form.journal_date, form.skin_rating, form.journal_notes, form.image_file];

        dbPoolInstance.query(query, values, (error, queryResult) => {
            if (error) {

                // invoke callback function with results after query has executed
                callback(error, null);
                console.log('error')

            } else {

                // invoke callback function with results after query has executed

                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                    // console.log('model database');
                    console.log(queryResult.rows);
                    console.log('it works')

                } else {
                    callback(null, null);
                    console.log('error')

                }
            }
        });
    };

    let viewAllJournals = (username, callback) =>  {

        let query = 'SELECT * FROM journals WHERE username = $1';
        let values = [username];
        console.log("valuesssssssssssssss",values)

        dbPoolInstance.query(query,values, (error, queryResult) => {
            if (error) {

                // invoke callback function with results after query has executed
                callback(error, null);

            } else {

                // invoke callback function with results after query has executed

                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);

                } else {
                    callback(null, null);

                }
            }
        });
    };





    return {

        addSingleJournals,
        viewAllJournals
    };
};
        // viewSingleJournal,
        // viewEditSingleJournal,
        // viewDeleteJournal,
        // editSingleJournal,
        // deleteSingleJournal
