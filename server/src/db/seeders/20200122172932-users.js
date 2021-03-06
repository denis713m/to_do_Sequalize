'use strict';
const bcrypt = require('bcrypt');
function generateUsers () {
  const users = [];

  for (let i = 0; i < 100; i++) {
    users.push({
                 firstName: 'Test',
                 lastName: 'Testovich',
                 email: `email${i}@.com`,
                 login: `login_login${i}`,
                 passwordHash: bcrypt.hashSync(`password${i}`, 10),
                 createdAt: new Date(),
                 updatedAt: new Date(),
               }
    );
  }

  return users;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', generateUsers(), {});

  },

  down: (queryInterface, Sequelize) => {
    Example:
      return queryInterface.bulkDelete('Users', null, {});
  }
};
