const express = require('express');

const routes = express.Router();
const axios = require('axios');
const userController = require('./../controllers/userController');
const buildController = require('./../controllers/buildController');

// API Routes

routes.get('/all_builds', (req, res) => {
  buildController.allBuilds(req, res);
});
routes.post('/like_build', (req, res) => {
  buildController.likeBuild(req, res);
});
routes.post('/new_build', (req, res) => {
  buildController.newBuild(req, res);
});
routes.post('/delete_build', (req, res) => {
  buildController.deleteBuild(req, res);
});
routes.post('/update_build', (req, res) => {
  buildController.updateBuild(req, res);
});
routes.post('/add_minute', (req, res) => {
  buildController.addMinute(req, res);
});
routes.post('/remove_minute', (req, res) => {
  buildController.removeMinute(req, res);
});
routes.post('/get_by_id', (req, res) => {
  buildController.getById(req, res);
});
routes.post('/new_user', (req, res) => {
  userController.newUser(req, res);
});
routes.post('/delete_user', (req, res) => {
  userController.deleteUser(req, res);
});
routes.post('/change_username', (req, res) => {
  userController.changeUsername(req, res);
});
routes.post('/login', (req, res) => {
  userController.loginUser(req, res);
});
routes.get('/get_user', (req, res) => {
  userController.getCurrentUserCookie(req, res);
});
routes.get('/logout', (req, res) => {
  userController.logOut(req, res);
});
routes.get('/lambda', () => axios.get('https://yqwdc7yna7.execute-api.us-east-1.amazonaws.com/production/ParseData'));
module.exports = routes;
