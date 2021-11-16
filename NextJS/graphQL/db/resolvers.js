require('dotenv').config({ path: 'variables.env' });

const Usuario = require('../models/usuarios');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crearToken = (usuario, palabrasecreta, expiresIn) => {
    console.log(usuario);
    const { id, email, nombre, apellido } = usuario;
    return jwt.sign( { id }, palabrasecreta, { expiresIn })
}
//resolvers que satisface la función del Query
const resolvers = {
    Query: {
        obtenerCurso: () => "Algo"
    },
    Mutation: {
        nuevoUsuario: async (_, { input }) => {
            //aplicamos destructuring
            const { email, password } = input;  
            const usuarioExiste = await Usuario.findOne({ email });
            if (usuarioExiste){
                throw new Error('El usuario ya está registrado')
            }
            //Hashear su password 
            const salt = await bcryptjs.genSalt(10);
            input.password = await bcryptjs.hash(password, salt);
            console.log (salt, password, input.password);
            try {
                //guardarlo en la BD
                const usuario = new Usuario(input);
                usuario.save();
                return usuario;
            } catch (error) {
                console.log(error);
                
            }
            // revisar si el usuario ya está registrado

            
            
        }, 
        autenticarUsuario: async ( _, { input }) => {
            const { email, password } = input;
            console.log(email, password);
            //verificar que el usuario existe
            const usuarioBD = await Usuario.find({email}); //si lo encuentra retorna el obj usuario
            console.log(usuarioBD, usuarioBD.password);
            if (!usuarioBD){
                throw new Error('EL USUARIO no existe');
            }
            // revisar si el password es correcto 
            //compara el password plano del login con el password hasheado de la BD
            const passwordOK = await bcryptjs.compare(password, usuarioBD.password);
            console.log(passwordOK);
            if (!passwordOK) {
                throw new Error('El password es incorrecto');
            }
            // crear el token
            return {
                token: crearToken(usuarioBD, process.env.SECRETA, '24h')
            }
        }
    }
}

module.exports = resolvers;