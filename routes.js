'use strict';

// import express and initialise router
const express = require('express');
const router = express.Router();

// import controllers
const start = require('./controllers/start.js');
const dashboard = require('./controllers/dashboard.js');
const about = require('./controllers/about.js');
const gallery = require('./controllers/gallery.js');
const accounts = require ('./controllers/accounts.js');

// connect routes to controllers
router.get('/start', start.index);
router.get('/dashboard', dashboard.index);
router.get('/about', about.index);

router.get('/gallery/:id', gallery.index);

router.get('/gallery/:id/deleteArt/:artId', gallery.deleteArt);
router.get('/dashboard/deletegallery/:id', dashboard.deleteGallery);

router.post('/gallery/:id/addArt', gallery.addArt);
router.post('/dashboard/addGallery', dashboard.addGallery);

router.get('/', accounts.index);
router.get('/login', accounts.login);
router.get('/signup', accounts.signup);
router.get('/logout', accounts.logout);
router.post('/register', accounts.register);
router.post('/authenticate', accounts.authenticate);

// export router module
module.exports = router;

