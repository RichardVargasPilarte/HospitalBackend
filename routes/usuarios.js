/**
 * Ruta: /api/usuarios
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos')

const { getUsuarios, postUsuarios, ActualizarUsuario, EliminarUsuario } = require('../controllers/usuarios');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

router.get('/', validarJWT, getUsuarios );

router.post('/',[
                    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
                    check('password', 'La contraseña es obligatoria').not().isEmpty(),
                    check('email', 'El correo es obligatorio').isEmail(),
                    validarCampos
                ],
                postUsuarios
);

router.put('/:id', 
                [
                    validarJWT,
                    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
                    check('email', 'El correo es obligatorio').isEmail(),
                    check('rol', 'El role es obligatorio').not().isEmpty(),
                    validarCampos
                ],
                ActualizarUsuario
);

router.delete('/:id',
    validarJWT,
    EliminarUsuario
);

module.exports = router;