var sha256 = require('js-sha256');
const SALT = "salt";

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
                console.log("something went wrong in the users models callback")
            }
            else {
                db.users.registerUser(username, password,(error, callback) => {
                    if (callback) {
                        response.cookie('logged_in', sha256(callback[0].username+"loggedin"+SALT));
                        response.cookie('username', callback[0].username);
                        response.cookie('userID', callback[0].id)
                        response.redirect('/home');
                        console.log("new account created succesfully")
                    }
                    else {
                        response.redirect('/?err=register');
                        console.log("something went wrong in the users models")
                    }
                });
            }
        });
    };

    let showLoginControllerCallback = (request, response) => {
      response.render('login');
      console.log("logged in")
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

    let logoutControllerCallback = (request, response) => {
        response.clearCookie('logged_in');
        response.clearCookie('username');
        response.clearCookie('userID');
        response.redirect('/login');
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

    return {

        index: indexControllerCallback,

        showRegister: showRegisterControllerCallback,
        register: registerControllerCallback,

        showlogin: showLoginControllerCallback,
        login: loginControllerCallback,
        logout: logoutControllerCallback,

        homepage: homepageControllerCallback

        };
}