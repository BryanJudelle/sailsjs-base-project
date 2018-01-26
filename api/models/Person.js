/**
 * Users.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  autoCreatedAt: false,
  autoUpdatedAt: false,
     connection: 'mysql',
      tableName: 'person_info',
         autoPK: false,
     attributes: {
            id: { 
          type         : 'integer', 
          unique       : true, 
          primaryKey   : true, 
          autoIncrement: true, 
      },
      firstname: { type: 'string' },
      lastname : { type: 'string' },
  }
};

