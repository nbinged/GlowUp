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

        showAddItem: showItemControllerCallback,
        addItem: addItemControllerCallback,

        getViewedItem: getViewedItemControllerCallback,

        getEditItem: editViewedItemControllerCallback,
        editItem: editItemControllerCallback,

        getDeleteItem: deleteViewedItemControllerCallback,
        deleteItem: deleteItemControllerCallback

    };

}