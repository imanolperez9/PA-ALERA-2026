import { useState } from 'react';
import { productos } from './data';

function App() {
  const [marcaSeleccionada, setMarcaSeleccionada] = useState('Todas');
  const [carrito, setCarrito] = useState([]);
  const [carritoAbierto, setCarritoAbierto] = useState(false);

  // --- LÓGICA DEL CARRITO ---
  const agregarAlCarrito = (producto) => {
    const existe = carrito.find(p => p.id === producto.id);
    if (existe) {
      setCarrito(carrito.map(p => p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p));
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const eliminarDelCarrito = (id) => setCarrito(carrito.filter(p => p.id !== id));

  // CÁLCULOS DE TOTALES DUALES
  const totalEfectivo = carrito.reduce((sum, p) => sum + (p.precioEfectivo * p.cantidad), 0);
  const totalTarjeta = carrito.reduce((sum, p) => sum + (p.precioTarjeta * p.cantidad), 0);
  const cantidadTotal = carrito.reduce((sum, p) => sum + p.cantidad, 0);

  // --- FILTROS ---
  const marcas = ['Todas', ...new Set(productos.map(p => p.marca))];
  const productosFiltrados = marcaSeleccionada === 'Todas' ? productos : productos.filter(p => p.marca === marcaSeleccionada);

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {/* HEADER CON BOTÓN DE CARRITO */}
      <header className="flex justify-between items-center max-w-6xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-blue-900 tracking-tight">Pañalera 2026</h1>
        <button 
          onClick={() => setCarritoAbierto(true)}
          className="bg-blue-600 text-white p-4 rounded-full relative shadow-xl hover:bg-blue-700 transition-all active:scale-90 cursor-pointer"
        >
          <span className="text-3xl block">🛒</span> 
          {cantidadTotal > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full border-2 border-white animate-bounce">
              {cantidadTotal}
            </span>
          )}
        </button>
      </header>

      {/* FILTROS */}
      <div className="flex justify-center gap-2 mb-10 flex-wrap">
        {marcas.map(marca => (
          <button 
            key={marca} 
            onClick={() => setMarcaSeleccionada(marca)}
            className={`px-5 py-2 rounded-full border font-semibold cursor-pointer transition-colors ${
              marcaSeleccionada === marca ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-blue-600 border-blue-200 hover:bg-blue-50'
            }`}
          >
            {marca}
          </button>
        ))}
      </div>

      {/* GRILLA DE PRODUCTOS */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {productosFiltrados.map((prod) => (
          <div key={prod.id} className="bg-white p-3 rounded-2xl shadow-sm border flex flex-col justify-between">
            <img src={prod.imagen} alt={prod.nombre} className="h-32 w-full object-contain mb-2" />
            <h2 className="text-sm font-semibold h-10 overflow-hidden leading-tight mb-2 uppercase">{prod.nombre}</h2>
            
            {/* DOBLE PRECIO EN PRODUCTO */}
            <div className="space-y-1 mb-3 bg-gray-50 p-2 rounded-xl">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-black text-gray-400 uppercase">Efectivo</span>
                <span className="text-lg font-black text-green-600">${prod.precioEfectivo.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center border-t border-gray-200 pt-1">
                <span className="text-[9px] font-black text-gray-400 uppercase">Tarjeta</span>
                <span className="text-sm font-bold text-blue-800">${prod.precioTarjeta.toLocaleString()}</span>
              </div>
            </div>

            <button 
              onClick={() => agregarAlCarrito(prod)} 
              className="w-full bg-blue-600 text-white py-2 rounded-xl text-sm font-bold cursor-pointer hover:brightness-110 active:scale-95 transition-all"
            >
              Agregar
            </button>
          </div>
        ))}
      </div>

      {/* CARRITO LATERAL (SIDEBAR) */}
      {carritoAbierto && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="bg-white w-full max-w-md h-full p-6 shadow-xl flex flex-col">
            <div className="flex justify-between items-center border-b pb-4 mb-4">
              <h2 className="text-2xl font-bold">Tu Carrito</h2>
              <button onClick={() => setCarritoAbierto(false)} className="text-2xl cursor-pointer hover:text-red-500 transition-colors">✕</button>
            </div>

            <div className="flex-1 overflow-y-auto">
              {carrito.length === 0 ? <p className="text-center text-gray-500 mt-10">El carrito está vacío</p> : 
                carrito.map(p => (
                  <div key={p.id} className="flex items-center justify-between mb-4 border-b pb-2">
                    <div className="flex items-center gap-3">
                      <img src={p.imagen} className="w-12 h-12 object-contain" />
                      <div>
                        <p className="text-xs font-bold leading-tight">{p.nombre}</p>
                        <p className="text-[10px] text-gray-500">{p.cantidad} x ${p.precioEfectivo.toLocaleString()} (Efec.)</p>
                      </div>
                    </div>
                    <button onClick={() => eliminarDelCarrito(p.id)} className="text-red-500 text-xs font-bold cursor-pointer hover:underline">Quitar</button>
                  </div>
                ))
              }
            </div>

            {/* SECCIÓN DE TOTALES DUALES */}
            <div className="border-t pt-4 space-y-3 bg-gray-50 p-4 rounded-t-3xl">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase">Total Efectivo</p>
                  <p className="text-3xl font-black text-green-600">${totalEfectivo.toLocaleString()}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black text-gray-400 uppercase">Total Tarjeta</p>
                  <p className="text-3xl font-bold text-blue-900">${totalTarjeta.toLocaleString()}</p>
                </div>
              </div>

            

              <button 
                onClick={() => setCarrito([])} 
                className="w-full bg-green-600 text-white py-4 rounded-2xl font-bold text-lg cursor-pointer hover:bg-green-700 transition-all active:scale-95 shadow-lg"
              >
                Vaciar carrito
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
