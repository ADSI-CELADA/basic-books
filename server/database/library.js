import mysql from "mysql"

export const conexion = mysql.createConnection({
    host: 'localhost',
    password : '',
    user: 'root',
    database : 'library',
    port: 3306,
})

conexion.connect((error) => {
    if (!error) {
        console.log('Conectado uvub');
    } else {
        throw new error
    }
})
