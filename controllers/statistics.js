var sha256 = require('js-sha256');
// var cloudinary = require('cloudinary');
// var multer = require('multer');
// var upload = multer({ dest: './uploads/' });
const SALT = "salt";

module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let viewStatisticsControllerCallback = (request, response) => {
        // let cookies = request.cookies;

        let cookieName = request.cookies.username;
        let cookieID = request.cookies.userID;
        // console.log(request.cookies.userID)

        let storedCookie = request.cookies.logged_in;
        let sessionCookieCheck = sha256(cookieName+'loggedin'+SALT)

            if (storedCookie === undefined) {
                response.send('please log in!')

                } else {

                    db.statistics.queryStatistics(cookieID, (error, callback) => {

                        if (error) {
                                console.log("error in getting file", error);

                        } else {

                            if ( storedCookie === sessionCookieCheck ) {

                                let data = {
                                    journaldata : callback,
                                    cookieUser : cookieID
                            }

                            response.render('./statistics/statistics',data)

                        } else {

                            console.log('Something went wrong in the controllers')
                            response.send('Username or password is wrong')

                            }
                        }

                    });
                };
        };

    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */

    return {

           viewStatistics : viewStatisticsControllerCallback
    };

}