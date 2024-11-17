const express = require('express');
const router = express.Router();
const entidadeController = require('../controllers/entidadeController');
const validateMiddleware = require('../middlewares/validateMiddleware');

router.get('/', entidadeController.getAll);
router.post('/', validateMiddleware, entidadeController.create);
router.put('/:id', validateMiddleware, entidadeController.update);
router.delete('/:id', entidadeController.delete);

module.exports = router;
