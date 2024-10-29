/*
    Named Imports
*/
// import { nombre as nombreImportado, obtenerPost } from "./namedExport";

// console.log("mi nombre es : " + nombreImportado);
// console.log(obtenerPost());

/*
    Namespace Imports
*/

import * as datos from "./namedExport";

console.log(datos.nombre);
console.log(datos.obtenerPost());
