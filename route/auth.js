//  Dependencias
var jwt = require('jsonwebtoken');
var express     = require('express');
var router      = express.Router();

router.get('/auth', function(req, res){
    var user = {
        email: 'michael@michael.com',
        password: '123'
    };

    var token = jwt.sign(user, 'secret', {
        expiresIn: 4000
    });
    
    res.json({
        success: true,
        token: token
    });
});


//  Retorn router
module.exports = router;
