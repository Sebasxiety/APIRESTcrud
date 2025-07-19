const express = require('express');
const router = express.Router();
const controller = require('../controllers/groupController');
const { verify } = require('../controllers/authController');

router.get('/', verify, controller.list);
router.get('/:id', verify, controller.get);
router.post('/', verify, controller.create);
router.put('/:id', verify, controller.update);
router.delete('/:id', verify, controller.remove);

module.exports = router;
