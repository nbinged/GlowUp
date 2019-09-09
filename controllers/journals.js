var sha256 = require('js-sha256');
var cloudinary = require('cloudinary');
var multer = require('multer');
var upload = multer({ dest: './uploads/' });
const SALT = "salt";

// cloudinary.config({
//  cloud_name: 'dskhk41q0',
//  api_key: '132425881292614',
//  api_secret: 'FbwoeN7oPBRCBwv-Z1n_kQcq4U4'
// });

// var envForCloudinary = require("../index.env")

module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let viewAddJournalsControllerCallback = (request, response) => {
        let cookies = request.cookies;

        let cookieName = request.cookies.username;
        let storedCookie = request.cookies.logged_in;

        if (storedCookie === undefined) {
            response.send('please log in!')

            } else {
                    let sessionCookieCheck = sha256(cookieName+'loggedin'+SALT)
                    if ( storedCookie === sessionCookieCheck ) {

                         response.render('./journals/addJournals', cookies);
                    }

                        else {
                            response.send('Something went wrong')
                        }
                }
    };


    let addJournalsControllerCallback = (request, response) => {

                // let cookierequest = request.cookies;
                console.log('controllersssssssssssssssssssssssssssssssssss bodiessssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss')
                console.log(request.body)

                    db.journals.addSingleJournals(request.body,(error, callback) => {

                        let data = {
                                journals : callback
                                    }

                            response.redirect('home');
        });
    };

    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */

    return {

           viewAddJournals: viewAddJournalsControllerCallback,
           addSingleJournals : addJournalsControllerCallback

//         getEditJournals: editViewedJournalsControllerCallback,
//         editJournals: editJournalsControllerCallback,

//         getDeleteJournals: deleteViewedJournalsControllerCallback,
//         deleteJournals: deleteJournalsControllerCallback

    };

}