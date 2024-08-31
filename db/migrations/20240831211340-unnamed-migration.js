'use strict';

const {UserSchema , USER_TABLE } = require('./../models/user.model');

module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(USER_TABLE, 'role' , UserSchema.role);
    //recuerda pueden ir muchas cosas aqui para hacer la migracion a la nueva tabla pero siempre ten cuidado y se cauteloso con lo que vayas a subir
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(USER_TABLE, 'role');
  }
};
