const { response }= require('express'); //Para recuperar las recomendaciones
const Event= require('../models/Event');


const getEvents= async (req, res= response) => {
  
  const events= await Event.find().populate('user', 'name');

  res.json({
    ok: true,
    events
  });

};

const createEvent= async (req, res= response) => {

  const event= new Event(req.body);

  try {

    event.user= req.uid;

    const savedEvent= await event.save();

    res.json({
      ok: true,
      event: savedEvent
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Contact Juan Ro'
    });
  }

};

const updateEvent= async (req, res= response) => {

  const eventId= req.params.id;

  try {
    
    const event= await Event.findById( eventId );
    const uid= req.uid;

    if(!event){
      return res.status(404).json({
        ok: false,
        msg: 'Event not found'
      });
    }

    if( event.user.toString() !== uid ){
      return res.status(404).json({
        ok: false,
        msg: 'Can not edit this event'
      });
    }

    const newEvent= {
      ...req.body,
      user: uid
    }

    const updatedEvent= await Event.findByIdAndUpdate( eventId, newEvent, { new: true } ); //sin el tercer argumento regresa el evento sin actualizar, pero si lo actualiza en la base de datos

    res.json({
      ok: true,
      event: updatedEvent
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Contact Juan Ro'
    });
  }

};

const deleteEvent= async (req, res= response) => {
  
  const eventId= req.params.id;

  try {
    
    const event= await Event.findById( eventId );
    const uid= req.uid;

    if(!event){
      return res.status(404).json({
        ok: false,
        msg: 'Event not found'
      });
    }

    if( event.user.toString() !== uid ){
      return res.status(404).json({
        ok: false,
        msg: 'Can not delete this event'
      });
    }

    const deletedEvent= await Event.findByIdAndDelete(eventId);

    res.json({
      ok: true,
      deletedEvent: deletedEvent
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Contact Juan Ro'
    });
  }
};

module.exports= {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent
};