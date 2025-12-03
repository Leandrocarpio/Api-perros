# 🐕 API REST de Perros - CRUD Completo

<div align="center">

**API REST completa con operaciones CRUD para gestión de perros**

[📖 Documentación](#-endpoints-disponibles) | 
[🚀 Instalación](#-instalación) | 
[💻 Uso](#-ejemplo-de-uso)

</div>

---

## 🌟 Sobre el Proyecto

API REST desarrollada con **Node.js** y **Express.js** que permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una base de datos en memoria de 100 perros con información detallada.

### 🎯 Características Principales

- ✅ **CRUD Completo** - GET, POST, PUT, PATCH, DELETE
- ✅ **100 Registros** - Base de datos con 100 perros precargados
- ✅ **Respuestas JSON** - Formato estándar para APIs REST
- ✅ **Validación de IDs** - Manejo de errores 404
- ✅ **Base de datos en memoria** - Rápida y eficiente
- ✅ **Código limpio y documentado** - Fácil de entender y mantener

## 🛠 Tecnologías Utilizadas

### Backend
- **Node.js** - Entorno de ejecución JavaScript
- **Express.js** - Framework web minimalista
- **JavaScript ES6+** - Sintaxis moderna

### Arquitectura
- **RESTful API** - Diseño de endpoints siguiendo estándares REST
- **Middleware** - express.json() para manejo de datos
- **In-Memory Database** - Array de objetos como base de datos temporal

## 📁 Estructura del Proyecto

```
api-perros/
│
├── node_modules/          # Dependencias del proyecto
├── index.js               # Archivo principal con la API
├── package.json           # Configuración del proyecto
├── package-lock.json      # Lock de dependencias
├── .gitignore            # Archivos ignorados por Git
└── README.md             # Documentación del proyecto
```

## 📦 Instalación

### Prerrequisitos
- Node.js (v14 o superior)
- npm (v6 o superior)

### Pasos

1. **Clonar el repositorio**
```bash
git clone https://github.com/Leandrocarpio/api-perros.git
cd api-perros
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar el servidor**
```bash
npm start
```

El servidor se ejecutará en `http://localhost:3000`

---

## 🔗 Endpoints Disponibles

| Método | Endpoint | Descripción | Body |
|--------|----------|-------------|------|
| `GET` | `/perros` | Obtener todos los perros | - |
| `GET` | `/perros/:id` | Obtener un perro por ID | - |
| `POST` | `/perros` | Crear un nuevo perro | `{ nombre, raza, edad }` |
| `PUT` | `/perros/:id` | Actualizar un perro completo | `{ nombre, raza, edad }` |
| `PATCH` | `/perros/:id` | Modificar propiedades específicas | `{ nombre?, raza?, edad? }` |
| `DELETE` | `/perros/:id` | Eliminar un perro | - |

---

## 💻 Ejemplo de Uso

### 📄 Obtener todos los perros
```bash
GET http://localhost:3000/perros
```

**Respuesta:**
```json
[
  { "id": 1, "nombre": "Firulais", "raza": "Labrador", "edad": 4 },
  { "id": 2, "nombre": "Rocco", "raza": "Pitbull", "edad": 2 },
  ...
]
```

---

### 🔍 Obtener un perro por ID
```bash
GET http://localhost:3000/perros/1
```

**Respuesta:**
```json
{
  "id": 1,
  "nombre": "Firulais",
  "raza": "Labrador",
  "edad": 4
}
```

---

### ➕ Crear un perro nuevo
```bash
POST http://localhost:3000/perros
Content-Type: application/json

{
  "nombre": "Rex",
  "raza": "Pastor Alemán",
  "edad": 5
}
```

**Respuesta:**
```json
{
  "id": 101,
  "nombre": "Rex",
  "raza": "Pastor Alemán",
  "edad": 5
}
```

---

### ✏️ Actualizar un perro completo (PUT)
```bash
PUT http://localhost:3000/perros/1
Content-Type: application/json

{
  "nombre": "Firulais Actualizado",
  "raza": "Labrador Retriever",
  "edad": 5
}
```

**Respuesta:**
```json
{
  "mensaje": "Perro actualizado",
  "perro": {
    "id": 1,
    "nombre": "Firulais Actualizado",
    "raza": "Labrador Retriever",
    "edad": 5
  }
}
```

---

### 🔧 Modificar propiedades (PATCH)
```bash
PATCH http://localhost:3000/perros/1
Content-Type: application/json

{
  "edad": 6
}
```

**Respuesta:**
```json
{
  "mensaje": "Perro modificado",
  "perro": {
    "id": 1,
    "nombre": "Firulais",
    "raza": "Labrador",
    "edad": 6
  }
}
```

---

### 🗑️ Eliminar un perro
```bash
DELETE http://localhost:3000/perros/1
```

**Respuesta:**
```json
{
  "mensaje": "Perro eliminado correctamente"
}
```

---

## 🧪 Pruebas con Thunder Client (VS Code)

1. Instala la extensión **Thunder Client** en VS Code
2. Clic en el ícono del rayo ⚡ en la barra lateral
3. Crea una nueva petición
4. Selecciona el método HTTP (GET, POST, PUT, PATCH, DELETE)
5. Ingresa la URL: `http://localhost:3000/perros`
6. Para POST, PUT, PATCH: agrega el body en formato JSON
7. Clic en **Send**

---

## 📚 Conceptos Aprendidos

- ✅ Creación de APIs REST con Express.js
- ✅ Manejo de rutas y parámetros
- ✅ Métodos HTTP: GET, POST, PUT, PATCH, DELETE
- ✅ Middleware para parsear JSON
- ✅ Gestión de base de datos en memoria
- ✅ Validación y manejo de errores
- ✅ Respuestas con códigos de estado HTTP

---

## 🚀 Próximas Mejoras

- [ ] Conectar a una base de datos real (MongoDB/PostgreSQL)
- [ ] Agregar validación de datos con middleware
- [ ] Implementar autenticación JWT
- [ ] Agregar paginación en GET /perros
- [ ] Documentación con Swagger
- [ ] Tests unitarios con Jest
- [ ] Deploy en Heroku/Railway/Render

---

## 👨‍💻 Autor

**Leandro Carpio**

Proyecto realizado como práctica de desarrollo backend con Node.js y Express.

---

<div align="center">

**⭐ Si te gustó este proyecto, dale una estrella en GitHub ⭐**

</div>

