const SALT = "salty";
var sha256 = require('js-sha256');

module.exports = (dbPoolInstance) => {

//Journal Database models
    let queryStatistics = (user_id, callback) => {

        let query = 'SELECT * FROM journals WHERE user_id = $1';
        let values = [user_id];

        dbPoolInstance.query(query, values, (error, queryResult) => {

            if (error) {
                callback(error, null);

            } else {

                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);

                } else {
                    callback(null, null);
                    // console.log("model errorssssssssssssssssssssssssssssssssss")
                    }
            }
        });
    };

    return {

        queryStatistics

    };
};