'use strict';

// Primera forma
// export default ()=>{
//     return{
//         nombre:"juan",
//         correo:"juan@gmail.com",
//     };
// };

// segunda forma
const obtenerUsario =()=>{
    return {
        nombre:"juan",
        correo:"juan@gmail.com",
    };
};

/*
    Named Imports
*/
// import { nombre as nombreImportado, obtenerPost } from "./namedExport";

console.log(obtenerUsario());
