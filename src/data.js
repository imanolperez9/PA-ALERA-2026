// src/data.js
const imagenes = import.meta.glob('./img/*.{png,jpg,jpeg,webp}', { eager: true });

const listaPrecios = {
  // HUGGIES

"huggies pr .webp": 18000,
"huggiesP.jpeg": 9000,



"huggiesM68.jpeg" :20000 ,
"huggies amarillo g.webp" :20000 ,
"huggies amarillo xg.webp" :20000 ,
"huggiesXXG.jpeg": 20000 ,
"huggies amarillo xxxg.webp" :20000 ,


"huggies azul px30.webp":11000,
"huggiesP50.jpeg": 14000,

"huggies azul m.webp":21000 ,
"huggies azul g.webp":21000 ,
"huggies azul xg.webp":21000 ,
"huggies azul xxg.webp":21000 ,
"huggies azul xxxg.webp":21000 ,


  "huggiesRN.jpeg": 18000,
"huggies rojo p x50.webp":23000,


"huggiesM.jpeg":30000,
"huggiesG.jpeg":30000,
"huggies rojo xg.webp":30000,
"huggies rojo xxg.webp":30000,
"huggiesXXXG.jpeg":30000,


"huggies verde rn.webp":16000,
"huggies verde p x50.webp":20000,


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
"pampers dry p.webp":22000,


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

//celeste

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
  
  
  "estrella m x44.webp":14000,
  "estrella g x40.webp":14000,
  "estrella g x60.webp":22000,
  "estrella xg x36.webp":14000,
  "estrella xg x52.webp":22000,
  "estrella xxg x34.webp":14000,
  "estrella xxg x50.webp":22000,
  "estrella j x30.webp":14000,
  "estrella j x50.webp":22000,



  // oleos

  "oleo estrella x500.jpg":7000,
  "oleo estrella x950.webp":10000,
//toallitas
"toallitas estrella.webp":4000,
"toallitas qsoft.webp":3000,




  //para mama
"pm aposito post parto.webp":3000,
"pm protector mamario.webp": 3000,
"pm toallitas fem.webp":2000,
"pm pezonera nuk.webp":18000,
"pm pezonera chicco.webp":20000,


// algodon
"algodon doncella x500.webp":5000,
"algodon estrella discos.webp":3000,
"algodon estrella precortado.webp":2000,
"algodon estrella x140.webp":2000,
"algodon estrella x300.webp":5000,


  //higieene
  "higiene aceite jhonson.webp":10000,
  
  "higiene aspirador nasal .webp":13000,
  "higiene aspirador nasal.webp":20000,
  
  

  "higiene colonia babelito.webp":15000,
  "higiene colonia babelito x200.webp":13000,
  "higiene colonia petit.webp":15000,
  "higiene colonia danielle.webp":15000,
  "higiene colonia upa lala.webp":6000,

 "higiene crema enjuage upalala.webp":5000,

 "higiene curitas.webp":1000,
 "higiene hipoglos.webp":12000,
 "higiene hisopos.webp":2000,
 "higiene jabon estrella.webp":2000,
 "higiene protector dermaglos.webp":10000,

 "higiene shampo petit.webp":8000,
 "higiene shampoo upalala.webp":5000,

 "higiene talco upa lala.webp":5000,



 // mamaderas
"mamadera avent.webp":20000,
"mamadera babelito.webp":10000,
"mamadera baby bee con.webp":10000,
"mamadera baby bee sin.webp":8000,
"mamadera chicco de vidrio.webp":31000,
"mamadera chicco pezonera r.n.webp":25000,
"mamadera chicco x150.webp":18000,
"mamadera chicco x330.webp":22000,
"mamadera nuby .webp":10000,
"mamadera nuk temperatura x150.webp":23000,
"mamadera nuk temperatura x300.webp":25000,
"mamadera loopi.webp":10000,

//chupetes
"chupete avent transparente.webp":15000,
"chupete avent.webp":15000,
"chupete babelito.webp":8000,
"chupete baby bee.webp":5000,
"chupete chicco .webp":9000,
"chupete disney.webp":5000,
"chupete loopi.webp":5000,
"chupete nuby.webp":8000,
"chupete nuk .webp":10000,
"chupete nuk luminoso.webp":15000,
"chupete vaita.webp":5000,



};

// --- EDITÁ ACÁ LOS NOMBRES QUE QUIERAS CAMBIAR ---
const nombresAMano = {
  "huggiesG.jpeg": "Huggies Classic G x 60",
  "huggiesM-GSPLASH.jpeg": "Huggies Splashers Talle M",
  "huggiesM68.jpeg": "Huggies Flexi Comfort M x 68",
  "pampersRN36.jpeg": "Pampers RN Confort x 36",


  "pm aposito post parto.webp":"aposito post parto",
"pm protector mamario.webp": "protector mamario",
"pm toallitas fem.webp":"toallitas",
"pm pezonera nuk.webp":"pezonera nuk",
"pm pezonera chicco.webp":"pezonera chicco",


   "higiene aceite jhonson.webp" :" aceite jhonson",
   "higiene aspirador nasal .webp":" aspirador nasal ",
    "higiene aspirador nasal.webp": " aspirador nasal con filtro",
    "higiene colonia babelito.webp":"colonia babelito",
     "higiene colonia danielle.webp": " colonia danielle",
      "higiene colonia upa lala.webp": "colonia upa lala",
      "higiene crema enjuage upalala.webp":" crema enjuage upa lala",
      "higiene curitas.webp":"curitas",
      "higiene hipoglos.webp":" hipoglos",
      "higiene hisopos.webp":" hisopos",
       "higiene jabon estrella.webp": " jabon estrella",
       "higiene protector dermaglos.webp":" protector dermaglos",
       "higiene shampo petit.webp":" shampoo petit",
       "higiene shampoo upalala.webp":" shampoo upa lala",
        "higiene talco upa lala.webp": "higiene talco upa lala",
        "higiene colonia babelito x200.webp":" colonia babelito x200",
        "higiene colonia petit.webp":" colonia petit",


        "mamadera avent.webp": "avent x260",
        "mamadera babelito.webp": "babelito",
        "mamadera baby bee con.webp":"baby bee manija",
        "mamadera baby bee sin.webp":"baby bee ",
        "mamadera chicco de vidrio.webp":"chicco de vidrio",
        "mamadera chicco pezonera r.n.webp":"chicco pezonera rn",
        "mamadera chicco x150.webp":"chicco x150",
        "mamadera chicco x330.webp":"chicco x330",
        "mamadera nuby .webp":"nuby x240",
        "mamadera nuk temperatura x150.webp":"nuk temperatura x150",
        "mamadera nuk temperatura x300.webp":"nuk temperatura x300",
        "mamadera loopi.webp":"loopi",




        "chupete avent transparente.webp":"avent transparente",
        "chupete avent.webp":"avent",
        "chupete babelito.webp":"babelito",
        "chupete baby bee.webp":"baby bee",
        "chupete chicco .webp":"chicco",
        "chupete disney.webp":"disney",
        "chupete loopi.webp":"loopi",
        "chupete nuby.webp":"nuby",
        "chupete nuk .webp":"nuk",
        "chupete nuk luminoso.webp":"nuk luminoso",
        "chupete vaita.webp":"vaita",





   
  // Podés seguir agregando todos los que necesites
};






export const productos = Object.entries(imagenes).map(([ruta, modulo], index) => {
  const nombreArchivo = ruta.replace('./img/', ''); 
  
  const nombreLimpio = nombresAMano[nombreArchivo] || 
    nombreArchivo.replace(/\.(jpeg|jpg|png|webp)$/, '').replace(/([A-Z])/g, ' $1').trim();

  const precioTarjeta = listaPrecios[nombreArchivo] || 0;
 

 // DENTRO DE src/data.js (en el .map)

  let marca = "Otras";
  const archivoLower = nombreArchivo.toLowerCase();

  // 1. PRIMERO preguntamos si es óleo. 
  // Si es "oleo estrella", entrará aquí y la marca será "Oleo".
 
  // 2. RECIÉN DESPUÉS preguntamos por las marcas de pañales
   if (archivoLower.includes('huggies')) {
    marca = "Huggies";
  }  if (archivoLower.includes('pampers')) {
    marca = "Pampers";
  }  if (archivoLower.includes('babysec')) {
    marca = "Babysec";
  }  if (archivoLower.includes('estrella')) {
    marca = "Estrella";
  }
 if (archivoLower.includes('pm')) {
    marca = "Para mama"; 
  } 
  if (archivoLower.includes('algodon')) {
    marca = "Algodones"; 
  } 
  
  if (archivoLower.includes('higiene')) {
    marca = "Perfumeria"; 
  } 
if (archivoLower.includes('ole')) {
    marca = "Oleo"; 
  } 
  if (archivoLower.includes('toallitas')) {
    marca = "Toallitas"; 
  } 
 if (archivoLower.includes('mamadera')) {
    marca = "Mamaderas"; 
  } 
  if (archivoLower.includes('chupete')) {
    marca = "Chupetes"; 
  } 




 // --- LÓGICA DE PRECIO DIFERENCIADO ---
  // Definimos qué marcas son pañales (excluyendo categorías que no lo son)
  const marcasPanales = ["Huggies", "Pampers", "Babysec", "Estrella"];
  const esPanal = marcasPanales.includes(marca) && 
                  !archivoLower.includes('oleo') && 
                  !archivoLower.includes('toallitas') && 
                  !archivoLower.includes('jabon');

 // Si es pañal, calculamos el 10% de descuento. Si no, lo dejamos en null o 0.
  const precioEfectivo = esPanal ? Math.round(precioTarjeta * 0.90) : null;


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
    esPanal: esPanal, // Propiedad útil para el componente visual
    prioridad: obtenerPrioridad(nombreArchivo) // Usamos esto solo para el sort
  };
}).sort((a, b) => a.prioridad - b.prioridad);

