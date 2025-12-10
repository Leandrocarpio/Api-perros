# 🐾 Sistema de Gestión Veterinaria - Full Stack

<div align="center">

**Sistema completo de gestión de pacientes veterinarios con API REST y interfaz web profesional**

[📖 Documentación](#-documentación-de-la-api) | 
[🚀 Instalación](#-instalación) | 
[💻 Uso](#-uso-del-sistema)

</div>

---

## 🌟 Sobre el Proyecto

Sistema full stack para la gestión de pacientes de una clínica veterinaria, desarrollado con **Node.js**, **Express.js** y **JavaScript Vanilla**. Incluye una **API REST completa** para operaciones CRUD y una **interfaz web moderna e intuitiva** para la gestión visual de los pacientes.

⚠️ **Nota Importante:** Este proyecto está diseñado para ejecutarse en **localhost**. Requiere Node.js instalado y no está desplegado en servicios online, ya que incluye un servidor backend que debe ejecutarse localmente.

---

## ✨ Características Principales

### 🔧 Backend (API REST)
- ✅ **CRUD Completo** - Crear, Leer, Actualizar y Eliminar pacientes
- ✅ **5 Métodos HTTP** - GET, POST, PUT, PATCH, DELETE
- ✅ **100 Pacientes Precargados** - Base de datos lista para usar
- ✅ **Validación de Datos** - Manejo de errores 404
- ✅ **Respuestas JSON** - Formato estándar REST API
- ✅ **Base de Datos en Memoria** - Rápida y eficiente

### 🎨 Frontend (Interfaz Web)
- ✅ **Diseño Profesional** - Inspirado en clínicas veterinarias modernas
- ✅ **Gestión Visual Completa** - Registrar, editar y eliminar pacientes
- ✅ **Búsqueda en Tiempo Real** - Filtrar por nombre o raza instantáneamente
- ✅ **Estadísticas Dinámicas** - Total, edad promedio, raza más popular
- ✅ **Interfaz Responsive** - Adaptable a móvil, tablet y desktop
- ✅ **Notificaciones Visuales** - Feedback inmediato de cada acción
- ✅ **Modal de Edición** - Experiencia de usuario optimizada
- ✅ **Animaciones Suaves** - Transiciones CSS modernas

---

## 🛠 Tecnologías Utilizadas

### Backend
- **Node.js** - Entorno de ejecución JavaScript
- **Express.js** - Framework web minimalista y rápido
- **JavaScript ES6+** - Sintaxis moderna con módulos

### Frontend
- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con Flexbox, Grid y animaciones
- **JavaScript Vanilla** - Sin dependencias externas
- **Fetch API** - Consumo de la API REST

### Arquitectura
- **RESTful API** - Endpoints siguiendo estándares REST
- **Separación Frontend/Backend** - Estructura profesional con carpeta `public/`
- **Express Static Middleware** - Servir archivos estáticos
- **Modularización** - Datos separados en archivo `perros.js`

---

## 📁 Estructura del Proyecto

```
api-perros/
│
├── public/                    # 🎨 Frontend (Interfaz Web)
│   ├── index.html            #    Página principal de la clínica
│   ├── styles.css            #    Estilos profesionales y responsive
│   └── script.js             #    Lógica del frontend (consume la API)
│
├── node_modules/             # 📦 Dependencias de Node.js
├── index.js                  # 🔧 Backend (Servidor API REST)
├── perros.js                 # 💾 Base de datos (100 pacientes)
├── package.json              # ⚙️ Configuración del proyecto
├── package-lock.json         # 🔒 Lock de dependencias
├── .gitignore               # 🚫 Archivos ignorados por Git
└── README.md                # 📄 Documentación (este archivo)
```

### 💡 ¿Por qué esta estructura?

Esta organización separa claramente el **frontend** (carpeta `public/`) del **backend** (archivos raíz), siguiendo el **estándar de la industria** para aplicaciones Express.js. Esto permite:
- **Escalabilidad** - Fácil agregar más funcionalidades
- **Mantenibilidad** - Código organizado y fácil de entender
- **Profesionalismo** - Estructura reconocida por reclutadores

---

## 📦 Instalación

### Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:
- ✅ **Node.js** (v14 o superior) - [Descargar aquí](https://nodejs.org/)
- ✅ **npm** (v6 o superior) - Se instala automáticamente con Node.js
- ✅ **Git** - Para clonar el repositorio

### Pasos de Instalación

#### 1️⃣ Clonar el repositorio

Abre tu terminal (Git Bash, CMD, PowerShell) y ejecuta:

```bash
git clone https://github.com/Leandrocarpio/Api-perros.git
cd Api-perros
```

#### 2️⃣ Instalar dependencias

Dentro de la carpeta del proyecto, ejecuta:

```bash
npm install
```

Esto instalará Express.js y todas las dependencias necesarias.

#### 3️⃣ Iniciar el servidor

```bash
npm start
```

Deberías ver en la terminal:

```
API funcionando en http://localhost:3000
```

#### 4️⃣ Abrir en el navegador

Abre tu navegador preferido y visita:

```
http://localhost:3000
```

🎉 **¡Listo!** El sistema estará funcionando completamente en tu computadora.

---

## 💻 Uso del Sistema

### 🌐 Interfaz Web

**URL Principal:** `http://localhost:3000`

#### Funcionalidades Disponibles:

**1. 📋 Registrar Nuevo Paciente**
- Completa el formulario con nombre, raza y edad
- Haz clic en "➕ Registrar Paciente"
- Verás una notificación verde de éxito
- El paciente aparecerá automáticamente en la lista

**2. 🐾 Ver Pacientes Registrados**
- Lista completa de los 100 pacientes precargados
- Diseño en tarjetas con colores degradados
- Información clara: nombre, raza, edad e ID

**3. 🔍 Buscar Pacientes**
- Usa el campo de búsqueda en la parte superior derecha
- Escribe el nombre o raza del paciente
- Los resultados se filtran instantáneamente
- Ejemplo: escribe "Max" para ver solo los perros llamados Max

**4. ✏️ Editar Paciente**
- Haz clic en el botón "✏️ Editar" de cualquier tarjeta
- Se abrirá un modal con el formulario pre-rellenado
- Modifica los datos que desees
- Haz clic en "💾 Guardar Cambios"
- Verás una notificación de éxito y los datos actualizados

**5. 🗑️ Eliminar Paciente**
- Haz clic en el botón "🗑️ Eliminar"
- Confirma la acción en el mensaje de seguridad
- El paciente se eliminará de la lista
- El contador de pacientes se actualizará automáticamente

**6. 📊 Estadísticas en Tiempo Real**
- **Total de Pacientes:** Contador dinámico
- **Edad Promedio:** Se recalcula automáticamente
- **Raza Más Popular:** Muestra la raza con más pacientes

---

## 📖 Documentación de la API

### Endpoints Disponibles

| Método | Endpoint | Descripción | Body | Respuesta |
|--------|----------|-------------|------|-----------|
| `GET` | `/perros` | Obtener todos los perros | - | Array de objetos JSON |
| `GET` | `/perros/:id` | Obtener un perro por ID | - | Objeto JSON del perro |
| `POST` | `/perros` | Crear un nuevo perro | `{ nombre, raza, edad }` | Perro creado |
| `PUT` | `/perros/:id` | Actualizar un perro completo | `{ nombre, raza, edad }` | Perro actualizado |
| `PATCH` | `/perros/:id` | Modificar propiedades específicas | `{ nombre?, raza?, edad? }` | Perro modificado |
| `DELETE` | `/perros/:id` | Eliminar un perro | - | Mensaje de éxito |

---

## 🧪 Ejemplos de Uso de la API

### 📄 Obtener todos los perros

**Request:**
```bash
GET http://localhost:3000/perros
```

**Response:**
```json
[
  { "id": 1, "nombre": "Firulais", "raza": "Labrador", "edad": 4 },
  { "id": 2, "nombre": "Rocco", "raza": "Pitbull", "edad": 2 },
  { "id": 3, "nombre": "Max", "raza": "Golden Retriever", "edad": 3 },
  ...
]
```

---

### 🔍 Obtener un perro por ID

**Request:**
```bash
GET http://localhost:3000/perros/1
```

**Response:**
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

**Request:**
```bash
POST http://localhost:3000/perros
Content-Type: application/json

{
  "nombre": "Rex",
  "raza": "Pastor Alemán",
  "edad": 5
}
```

**Response:**
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

**Request:**
```bash
PUT http://localhost:3000/perros/1
Content-Type: application/json

{
  "nombre": "Firulais Actualizado",
  "raza": "Labrador Retriever",
  "edad": 5
}
```

**Response:**
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

### 🔧 Modificar propiedades específicas (PATCH)

**Request:**
```bash
PATCH http://localhost:3000/perros/1
Content-Type: application/json

{
  "edad": 6
}
```

**Response:**
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

**Request:**
```bash
DELETE http://localhost:3000/perros/1
```

**Response:**
```json
{
  "mensaje": "Perro eliminado correctamente"
}
```

---

## 🧪 Pruebas de la API

### Con Thunder Client (Extensión de VS Code)

1. Instala la extensión **Thunder Client** en Visual Studio Code
2. Haz clic en el ícono del rayo ⚡ en la barra lateral
3. Crea una nueva petición (New Request)
4. Selecciona el método HTTP (GET, POST, PUT, PATCH, DELETE)
5. Ingresa la URL: `http://localhost:3000/perros`
6. Para POST, PUT, PATCH: agrega el body en formato JSON
7. Haz clic en **Send**

### Con el Navegador (Solo para GET)

Simplemente visita estas URLs en tu navegador:

- **Ver todos los perros:** `http://localhost:3000/perros`
- **Ver un perro específico:** `http://localhost:3000/perros/1`

### Con la Interfaz Web

La forma más fácil es usar la interfaz web en `http://localhost:3000` donde puedes:
- ✅ Registrar pacientes con el formulario
- ✅ Ver todos los pacientes en tarjetas
- ✅ Editar pacientes con el modal
- ✅ Eliminar pacientes con confirmación

---

## 📚 Conceptos Implementados

### Backend
- ✅ Creación de APIs REST con Express.js
- ✅ Manejo de rutas y parámetros dinámicos
- ✅ Métodos HTTP: GET, POST, PUT, PATCH, DELETE
- ✅ Middleware para parsear JSON (`express.json()`)
- ✅ Middleware para servir archivos estáticos (`express.static()`)
- ✅ Gestión de base de datos en memoria
- ✅ Modularización de datos (archivo `perros.js` separado)
- ✅ Validación y manejo de errores 404

### Frontend
- ✅ Consumo de APIs REST con Fetch API
- ✅ Manipulación dinámica del DOM con JavaScript
- ✅ Eventos y validación de formularios
- ✅ Diseño responsive con CSS Grid y Flexbox
- ✅ Animaciones y transiciones CSS
- ✅ Sistema de notificaciones dinámicas
- ✅ Manejo de modales con JavaScript
- ✅ Filtrado de datos en tiempo real
- ✅ Cálculo de estadísticas dinámicas

---

## 🚀 Próximas Mejoras

- [ ] Conectar a una base de datos real (MongoDB/PostgreSQL)
- [ ] Sistema de autenticación de usuarios (JWT)
- [ ] Subir imágenes de los pacientes
- [ ] Historial médico de cada paciente
- [ ] Sistema de citas y recordatorios
- [ ] Exportar datos a PDF/Excel
- [ ] Dashboard con gráficos estadísticos (Chart.js)
- [ ] Modo oscuro (Dark Mode)
- [ ] Paginación de resultados
- [ ] Tests unitarios con Jest
- [ ] Documentación con Swagger
- [ ] Deploy del backend (Railway/Render)
- [ ] Deploy del frontend (Vercel/Netlify)

---

## 🐛 Solución de Problemas

### ❌ El servidor no inicia

**Problema:** Al ejecutar `npm start` aparece un error.

**Solución:**
```bash
# Verifica que Node.js esté instalado
node -v

# Si no aparece la versión, instala Node.js desde nodejs.org

# Reinstala las dependencias
rm -rf node_modules package-lock.json
npm install
```

---

### ❌ No aparece nada en el navegador

**Problema:** La página está en blanco o muestra un error.

**Solución:**
1. Asegúrate de que el servidor esté corriendo (debes ver "API funcionando en http://localhost:3000")
2. Verifica que estás yendo a `http://localhost:3000` (sin `/perros`)
3. Abre la consola del navegador (F12) y busca errores
4. Recarga la página con Ctrl + Shift + R (hard refresh)

---

### ❌ Los cambios no se ven

**Problema:** Hice modificaciones pero no aparecen.

**Solución:**
1. Detén el servidor en la terminal (Ctrl + C)
2. Reinicia con `npm start`
3. Recarga la página con Ctrl + Shift + R
4. Limpia la caché del navegador si es necesario

---

### ❌ Error: Puerto 3000 en uso

**Problema:** Aparece "Error: listen EADDRINUSE: address already in use :::3000"

**Solución:**
```bash
# En Windows (Git Bash/CMD/PowerShell)
netstat -ano | findstr :3000
taskkill /PID [número_del_proceso] /F

# En Mac/Linux
lsof -ti:3000 | xargs kill -9
```

---

## 👨‍💻 Autor

**Leandro Carpio**

Proyecto full stack desarrollado como práctica de desarrollo web moderno con Node.js, Express.js y JavaScript.

- 🌐 GitHub: [@Leandrocarpio](https://github.com/Leandrocarpio)
- 📂 Repositorio: [Api-perros](https://github.com/Leandrocarpio/Api-perros)

---

## 🙏 Agradecimientos

- A la comunidad de **Node.js** y **Express.js** por el excelente framework
- A todos los desarrolladores que comparten conocimiento en la web
- A mi profe y compañeros del curso por el apoyo y feedback

---

<div align="center">

### ⭐ Si te gustó este proyecto, dale una estrella en GitHub ⭐

**Desarrollado con ❤️ y ☕ por Leandro Carpio**

---

**💼 Proyecto disponible para portafolio profesional**

</div>
