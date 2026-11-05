db = db.getSiblingDb('ddbb_renta_de_videos');

db.clientes.drop();
db.peliculas.drop();
db.rentas.drop();

db.clientes.insertMany([
  { nombre: "Carlos Mendoza", email: "carlos@mail.com", telefono: "71234567", fecha_registro: new Date() },
  { nombre: "Ana Rodríguez", email: "ana@mail.com", telefono: "60123456", fecha_registro: new Date() }
]);

db.peliculas.insertMany([
  { titulo: "Inception", genero: "Ciencia Ficción", anio: 2010, precio_renta: 15.50, stock: 5 },
  { titulo: "The Godfather", genero: "Drama", anio: 1972, precio_renta: 20.00, stock: 3 }
]);

const c1 = db.clientes.findOne({ nombre: "Carlos Mendoza" })._id;
const p1 = db.peliculas.findOne({ titulo: "Inception" })._id;

db.rentas.insertOne({
  cliente_id: c1,
  peliculas: [{ pelicula_id: p1, cantidad: 1 }],
  fecha_renta: new Date(),
  total: 15.50,
  estado: "Rentado"
});

print("--- ¡DATOS CARGADOS CON ÉXITO! ---");
