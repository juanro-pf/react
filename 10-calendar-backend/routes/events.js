/*
  Rutas de Events
  host + /api/events
*/

const { Router }= require('express');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const { validateJWT }= require('../middlewares/validateJWT');
const { check }= require('express-validator');
const { validateFields }= require('../middlewares/fieldValidator');
const { isDate } = require('../helpers/isDate');

const router= Router();
router.use(validateJWT); //Lo usa en todas las peticiones que estan abajo de esta linea

router.get(
  '/',
  [

  ],
  getEvents
);

router.post(
  '/',
  [
    check('title', 'Title is required').not().isEmpty(),
    check('start', 'Start date is required').custom(isDate),
    check('end', 'End date is required').custom(isDate),
    validateFields
  ],
  createEvent
);

router.put(
  '/:id',
  [
    check('title', 'Title is required').not().isEmpty(),
    check('start', 'Start date is required').custom(isDate),
    check('end', 'End date is required').custom(isDate),
    validateFields
  ],
  updateEvent
);

router.delete(
  '/:id',
  [

  ],
  deleteEvent
);

module.exports= router;