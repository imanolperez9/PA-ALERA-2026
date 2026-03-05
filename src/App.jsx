import { useState } from 'react'; // Importamos el estado
import { productos } from './data';

function App() {
  const [marcaSeleccionada, setMarcaSeleccionada] = useState('Todas');

  // 1. Obtenemos las marcas únicas que existen en tus productos
  const marcas = ['Todas', ...new Set(productos.map(p => p.marca))];

  // 2. Filtramos la lista según lo que el usuario eligió
  const productosFiltrados = marcaSeleccionada === 'Todas' 
    ? productos 
    : productos.filter(p => p.marca === marcaSeleccionada);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-900">Catálogo de Pañales</h1>
        
        {/* BOTONES DE FILTRO */}
        <div className="flex justify-center gap-2 mt-6 flex-wrap">
          {marcas.map(marca => (
            <button
              key={marca}
              onClick={() => setMarcaSeleccionada(marca)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                marcaSeleccionada === marca 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'
              }`}
            >
              {marca}
            </button>
          ))}
        </div>
      </header>

      {/* GRILLA DE PRODUCTOS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productosFiltrados.map((prod) => (
          <div key={prod.id} className="bg-white p-4 rounded-2xl shadow-md border border-gray-200">
            <div className="h-48 flex items-center justify-center">
               <img src={prod.imagen} alt={prod.nombre} className="max-h-full max-w-full object-contain" />
            </div>
            <span className="text-xs font-bold text-blue-500 uppercase">{prod.marca}</span>
            <h2 className="font-semibold text-lg text-gray-800 line-clamp-2">{prod.nombre}</h2>
            <p className="text-2xl font-bold text-green-600 mt-2">${prod.precio}</p>
          </div>
        ))}
      </div>
      
      {/* Mensaje si no hay productos */}
      {productosFiltrados.length === 0 && (
        <p className="text-center text-gray-500 mt-10">No hay productos en esta categoría.</p>
      )}
    </div>
  );
}

export default App;
