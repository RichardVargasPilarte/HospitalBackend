const { response } = require('express');
const { validationResult } = require('express-validator');


const validarCampos = (req, res = response, next ) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(400).json({
            error: true,
            statusCode: 400,
            message: 'There are validation errors',
            errors: errors.array()
        });
        return;
    } else {
        next();
    }

}

module.exports  = {
    validarCampos
}