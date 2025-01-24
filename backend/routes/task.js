const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const upload = require('../utils/upload');
const { createTask, getTasks, logTime } = require('../controllers/taskController');

router.post('/', auth, upload.single('file'), createTask);
router.get('/', auth, getTasks);
router.post('/:id/log-time', auth, logTime);

module.exports = router;
