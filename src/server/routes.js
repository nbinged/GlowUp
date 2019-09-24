module.exports = (app, db) => {
  const products = require('./controllers/products')(db);

  app.get('/products', products.getAll);
};

// // var multer = require('multer');
// // var uploadPath = 'public/uploads/';
//
// // var storage = multer.diskStorage({
// //   destination: function (req, file, cb) {
// //     cb(null, uploadPath )
// //   },
// //   filename: function (req, file, cb) {
// //     cb(null, file.fieldname + '-' + Date.now() + file.originalname)
// //   }
// // })
//
// // var upload = multer({ storage: storage })
//
// module.exports = (app, allModels) => {
//
//   /*
//    *  =========================================
//    *  =========================================
//    *  =========================================
//    *  =========================================
//    *    ALL ROUTES FOR CONTROLLER
//    *  =========================================
//    *  =========================================
//    *  =========================================
//    */
//
//   // require the controller
//
//   ////////////////
//   //Users Routes//
//   ////////////////
//   const usersControllerCallbacks = require('./controllers/users')(allModels);
//
//   app.get('/', usersControllerCallbacks.index);
//   app.get('/register', usersControllerCallbacks.showRegister);
//   app.post('/register', usersControllerCallbacks.register);
//
//   app.get('/login', usersControllerCallbacks.showlogin);
//   app.post('/login', usersControllerCallbacks.login);
//   app.get('/logout', usersControllerCallbacks.logout);
//
//   app.get('/home', usersControllerCallbacks.homepage);
//
//   ///////////////////
//   //Journals Routes//
//   ///////////////////
//   const journalsControllerCallbacks = require('./controllers/journals')(allModels);
//
//   app.get('/addjournals', journalsControllerCallbacks.viewAddJournals);
//   app.post('/addjournals', journalsControllerCallbacks.addSingleJournals);
//
//   app.get('/alljournals', journalsControllerCallbacks.allJournalsIndex);
//
//   //Not completed yet.
//   // app.post('/addjournals', upload.single('image_file'),journalsControllerCallbacks.addItem);s
//   // app.get('/journals/:id', journalsControllerCallbacks.getViewedItem);
//   // app.get('/journals/:id/edit', journalsControllerCallbacks.getEditItem);
//   // app.put('/journals/:id/edit', journalsControllerCallbacks.editItem);
//   // app.get('/journals/:id/delete', journalsControllerCallbacks.getDeleteItem);
//   // app.delete('/journals/:id/delete', journalsControllerCallbacks.deleteItem);
//
//   /////////////////////
//   //Statistics Routes//
//   /////////////////////
//   const statisticsControllerCallBacks = require('./controllers/statistics')(allModels);
//
//   app.get('/statistics', statisticsControllerCallBacks.viewStatistics);
// };





