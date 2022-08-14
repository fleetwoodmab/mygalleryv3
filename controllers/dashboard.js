'use strict';

// import all required modules

const uuid = require('uuid');
const accounts = require("./accounts.js");
const logger = require('../utils/logger');

const galleryStore = require('../models/gallery-store.js');

// create dashboard object
const dashboard = {
  
  
  // index method - responsible for creating and rendering the view
  index(request, response) {
    logger.info('dashboard rendering');
    const loggedInUser = accounts.getCurrentUser(request);
    if (loggedInUser) {

    
    // create view data object (contains data to be sent to the view)
    const viewData = {
       title: "MyGallery Dashboard",
       galleries: galleryStore.getUserGalleries(loggedInUser.id),
       fullname: loggedInUser.firstName + " " + loggedInUser.lastName,
       picture:loggedInUser.picture
    };
    
    // render the dashboard view and pass through the data
    logger.info('about to render', viewData.gallery);
    response.render('dashboard', viewData);
      } else response.redirect("/");
  },
  
  deleteGallery(request, response) {
    const galleryId = request.params.id;
    logger.debug(`Deleting Gallery ${galleryId}`);
    galleryStore.removeGallery(galleryId);
    response.redirect('/dashboard');
  },
  
    addGallery(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    const newGallery = {
      id: uuid(),
      userid: loggedInUser.id,
      title: request.body.title,
      art: [],
    };
    logger.debug('Creating a new gallery' + newGallery);
    galleryStore.addGallery(newGallery);
    response.redirect('/dashboard');
  },
};

// export the dashboard module
module.exports = dashboard;