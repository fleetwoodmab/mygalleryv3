'use strict';

const _ = require('lodash');
const JsonStore = require('./json-store');

const developerStore = {

  store: new JsonStore('./models/developer-store.json', { developers: [] }),
  collection: 'developers',

  getAllDevelopers() {
    return this.store.findAll(this.collection);
  },

  getDeveloper(id) {
    return this.store.findOneBy(this.collection, { name: name });
  }
};

module.exports = developerStore;