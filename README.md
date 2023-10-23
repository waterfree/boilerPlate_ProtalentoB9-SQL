# boilerPlate_ProtalentoB9-SQL
Sequelize + express + node 

# pasos para clonar

1. Se crea proyecto en github
2. se corro el comando git clone url en la ruta donde se quiere guardar el proyecto donde url es la url del proyecto en github 


# pasos para comenzar el proyecto despues de clonarlo
1. se corre el comando npm init -y para que se cree el archivo package.json si se presentan problemas borrarlo y crearlo de nuevo.

2. crear scripts en el package.json

    Antes:  "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
            },

    Despues:"scripts": {
            "start": "node index.js",
            "dev":  "node index.js",
            "test": "echo \"Error: no test specified\" && exit 1"
            },
3. npm install nodemon -D
4. npm install express
5. npm install --save sequelize  para conectarse a la bd
6. npm install --save pg pg-hstore express
7. Se modifica linea en el package.json 
        "scripts": {
        "start": "node index.js",
        "dev":  "nodemon index.js",
        "test": "echo \"Error: no test specified\" && exit 1"
        },
8. creo archivo index.js
9. se agrega esta linea al archivo index.js
        console.log("conectado");
10. Se ejecuta el comando npm start para validar si se esta conectando de forma correcta
11. podemos agregar module en el package.json para usar import en lugar de require en el proyecto, se puede de ambas maneras, en este caso no se va usar.
12. Se crea estructura de carpetas src/routes, controllers, Models, middlewares
13. se crean archivos app.js y db.js en la carpeta src
14. se crea un archivo .gitignore en la raiz del proyecto, agrega agrega node_modules y package_lock.json
15. git add
16. git commit -m "first commit"
17. git push


