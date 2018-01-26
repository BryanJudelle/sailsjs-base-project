/**
 * 
 * GenericServices.js
 * 
 * @author Bryan Judelle Ramos
 * @description Generic Services, do basic DB related query/transaction and passed to controller
 *              this contains all the DATA MODEL ABSTRACTION LAYER ONLY.
 * 
 * 
 */

module.exports = {
    saveInfo : function(Model, params,callback) {
        Model.create(params).exec(function(err, data) {
            if (err) {
                console.log(err);
                return callback(err);
            }
            else 
                return callback(data);
        });
    },
};