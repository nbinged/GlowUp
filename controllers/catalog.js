var sha256 = require('js-sha256');
var cloudinary = require('cloudinary');
var multer = require('multer');
var upload = multer({ dest: './uploads/' });
const SALT = "salt";

cloudinary.config({
 cloud_name: 'dskhk41q0',
 api_key: '132425881292614',
 api_secret: 'FbwoeN7oPBRCBwv-Z1n_kQcq4U4'
});

// var envForCloudinary = require("../index.env")

module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */


     let indexControllerCallback = (request, response) => {
      response.redirect('register');
    };

    let showRegisterControllerCallback = (request, response) => {
      response.render('register');
    };

    let registerControllerCallback = (request, response) => {
        let username = request.body.username;
        let password = sha256(request.body.password);
        db.users.checkUserAccount(username,(error, callback) => {
            if (callback) {
                response.redirect('/?err=register');
            }
            else {
                db.users.registerUser(username, password,(error, callback) => {
                    if (callback) {
                        response.cookie('logged_in', sha256(callback[0].username+"loggedin"+SALT));
                        response.cookie('username', callback[0].username);
                        response.cookie('userID', callback[0].id)
                        response.redirect('/home');
                    }
                    else {
                        response.redirect('/?err=register');
                    }
                });
            }
        });
    };

    let showLoginControllerCallback = (request, response) => {
      response.render('login');
    };

    let loginControllerCallback = (request, response) => {
        let username = request.body.username;
        let password = sha256(request.body.password);
        db.users.checkUserAccount(username,(error, callback) => {
            if (callback) {
                db.users.logInUser(username, password,(error, callback) => {
                    if (callback) {

                        let hashedCookie = sha256(callback[0].username+'loggedin'+SALT);
                        response.cookie('logged_in', hashedCookie);
                        response.cookie('username', callback[0].username);
                        response.cookie('userID', callback[0].id);
                        response.redirect('/home');
                        console.log('User is logged in')
                    }
                    else {
                        response.redirect('/?err=login');
                    }
                });
            }
            else {
                response.redirect('/?err=login')
            }
        });
    };

    let homepageControllerCallback = (request, response) => {
        let cookieName = request.cookies.username;
        let storedCookie = request.cookies.logged_in;

        if (storedCookie === undefined) {
            response.send('please log in!')

        } else {
            db.clothing.getAllClothes(cookieName, (error, callbackdata) => {
                if (error) {
                    console.log("error in getting file", error);

                } else {

                    let sessionCookieCheck = sha256(cookieName+'loggedin'+SALT)

                    if ( storedCookie === sessionCookieCheck ) {
                            let data = {
                                allclothes : callbackdata,
                                cookieUser : cookieName
                            }
                            response.render('home', data);

                    } else {
                        response.send('Username or password is wrong')
                    }
                }

            });
        };
    };

    let showItemControllerCallback = (request, response) => {
        let cookieName = request.cookies.username;
        let storedCookie = request.cookies.logged_in;

        if (storedCookie === undefined) {
            response.send('please log in!')

            } else {
                    let sessionCookieCheck = sha256(cookieName+'loggedin'+SALT)
                    if ( storedCookie === sessionCookieCheck ) {
                         response.render('add');
                    }

                        else {
                            response.send('Something went wrong')
                        }
                }
    };

    let addItemControllerCallback = (request, response) => {

            cloudinary.uploader.upload(request.file.path, function(result) {

                let cookierequest = request.cookies;

                    db.clothing.addSingleClothing(request.body,result.url,cookierequest,(error, callback) => {

                    // let data = {
                    //             allclothes : callback
                    //                 }

                    response.redirect('home');
                });
        })
    };

    let logoutControllerCallback = (request, response) => {
        response.clearCookie('logged_in');
        response.clearCookie('username');
        response.clearCookie('userID');
        response.redirect('/login');
    };

    let getViewedItemControllerCallback = (request, response) => {
        let urlID = request.params.id;
        // response.send(urlID);

        // let cookierequest = request.cookies;

        db.clothing.viewSingleItem(urlID,(error, callback) => {

            let data = {
                allclothes : callback
                        }

            response.render('item', data);
                });
    }

    let editViewedItemControllerCallback = (request, response) => {
        console.log("rendering edit form");
        let urlID = request.params.id;

        db.clothing.viewEditSingleItem(urlID,(error, callback) => {

            let data = {
                allclothes : callback
            }

            response.render('edit', data);
        });
    }

    let editItemControllerCallback = (request, response) => {
        let urlID = request.params.id;
        // console.log("editing!", urlID);
        // console.log(request.body);
        // response.send(request.body)

        db.clothing.editSingleItem(request.body, urlID,(error, callback) => {
            if (error){
                response.send(error);
            } else {
                let url = "/item/" + urlID;
                response.redirect(url);
            }

        });
    }

    let deleteViewedItemControllerCallback = (request, response) => {
        let urlID = request.params.id;

        db.clothing.viewDeleteItem(urlID,(error, callback) => {

            let data = {
                allclothes : callback
                                    }

            response.render('delete', data);
                });
    }

/////////////////////////////////////////////
//Dont touch above!!!!!!!!!!!!!!!!!!!!!!!!//
////////////////////////////////////////////


    let deleteItemControllerCallback = (request, response) => {
        let urlID = request.params.id;
        console.log(request.params.id)

        db.clothing.deleteSingleItem(urlID,(error, callback) => {

            if (error){
                response.send(error);
            } else {
                let url = "/home";
                response.redirect(url);
            }

                });
    }

    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */

    return {



        index: indexControllerCallback,

        showRegister: showRegisterControllerCallback,
        register: registerControllerCallback,

        showlogin: showLoginControllerCallback,
        login: loginControllerCallback,
        logout: logoutControllerCallback,

        homepage: homepageControllerCallback,

        showAddItem: showItemControllerCallback,
        addItem: addItemControllerCallback,

        getViewedItem: getViewedItemControllerCallback,

        getEditItem: editViewedItemControllerCallback,
        editItem: editItemControllerCallback,

        getDeleteItem: deleteViewedItemControllerCallback,
        deleteItem: deleteItemControllerCallback

        //////////////DONT TOUCH ABOVE/////////////////

    };

}