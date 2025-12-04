const express = require("express");
const app = express();
const port = 3000;

// Middleware para recibir JSON
app.use(express.json());

// Base de datos temporal (en memoria)
let perros = [
  { id: 1, nombre: "Firulais", raza: "Labrador", edad: 4 },
  { id: 2, nombre: "Rocco", raza: "Pitbull", edad: 2 },
  { id: 3, nombre: "Max", raza: "Golden Retriever", edad: 3 },
  { id: 4, nombre: "Luna", raza: "Husky Siberiano", edad: 5 },
  { id: 5, nombre: "Rocky", raza: "Pastor Alemán", edad: 6 },
  { id: 6, nombre: "Bella", raza: "Beagle", edad: 2 },
  { id: 7, nombre: "Toby", raza: "Bulldog Francés", edad: 4 },
  { id: 8, nombre: "Coco", raza: "Chihuahua", edad: 3 },
  { id: 9, nombre: "Zeus", raza: "Rottweiler", edad: 7 },
  { id: 10, nombre: "Lola", raza: "Poodle", edad: 2 },
 
];

// GET - Obtener todos los perros
app.get("/perros", (req, res) => {
  res.json(perros);
});

// GET - Obtener un perro por ID
app.get("/perros/:id", (req, res) => {
  const perro = perros.find(p => p.id == req.params.id);
  if (!perro) return res.status(404).json({ mensaje: "Perro no encontrado" });
  res.json(perro);
});

// POST - Crear un perro nuevo
app.post("/perros", (req, res) => {
  const nuevoPerro = {
    id: perros.length + 1,
    nombre: req.body.nombre,
    raza: req.body.raza,
    edad: req.body.edad
  };
  perros.push(nuevoPerro);
  res.status(201).json(nuevoPerro);
});

// PUT - Actualizar un perro completo
app.put("/perros/:id", (req, res) => {
  const perro = perros.find(p => p.id == req.params.id);
  if (!perro) return res.status(404).json({ mensaje: "Perro no encontrado" });

  perro.nombre = req.body.nombre;
  perro.raza = req.body.raza;
  perro.edad = req.body.edad;

  res.json({ mensaje: "Perro actualizado", perro });
});

// PATCH - Actualizar solo una propiedad
app.patch("/perros/:id", (req, res) => {
  const perro = perros.find(p => p.id == req.params.id);
  if (!perro) return res.status(404).json({ mensaje: "Perro no encontrado" });

  Object.assign(perro, req.body);
  res.json({ mensaje: "Perro modificado", perro });
});

// DELETE - Eliminar un perro
app.delete("/perros/:id", (req, res) => {
  perros = perros.filter(p => p.id != req.params.id);
  res.json({ mensaje: "Perro eliminado correctamente" });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`API funcionando en http://localhost:${port}`);
});
