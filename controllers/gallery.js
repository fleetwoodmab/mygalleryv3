"use strict";

const uuid = require("uuid");

const logger = require("../utils/logger");
const galleryStore = require("../models/gallery-store");
const accounts = require ('./accounts.js');

    
  

const gallery = {
index(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);  
    const galleryId = request.params.id;
    logger.debug('Gallery id = ' + galleryId);
    if (loggedInUser) {
    const viewData = {
      title: 'Gallery',
      gallery: galleryStore.getGallery(galleryId),
      fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
      picture:loggedInUser.picture
    };
    response.render('gallery', viewData);
    }
    else response.redirect('/');
},
  deleteArt(request, response) {
    const galleryId = request.params.id;
    const artId = request.params.artId;
    logger.debug(`Deleting Art ${artId} from Gallery ${galleryId}`);
    galleryStore.removeArt(galleryId, artId);
    response.redirect("/gallery/" + galleryId);
  },

  addArt(request, response) {
    const galleryId = request.params.id;
    const gallery = galleryStore.getGallery(galleryId);
    const newArt = {
      id: uuid(),
      pic: request.body.pic,
      title: request.body.title,
      artist: request.body.artist,
      year: request.body.year
    };
    galleryStore.addArt(galleryId, newArt);
    response.redirect("/gallery/" + galleryId);
  }
  
  
};

module.exports = gallery;


