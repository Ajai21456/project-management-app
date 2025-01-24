const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const authorize = require('../middleware/authorize');
const { createProject, getProjects } = require('../controllers/projectController');

router.post('/', auth, authorize(['admin', 'manager']), createProject);
router.get('/', auth, getProjects);

module.exports = router;
