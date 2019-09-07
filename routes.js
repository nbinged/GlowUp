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
    const controllerCallbacks = require('./controllers/catalog')(allModels);

    app.get('/', controllerCallbacks.index);
    app.get('/register', controllerCallbacks.showRegister);
    app.post('/register', controllerCallbacks.register);

    app.get('/login', controllerCallbacks.showlogin);
    app.post('/login', controllerCallbacks.login);

    app.get('/home', controllerCallbacks.homepage);

    app.get('/add', controllerCallbacks.showAddItem);
    app.post('/add', upload.single('image_file'),controllerCallbacks.addItem);

    app.get('/logout', controllerCallbacks.logout);

    app.get('/item/:id', controllerCallbacks.getViewedItem);

    app.put('/item/:id/edit', controllerCallbacks.editItem);
    app.get('/item/:id/edit', controllerCallbacks.getEditItem);
    app.get('/item/:id/delete', controllerCallbacks.getDeleteItem);
    app.delete('/item/:id/delete', controllerCallbacks.deleteItem);
};




