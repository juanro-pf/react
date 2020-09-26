const { response }= require('express'); //Para recuperar las recomendaciones
const bcrypt= require('bcryptjs');
const User = require('../models/User');
const { generateJWT } = require('../helpers/jwt');

const createUser= async (req, res= response) => {

  const { email, password }= req.body;

  try {

    let user= await User.findOne({ email });
    
    if(user){
      return res.status(400).json({
        ok: false,
        msg: 'Email already registered' 
      });
    }
    
    user= new User(req.body);

    //Encriptar contraseña
    const salt= bcrypt.genSaltSync(10);
    user.password= bcrypt.hashSync( password, salt );
  
    await user.save();

    //Generar JWT
    const token= await generateJWT( user.id, user.name );
  
    res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name,
      token
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Contact Juan Ro for more info'
    });
  }
};

const loginUser= async (req, res= response) => {

  const { email, password }= req.body;

  try {

    const user= await User.findOne({ email });
    
    if(!user){
      return res.status(400).json({
        ok: false,
        msg: 'Email is not registered' 
      });
    }

    //Confirmar los passwords
    const validPassword= bcrypt.compareSync( password, user.password );

    if( !validPassword ){
      return res.status(400).json({
        ok: false,
        msg: 'Wrong password'
      });
    }

    //Generar JWT
    const token= await generateJWT( user.id, user.name );

    res.json({
      ok: true,
      uid: user.id,
      name: user.name,
      token
    });
    
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Contact Juan Ro for more info'
    });
  }

};

const revalidateToken= async (req, res= response) => {

  const { uid, name }= req;
  
  //Generar JWT
  const token= await generateJWT( uid, name );

  res.json({
    ok: true,
    uid,
    name,
    token
  });

};

module.exports= {
  createUser,
  loginUser,
  revalidateToken
};