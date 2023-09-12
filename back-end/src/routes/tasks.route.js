const express = require('express');
const router = express.Router();
const token = require('../middlewares/token');
const { findAll, create, update, destroy } = require('../controllers/tasks.controller');

router.get('/', [token], findAll);
router.post('/', [token], create);
router.put('/:id', [token], update);
router.delete('/:id', [token], destroy)

module.exports = router