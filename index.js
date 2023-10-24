//console.log("conectado");
//aqui se inicia todo
//se levanta el servidor
const { error } = require("console")
const {app, port} = require ("./src/app")
const {sequelize} = require ("./src/db")
 

//SINCRONIZAMOS bd y express
sequelize.sync({force:false}).then(// mucho cuidado si pongo este parametron true se borra toda la bd
     app.listen(port, () => {
        console.log(`Servicio levantado por el puerto: ${port}`)
      })//Conecta la instacia de express con mi codigo
).catch((error) => console.log(error));
