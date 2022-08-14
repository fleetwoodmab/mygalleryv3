'use strict';

// import all required modules
const logger = require('../utils/logger');
const galleryStore = require('../models/gallery-store.js');
const accounts = require ('./accounts.js');

// create start object
const start = {

  // index method - responsible for creating and rendering the view
index(request, response) {

    const loggedInUser = accounts.getCurrentUser(request);
    logger.info('start rendering');

    if(loggedInUser){

      const galleries = galleryStore.getUserGalleries(loggedInUser.id);
      let numGalleries = galleries.length;
      let numArt = 0;
      for (let item of galleries) {
        numArt += item.art.length;
      }

      const viewData = {
        title: 'Welcome to MyGallery!',
        totalGalleries: numGalleries,
        totalArt: numArt,
        fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
        picture: loggedInUser.picture
      };

      response.render('start', viewData);
    }
    else response.redirect('/');
  },
};

// export the start module
module.exports = start;