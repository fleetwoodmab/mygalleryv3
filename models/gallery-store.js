'use strict';

const _ = require('lodash');
const JsonStore = require('./json-store');
const cloudinary = require('cloudinary');
const logger = require('../utils/logger');

try {
  const env = require('../.data/.env.json');
  cloudinary.config(env.cloudinary);
}
catch(e) {
  logger.info('You must provide a Cloudinary credentials file - see README.md');
  process.exit(1);
}

const galleryStore = {

  store: new JsonStore('./models/gallery-store.json', { galleryCollection: [] }),
  collection: 'galleryCollection',

  getAllGalleries() {
    return this.store.findAll(this.collection);
  },

  getGallery(id) {
    return this.store.findOneBy(this.collection, { id: id });
  },

  addGallery(gallery) {
    this.store.add(this.collection, gallery);
  },

  removeGallery(id) {
    const gallery = this.getGallery(id);
    this.store.remove(this.collection, gallery);
  },

  removeAllGalleries() {
    this.store.removeAll(this.collection);
  },

  addArt(id, art) {
    const gallery = this.getGallery(id);
    gallery.art.push(art);
  },

  removeArt(id, artId) {
    const gallery = this.getGallery(id);
    const art = gallery.art;
    _.remove(art, { id: artId});
  },
  
  
  getUserGalleries(userid) {
    return this.store.findBy(this.collection, { userid: userid });
  },
};

module.exports = galleryStore;