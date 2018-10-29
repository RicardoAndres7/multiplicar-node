//requires
const fs = require('fs');
const colors = require('colors');

// const fs = require('express');
// const fs = require('./fs');

let listarTabla = (base, limite = 10) => {
    console.log(`=============================`.green);
    console.log(`tabla de ${base} hasta ${limite}`.green);
    console.log(`=============================`.green);

    for (let index = 0; index <= limite; index++) {
        let result = base * index;
        console.log(`${base} x ${index} = ${result}`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ${base}, no es un numero`);
            return;
        }
        let data = '';

        for (let index = 0; index <= limite; index++) {
            let result = base * index;
            data += `${base} x ${index} = ${result} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}.txt`)
        });

    });
};

module.exports = {
    crearArchivo,
    listarTabla
};