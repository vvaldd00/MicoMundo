const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
// eslint-disable-next-line no-unused-vars
const cors = require('cors');
const Sequelize = require('sequelize');


const sequelize = new Sequelize('setas', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
});

sequelize
    .authenticate()
    .then(() => {
        console.log('La conexión con la base de datos se ha establecido correctamente ;)');
    })
    .catch(err => {
        console.error('La conexión con base de datos ha fallado :-(', err);
    });

const Model = Sequelize.Model;
//TABLA Usuarios
class Usuarios extends Model {}
Usuarios.init({
    // attributes
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull:false
    },
    usuario: {
        type: Sequelize.STRING,
        allowNull:false
    },
    clave: {
        type: Sequelize.STRING,
        allowNull: false
    },
    zonaBusqueda: {
        type: Sequelize.STRING,
        allowNull: false
    },
    correo: {
        type: Sequelize.STRING,
        allowNull: false,  
        unique: true
    }
}, {
    sequelize,
    modelName: 'usuarios',
    timestamps: false,

    // options
});

//TABLA Hongos
class Hongos extends Model {}
Hongos.init({
    // attributes
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull:false,
        unique: true
    },
    nombreComun: {
        type: Sequelize.STRING,
        allowNull:false
    },
    comestibilidad: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descripcion: {
        type: Sequelize.STRING,
        allowNull: false
    },
    habitat: {
        type: Sequelize.STRING,
        allowNull: false,  
    },
    temporadas: {
        type: Sequelize.STRING,
        allowNull: false,  
    },
    confusiones: {
        type: Sequelize.STRING,
        allowNull: false,  
    },
    tradicion: {
        type: Sequelize.STRING,
        allowNull: false,  
    },
    advertencia: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    nombreImagen: {
        type: Sequelize.STRING,
        allowNull: false,  
    },
    nombreImagenSecundaria: {
        type: Sequelize.STRING,
        allowNull: false,  
    }
}, {
    sequelize,
    modelName: 'hongos',
    timestamps: false,

    // options
});

//TABLA foro
class Foros extends Model {}
Foros.init({
    // attributes
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    autor: {
        type: Sequelize.STRING,
        allowNull:false,
    },
    tema: {
        type: Sequelize.STRING,
        allowNull:false
    },
    cuerpo: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'foros',
    timestamps: false,

    // options
});


//TABLA Comestible
class Comestibles extends Model {}
Comestibles.init({
    // attributes
    tipo:{
        type: Sequelize.STRING,
        primaryKey:true,
        allowNull:false,
    }
}, {
    sequelize,
    modelName: 'comestibles',
    timestamps: false,

    // options
});



//ASOCIACIONES
Comestibles.hasOne(Hongos, { foreignKey: 'comestibilidad'});

sequelize.sync({
    force: false
}); //poner a true para sincronizar cambios

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    // Request methods you wish to allow
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/', function (req, res) {   
    if(req.query.accion == "registro") {
        Usuarios.findAll({
            where: {
                nombre: req.query.nombre,
                correo: req.query.correo
            }
        }).then(data=>{
            let errorLogin = 'error';
            if (isEmpty(data) == true || data === undefined) { 
                console.log("--- comenzamos el registro ---");
                Usuarios.create({ 
                    id: 0,
                    nombre: req.query.nombre,
                    usuario: req.query.usuario,
                    correo: req.query.correo,
                    zonaBusqueda: req.query.zonaBusqueda,
                    clave: req.query.clave,
                }).then(data => {
                    res.send(data)
                    console.log("--- Traza de registro ->", data)
                })
                .catch(err => {
                    res.send()
                    console.log("--- Se produjo un error intentando el registro ---", err);
                    res.status(500).end();   
                }) 

            }else{
                res.send(errorLogin)
                console.log("--- El usuario ya está registrado ---");
                res.status(500).end();   
            }
        })
    } else if(req.query.accion=="acceder"){
        let errorLogin = 'error';
        var usuario= req.query.usuario;
        var clave= req.query.clave;
        console.log("comprobando el usuario y la contraseña para: " + usuario);
        Usuarios.findAll({
            where: {
                usuario: usuario,
                clave: clave
            }
        }).then(data => {
            if (isEmpty(data) == true || data === undefined) {
                console.log("El usuario o la clave son incorrectas");
                res.send(errorLogin);
                res.status(500).end();
            } else {
                res.send(data);
            }

        })
    } else if(req.query.accion=="hongos"){
        console.log("Cargando datos para la pantalla principal \n");
        let errorLogin = 'error';
        Hongos.findAll({
        }).then(data => {
            if (isEmpty(data) == true || data === undefined) {
                console.log("No se ha podido cargar la lista desde la base de datos");
                res.send(errorLogin);
                res.status(500).end();
            } else {
                res.send(data);
            }
        });
    }  else if(req.query.accion=="comestibilidad"){
        console.log("Buscando comestibilidad para toxicidad: "+ req.query.toxicidad+"\n");
        let errorLogin = 'error';
        Comestibles.findAll({
            where: {
                id: req.query.toxicidad
            }
        }).then(data => {
            if (isEmpty(data) == true || data === undefined) {
                console.log("No se ha podido cargar la lista desde la base de datos");
                res.send(errorLogin);
                res.status(500).end();
            } else {
                res.send(data);
            }
        });
    }
    /*else if(req.query.accion=="buscaSeta"){
        console.log("Cargando los datos para el hongo: "+ req.query.nombre+"\n");
        let errorLogin = 'error';
        Hongos.findAll({
            where: {
                nombre: req.query.nombre
            }
        }).then(data => {
            if (isEmpty(data) == true || data === undefined) {
                console.log("No se ha podido cargar la lista desde la base de datos");
                res.send(errorLogin);
                res.status(500).end();
            } else {
                res.send(data);
            }
        });
    }*/
});


app.listen(port, function () {
    console.log('Servidor de base de datos en puerto: ' + port + '!\n\n');
});

function isEmpty(obj) {
    for (let key in obj) {
        // eslint-disable-next-line no-prototype-builtins
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}