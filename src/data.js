// src/data.js
const imagenes = import.meta.glob('./img/*.{png,jpg,jpeg,webp}', { eager: true });

// --- AQUÍ ASIGNÁS EL PRECIO A CADA NOMBRE DE ARCHIVO ---
const listaPrecios = {
  "huggiesG.jpeg": 8500,
 " huggiesM-GSPLASH.jpeg": 1000,
  "huggiesM.jpeg": 8200,
  "huggiesM68.jpeg" : 2000,
  "huggiesP.jpeg": 7800,
  "huggiesP50.jpeg": 3000,
  "huggiesRN.jpeg": 7500,
  "huggiesXXG.jpeg": 9000,
  "huggiesXXXG.jpeg": 9500,

  
  "pampersGSPLASH.jpeg": 10500,
  "pampersP-MSPLASH.jpeg": 5000,
  "pampersRN.jpeg": 7600,
  "pampersRN36.jpeg": 8900,
  "pampersXGSPLASH.jpeg": 8000,
  
  
  // Agregá los que falten siguiendo este formato exacto
};

export const productos = Object.entries(imagenes).map(([ruta, modulo], index) => {
  const nombreArchivo = ruta.replace('./img/', ''); // Ejemplo: "huggiesG.jpeg"
  
  // Limpiamos el nombre para mostrarlo bonito (ej: de "huggiesG.jpeg" a "Huggies G")
  const nombreParaMostrar = nombreArchivo
    .replace('.jpeg', '')
    .replace('.jpg', '')
    .replace(/([A-Z])/g, ' $1') // Separa mayúsculas: huggiesG -> huggies G
    .trim();

  // Buscamos el precio en nuestra lista. Si no está, pone 0 por defecto.
  const precioFinal = listaPrecios[nombreArchivo] || 0;

  // Detectar marca
  let marca = "Otras";
  if (nombreArchivo.toLowerCase().includes('huggies')) marca = "Huggies";
  if (nombreArchivo.toLowerCase().includes('pampers')) marca = "Pampers";
 if (nombreArchivo.toLowerCase().includes('babysec')) marca = "babysec";
 if (nombreArchivo.toLowerCase().includes('estrella')) marca = "estrella";

 

  return {
    id: index + 1,
    nombre: nombreParaMostrar.toUpperCase(),
    precio: precioFinal,
    imagen: modulo.default,
    marca: marca
  };
});
