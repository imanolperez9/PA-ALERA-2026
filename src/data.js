// src/data.js
const imagenes = import.meta.glob('./img/*.{png,jpg,jpeg,webp}', { eager: true });

const listaPrecios = {
  // HUGGIES
"huggiesRN.jpeg": 7500,
"huggiesP.jpeg": 7800,
 "huggiesP50.jpeg": 3000,
  "huggiesG.jpeg": 8500,
  "huggiesM-GSPLASH.jpeg": 1000,
  "huggiesM.jpeg": 8200,
  "huggiesM68.jpeg" : 2000,
  
 
  
  "huggiesXXG.jpeg": 9000,
  "huggiesXXXG.jpeg": 9500,
// PAMPERS
"pampersRN.jpeg": 7600,
"pampersRN36.jpeg": 8900,
  


  "pampersP-MSPLASH.jpeg": 5000,
  "pampersGSPLASH.jpeg": 10500,
  "pampersXGSPLASH.jpeg": 8000,
  // BABYSEC




  //ESTRELLA
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
  
  // Si existe en nombresAMano usa ese, sino limpia el nombre del archivo
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

  return {
    id: index + 1,
    nombre: nombreLimpio.toUpperCase(),
    precioEfectivo: precioEfectivo,
    precioTarjeta: precioTarjeta,
    imagen: modulo.default,
    marca: marca
  };
});
