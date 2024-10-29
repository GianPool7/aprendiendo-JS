'use strict';

const nombre="pepe";

const obtenerPost=()=>{
    return ['post 1','post 2','post 3']
};

/*
    Named Imports
*/
// import { nombre as nombreImportado, obtenerPost } from "./namedExport";


console.log(nombre);
console.log(obtenerPost());
