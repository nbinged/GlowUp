/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
const SALT = "salt";
var sha256 = require('js-sha256');
module.exports = (dbPoolInstance) => {

//GETS ALL OF THE USERS CLOTHING ITEMS
    let getAllClothes = (username,callback) => {

        let query = 'SELECT * FROM clothing WHERE username = $1';
        let values = [username];


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

//Adds a clothing item to the database.
    let addSingleClothing = (form, cloud, cookies, callback) => {

        // For multer (form, cloud, image, callback)
        // console.log("Form which is req body: ", form)
        // console.log("Image name: ", typeof image)

        // let upload = image.replace('public/','')
        let cloudUrl = cloud;

        let query = 'INSERT INTO clothing (user_id, username,item_name, item_brand, item_size, item_color, item_catergories, image_file) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *';
        let values = [cookies.userID,cookies.username,form.item_name, form.item_brand, form.item_size, form.item_color, form.item_catergories, cloudUrl];

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

                }
            }
        });
    }

    let viewSingleItem = (clothing_id, callback) => {

        let query = 'SELECT * FROM clothing WHERE id = $1';
        let values = [clothing_id];

        dbPoolInstance.query(query,values, (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows[0]);
                } else {
                    callback(null, null);

                }
            }
        });
    }

    let viewEditSingleItem = (clothing_id, callback)=>{

        let query = 'SELECT * FROM clothing WHERE id = $1';
        let values = [clothing_id];

        dbPoolInstance.query(query,values, (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows[0]);
                } else {
                    callback(null, null);

                }
            }
        });
    }

    let viewDeleteItem = (clothing_id, callback)=>{

        let query = 'SELECT * FROM clothing WHERE id = $1';
        let values = [clothing_id];

        dbPoolInstance.query(query,values, (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows[0]);
                } else {
                    callback(null, null);

                }
            }
        });
    }

    let editSingleItem = (form, itemID, callback)=> {

        // console.log('modelssssssssssssssssssssssssss.form:',form)
        // console.log('itemIDDDDDDDDDDDDDDDDDDDDDDDDD',itemID)

        let query = 'UPDATE clothing SET item_name = $1, item_brand = $2, item_size = $3, item_color = $4, item_catergories = $5, image_file = $6 WHERE id = $7 RETURNING *';

        let values = [form.item_name, form.item_brand, form.item_size, form.item_color, form.item_catergories, form.image_file, itemID];

        dbPoolInstance.query(query,values, (error, queryResult) => {

            // console.log('queryResultttttttttttttttttttt',queryResult)

            if (error) {
                callback(error, null);
                console.log('error null')

            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows[0]);
                    console.log('IT WORKS FINALLY')

                } else {
                    callback(null, null);

                }
            }
        });
    };

    let deleteSingleItem = (clothing_id, callback)=>{
        let query = "DELETE FROM clothing WHERE id = $1 RETURNING id";
        let values = [clothing_id];
        console.log(values)

        dbPoolInstance.query(query,values,(error, queryResult) => {

            if (error) {
                callback(error, null);
                console.log("Error")
            } else {

                callback(null, true);
                console.log("Something got deleted")
            }
        });
    }

    return {

        getAllClothes,
        addSingleClothing,
        viewSingleItem,
        viewEditSingleItem,
        viewDeleteItem,
        editSingleItem,
        deleteSingleItem

        ////DONT EDIT ANYTHING ABOVE///////
    };
};


// let sortAll = (requestdata, callback) =>{
//         console.log("entering model sortAll");
//         console.log("req data in model sortAll: ", requestdata);
//         let user_id = parseInt(requestdata.cookies.userid);
//         let query = `SELECT * FROM items WHERE user_id = ${user_id} ORDER BY ${requestdata.query.parameter} ${requestdata.query.order}`;

//         dbPoolInstance.query(query, (err, result) =>{
//             if(err){
//                 callback(err, null);
//             } else if (result.rows.length > 0){
//                 callback(null, result.rows);
//             } else {
//                 callback(null, null);
//             };
//         });
//     };

//     // ~* does a case insensitive = sear_ch;
//     let search = (requestdata, callback) =>{
//         console.log("entering model search");
//         console.log("req data in model search: ", requestdata);
//         let user_id = requestdata.user_id;
//         let values = [requestdata.query.search, user_id];
//         let query = `SELECT * FROM items WHERE name ~* $1 AND user_id = $2`;

//         dbPoolInstance.query(query, values, (err, result) =>{
//             if(err){
//                 callback(err, null);
//             } else if (result.rows.length > 0){
//                 callback(null, result.rows);
//             } else {
//                 callback(null, null);
//             };
//         });
//     };
