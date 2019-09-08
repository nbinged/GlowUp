var multer = require('multer');
var uploadPath = 'public/uploads/';

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadPath )
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + file.originalname)
  }
})

var upload = multer({ storage: storage })

module.exports = (app, allModels) => {

    /*
     *  =========================================
     *  =========================================
     *  =========================================
     *  =========================================
     *    ALL ROUTES FOR CONTROLLER
     *  =========================================
     *  =========================================
     *  =========================================
     */

    // require the controller
    const usersControllerCallbacks = require('./controllers/users')(allModels);
    const databaseControllerCallbacks = require('./controllers/database')(allModels);

    app.get('/', usersControllerCallbacks.index);
    app.get('/register', usersControllerCallbacks.showRegister);
    app.post('/register', usersControllerCallbacks.register);

    app.get('/login', usersControllerCallbacks.showlogin);
    app.post('/login', usersControllerCallbacks.login);
    app.get('/logout', usersControllerCallbacks.logout);

    app.get('/home', usersControllerCallbacks.homepage);

    app.get('/add', databaseControllerCallbacks.showAddItem);
    app.post('/add', upload.single('image_file'),databaseControllerCallbacks.addItem);

    app.get('/item/:id', databaseControllerCallbacks.getViewedItem);

    app.put('/item/:id/edit', databaseControllerCallbacks.editItem);
    app.get('/item/:id/edit', databaseControllerCallbacks.getEditItem);
    app.get('/item/:id/delete', databaseControllerCallbacks.getDeleteItem);
    app.delete('/item/:id/delete', databaseControllerCallbacks.deleteItem);
};




