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
  { id: 11, nombre: "Bruno", raza: "Boxer", edad: 5 },
  { id: 12, nombre: "Mia", raza: "Dálmata", edad: 4 },
  { id: 13, nombre: "Simba", raza: "Chow Chow", edad: 6 },
  { id: 14, nombre: "Nina", raza: "Shih Tzu", edad: 3 },
  { id: 15, nombre: "Thor", raza: "Doberman", edad: 5 },
  { id: 16, nombre: "Kira", raza: "Border Collie", edad: 2 },
  { id: 17, nombre: "Duke", raza: "Gran Danés", edad: 8 },
  { id: 18, nombre: "Maya", raza: "Cocker Spaniel", edad: 4 },
  { id: 19, nombre: "Rex", raza: "San Bernardo", edad: 7 },
  { id: 20, nombre: "Nala", raza: "Yorkshire Terrier", edad: 2 },
  { id: 21, nombre: "Diesel", raza: "Bullmastiff", edad: 6 },
  { id: 22, nombre: "Candy", raza: "Maltés", edad: 3 },
  { id: 23, nombre: "Hank", raza: "Akita", edad: 5 },
  { id: 24, nombre: "Pepper", raza: "Schnauzer", edad: 4 },
  { id: 25, nombre: "Buddy", raza: "Basset Hound", edad: 6 },
  { id: 26, nombre: "Princesa", raza: "Pomerania", edad: 2 },
  { id: 27, nombre: "Atlas", raza: "Mastín Napolitano", edad: 7 },
  { id: 28, nombre: "Ruby", raza: "Bulldog Inglés", edad: 5 },
  { id: 29, nombre: "Odin", raza: "Pastor Belga", edad: 4 },
  { id: 30, nombre: "Daisy", raza: "Cavalier King Charles", edad: 3 },
  { id: 31, nombre: "Titan", raza: "Cane Corso", edad: 6 },
  { id: 32, nombre: "Chloe", raza: "Bichón Frisé", edad: 2 },
  { id: 33, nombre: "Brutus", raza: "Staffordshire Bull Terrier", edad: 5 },
  { id: 34, nombre: "Zoe", raza: "Papillon", edad: 3 },
  { id: 35, nombre: "Apollo", raza: "Weimaraner", edad: 4 },
  { id: 36, nombre: "Stella", raza: "Boston Terrier", edad: 2 },
  { id: 37, nombre: "Bear", raza: "Terranova", edad: 8 },
  { id: 38, nombre: "Rosie", raza: "Pug", edad: 4 },
  { id: 39, nombre: "Rambo", raza: "American Bully", edad: 5 },
  { id: 40, nombre: "Honey", raza: "Shiba Inu", edad: 3 },
  { id: 41, nombre: "King", raza: "Dogo Argentino", edad: 6 },
  { id: 42, nombre: "Leia", raza: "Corgi Galés", edad: 2 },
  { id: 43, nombre: "Kaiser", raza: "Pastor Australiano", edad: 4 },
  { id: 44, nombre: "Ginger", raza: "Irish Setter", edad: 5 },
  { id: 45, nombre: "Hulk", raza: "Presa Canario", edad: 7 },
  { id: 46, nombre: "Olive", raza: "West Highland Terrier", edad: 3 },
  { id: 47, nombre: "Champ", raza: "Vizsla", edad: 4 },
  { id: 48, nombre: "Mimi", raza: "Lhasa Apso", edad: 2 },
  { id: 49, nombre: "Chief", raza: "Rhodesian Ridgeback", edad: 6 },
  { id: 50, nombre: "Pixie", raza: "Jack Russell Terrier", edad: 3 },
  { id: 51, nombre: "Maverick", raza: "Setter Inglés", edad: 5 },
  { id: 52, nombre: "Willow", raza: "Springer Spaniel", edad: 4 },
  { id: 53, nombre: "Bandit", raza: "Bull Terrier", edad: 6 },
  { id: 54, nombre: "Lily", raza: "Pekinés", edad: 2 },
  { id: 55, nombre: "Ghost", raza: "Samoyedo", edad: 5 },
  { id: 56, nombre: "Sophie", raza: "Cairn Terrier", edad: 3 },
  { id: 57, nombre: "Ranger", raza: "Pointer Alemán", edad: 4 },
  { id: 58, nombre: "Abby", raza: "Coton de Tulear", edad: 2 },
  { id: 59, nombre: "Axel", raza: "Alaskan Malamute", edad: 7 },
  { id: 60, nombre: "Penny", raza: "Affenpinscher", edad: 3 },
  { id: 61, nombre: "Tank", raza: "Fila Brasileiro", edad: 6 },
  { id: 62, nombre: "Hazel", raza: "Havanese", edad: 2 },
  { id: 63, nombre: "Jax", raza: "Braco Alemán", edad: 5 },
  { id: 64, nombre: "Ivy", raza: "Bolognese", edad: 3 },
  { id: 65, nombre: "Blaze", raza: "Dogo de Burdeos", edad: 7 },
  { id: 66, nombre: "Poppy", raza: "Sussex Spaniel", edad: 4 },
  { id: 67, nombre: "Maximus", raza: "Leonberger", edad: 8 },
  { id: 68, nombre: "Sadie", raza: "Norfolk Terrier", edad: 2 },
  { id: 69, nombre: "Hunter", raza: "Braco de Weimar", edad: 5 },
  { id: 70, nombre: "Molly", raza: "Dandie Dinmont Terrier", edad: 3 },
  { id: 71, nombre: "Gunner", raza: "Perro de Montaña de Berna", edad: 6 },
  { id: 72, nombre: "Ellie", raza: "Sealyham Terrier", edad: 2 },
  { id: 73, nombre: "Sarge", raza: "Boyero de Flandes", edad: 7 },
  { id: 74, nombre: "Piper", raza: "Glen of Imaal Terrier", edad: 4 },
  { id: 75, nombre: "Major", raza: "Komondor", edad: 8 },
  { id: 76, nombre: "Winnie", raza: "Skye Terrier", edad: 3 },
  { id: 77, nombre: "Spartacus", raza: "Tosa Inu", edad: 6 },
  { id: 78, nombre: "Maple", raza: "Lowchen", edad: 2 },
  { id: 79, nombre: "Vader", raza: "Boerboel", edad: 7 },
  { id: 80, nombre: "Luna", raza: "Basenji", edad: 4 },
  { id: 81, nombre: "Brutus", raza: "Bloodhound", edad: 5 },
  { id: 82, nombre: "Coco", raza: "Bichón Habanero", edad: 3 },
  { id: 83, nombre: "Ace", raza: "Pastor de Anatolia", edad: 6 },
  { id: 84, nombre: "Bella", raza: "Silky Terrier", edad: 2 },
  { id: 85, nombre: "Rocco", raza: "Perro Lobo Checoslovaco", edad: 7 },
  { id: 86, nombre: "Zoey", raza: "Toy Fox Terrier", edad: 3 },
  { id: 87, nombre: "Shadow", raza: "Kuvasz", edad: 8 },
  { id: 88, nombre: "Annie", raza: "Manchester Terrier", edad: 2 },
  { id: 89, nombre: "Duke", raza: "Bobtail", edad: 6 },
  { id: 90, nombre: "Emma", raza: "Rat Terrier", edad: 4 },
  { id: 91, nombre: "General", raza: "Collie Barbudo", edad: 5 },
  { id: 92, nombre: "Lucy", raza: "Chin Japonés", edad: 3 },
  { id: 93, nombre: "Titan", raza: "Perro de Agua Portugués", edad: 7 },
  { id: 94, nombre: "Gracie", raza: "Bedlington Terrier", edad: 2 },
  { id: 95, nombre: "Rebel", raza: "Spinone Italiano", edad: 6 },
  { id: 96, nombre: "Maggie", raza: "Tibetan Spaniel", edad: 4 },
  { id: 97, nombre: "Boss", raza: "Perro de Castro Laboreiro", edad: 8 },
  { id: 98, nombre: "Bailey", raza: "Welsh Terrier", edad: 3 },
  { id: 99, nombre: "Captain", raza: "Perro de Groenlandia", edad: 5 },
  { id: 100, nombre: "Molly", raza: "Otterhound", edad: 2 }
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
