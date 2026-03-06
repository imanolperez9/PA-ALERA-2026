// src/data.js
const imagenes = import.meta.glob('./img/*.{png,jpg,jpeg,webp}', { eager: true });

const listaPrecios = {
  // HUGGIES

"huggies pr .webp": 17000,
"huggiesP.jpeg": 9000,



"huggiesM68.jpeg" :20000 ,
"huggies amarillo g.webp" :20000 ,
"huggies amarillo xg.webp" :20000 ,
"huggiesXXG.jpeg": 20000 ,
"huggies amarillo xxxg.webp" :20000 ,


"huggies azul px30.webp":11000,
"huggiesP50.jpeg": 14000,

"huggies azul m.webp":20000 ,
"huggies azul g.webp":20000 ,
"huggies azul xg.webp":20000 ,
"huggies azul xxg.webp":20000 ,
"huggies azul xxxg.webp":20000 ,


  "huggiesRN.jpeg": 17000,
"huggies rojo p x50.webp":22000,


"huggiesM.jpeg":30000,
"huggiesG.jpeg":30000,
"huggies rojo xg.webp":30000,
"huggies rojo xxg.webp":30000,
"huggiesXXXG.jpeg":30000,


"huggies verde rn.webp":15000,
"huggies verde p x50.webp":19000,


"huggies verde m.webp":26000,
"huggies verde g.webp":26000,
"huggies verde xg.webp":26000,
"huggies verde xxg.webp":26000,
"huggies verde xxxg.webp":26000,





 
  
  "huggiesM-GSPLASH.jpeg":10000 ,
  
  
  
 
  
  
  
// PAMPERS
"pampersRN36.jpeg": 20000,
"pampers deluxe rn+.webp":22000,
"pampers deluxe p x36.webp":20000,


"pampers deluxe m x72.webp":38000,
"pampers deluxe g x72.webp":38000,
"pampers deluxe xg x58.webp":38000,
"pampers deluxe xxg x54.webp":38000,



"pampersRN.jpeg": 17000,
"pampers dry p.webp":21000,


"pampers dry m x72.webp":31000,
"pampers dry g x72.webp":31000,
"pampers dry xg x58.webp":31000,
"pampers dry xxg x54.webp":31000,

  


  "pampersP-MSPLASH.jpeg":10000 ,
  "pampersGSPLASH.jpeg": 10000,
  "pampersXGSPLASH.jpeg":10000 ,
  // BABYSEC

"babysec pants xg.webp":13000,
"babysec pants xxg.webp":13000,



"babysec rn.webp":10000,
"babysec p x30.webp":13000,


"babysec v m x48.webp":13000,
"babysec v g x40.webp":13000,
"babysec v g x60.webp":19000,
"babysec v xg x32.webp":13000,
"babysec v xg x48.webp":19000,
"babysec v xxg x30.webp":13000,
"babysec v xxg x44.webp":19000,



"babysec m x48.webp":11000,
"babysec m x68.webp":17000,
"babysec g x40.webp":11000,
"babysec g x60.webp":17000,
"babysec xg x32.webp":11000,
"babysec xg x52.webp":17000,
"babysec xxg x30.webp":11000,
"babysec xxg x50.webp":17000,




  //ESTRELLA
  "estrella p.webp":10000,
  
  
  "estrella m x44.webp":13000,
  "estrella g x40.webp":13000,
  "estrella g x60.webp":21000,
  "estrella xg x36.webp":13000,
  "estrella xg x52.webp":21000,
  "estrella xxg x34.webp":13000,
  "estrella xxg x50.webp":21000,

  


};

// --- EDITÁ ACÁ LOS NOMBRES QUE QUIERAS CAMBIAR ---
const nombresAMano = {
  "huggiesG.jpeg": "Huggies Classic G x 40",
  "huggiesM-GSPLASH.jpeg": "Huggies Splashers Talle M",
  "huggiesM68.jpeg": "Huggies Flexi Comfort M x 68",
  "pampersRN36.jpeg": "Pampers RN Confort x 36",
  // Podés seguir agregando todos los que necesites
};






export const productos = Object.entries(imagenes).map(([ruta, modulo], index) => {
  const nombreArchivo = ruta.replace('./img/', ''); 
  
  const nombreLimpio = nombresAMano[nombreArchivo] || 
    nombreArchivo.replace(/\.(jpeg|jpg|png|webp)$/, '').replace(/([A-Z])/g, ' $1').trim();

  const precioTarjeta = listaPrecios[nombreArchivo] || 0;
  const precioEfectivo = Math.round(precioTarjeta * 0.90);

  let marca = "Otras";
  const archivoLower = nombreArchivo.toLowerCase();
  if (archivoLower.includes('huggies')) marca = "Huggies";
  else if (archivoLower.includes('pampers')) marca = "Pampers";
  else if (archivoLower.includes('babysec')) marca = "Babysec";
  else if (archivoLower.includes('estrella')) marca = "Estrella";

  // Función interna para determinar el orden de los talles
  const obtenerPrioridad = (texto) => {
    const t = texto.toLowerCase();
    if (t.includes('pr')) return 1;
    if (t.includes('rn')) return 2;
    if (t.includes('xxxg')) return 8;
    if (t.includes('xxg')) return 7;
    if (t.includes('xg')) return 6;
    if (t.includes(' j ') || t.includes('splash')) return 9;
    // Buscamos p, m, g con espacios para no confundir con nombres de marca
    if (t.includes(' p ') || t.includes(' p.') || t.endsWith('p.jpeg') || t.includes('p50')) return 3;
    if (t.includes(' m ') || t.includes(' m.') || t.includes('m68') || t.includes('m-')) return 4;
    if (t.includes(' g ') || t.includes(' g.') || t.endsWith('g.jpeg')) return 5;
    return 10;
  };

  return {
    id: index + 1,
    nombre: nombreLimpio.toUpperCase(),
    precioEfectivo: precioEfectivo,
    precioTarjeta: precioTarjeta,
    imagen: modulo.default,
    marca: marca,
    prioridad: obtenerPrioridad(nombreArchivo) // Usamos esto solo para el sort
  };
}).sort((a, b) => a.prioridad - b.prioridad);

