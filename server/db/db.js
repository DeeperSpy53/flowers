const Router = require('express');
const router = new Router();

const login = require('./requests/login');

router.post('/login', login.login);
router.post('/reg', login.reg);

module.exports = router;