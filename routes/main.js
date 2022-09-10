const router = require('express').Router();

const { welcome } = require('../controllers/main');

router.get('/', welcome);

module.exports = router;
