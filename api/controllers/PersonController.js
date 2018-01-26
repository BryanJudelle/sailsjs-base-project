/**
 * PersonController
 *
 * @description :: Server-side logic for managing People
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var _ = require('underscore');
module.exports = {
	save: function(req, res) {
        var params = _.extend(req.query || {}, req.params || {}, req.body || {});

        var obj = {
            firstname: params.f,
            lastname: params.l
        };
        GenericServices.saveInfo(Person,obj, function(i) {
            return res.json(i);
        });
    }
};

