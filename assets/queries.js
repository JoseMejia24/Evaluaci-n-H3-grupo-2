db = db.getSiblingDb('ddbb_renta_de_videos');

print("\n=== CONSULTA 1: PELÍCULAS DE CIENCIA FICCIÓN ===");
db.peliculas.find({ genero: "Ciencia Ficción" }).pretty();

print("\n=== CONSULTA 2: REPORTES DE RENTAS ACTIVAS ===");
db.rentas.find({ estado: "Rentado" }).pretty();
