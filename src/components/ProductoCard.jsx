export const ProductoCard = ({ producto }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform bg-white">
      <img 
        src={producto.imagen} 
        alt={producto.nombre} 
        className="w-full h-48 object-contain p-4"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{producto.nombre}</h3>
        <p className="text-sm text-gray-600 mb-2">{producto.descripcion}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-red-600">${producto.precio}</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};
