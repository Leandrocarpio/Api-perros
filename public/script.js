// Variables globales
let perros = [];
let perroEditando = null;

// URL de la API
const API_URL = 'http://localhost:3000/perros';

// Elementos del DOM
const formularioPerro = document.getElementById('formulario-perro');
const formularioEditar = document.getElementById('formulario-editar');
const listaPerros = document.getElementById('lista-perros');
const modalEditar = document.getElementById('modal-editar');
const btnCancelar = document.getElementById('btn-cancelar');
const closeModal = document.querySelector('.close');
const buscarInput = document.getElementById('buscar');

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', () => {
    cargarPerros();
    
    // Event Listeners
    formularioPerro.addEventListener('submit', registrarPerro);
    formularioEditar.addEventListener('submit', actualizarPerro);
    btnCancelar.addEventListener('click', cerrarModal);
    closeModal.addEventListener('click', cerrarModal);
    buscarInput.addEventListener('input', filtrarPerros);
    
    // Cerrar modal al hacer clic fuera
    window.addEventListener('click', (e) => {
        if (e.target === modalEditar) {
            cerrarModal();
        }
    });
});

// Cargar todos los perros desde la API
async function cargarPerros() {
    try {
        const response = await fetch(API_URL);
        perros = await response.json();
        mostrarPerros(perros);
        actualizarEstadisticas();
    } catch (error) {
        console.error('Error al cargar los perros:', error);
        mostrarNotificacion('Error al cargar los pacientes', 'error');
    }
}

// Mostrar perros en el DOM
function mostrarPerros(perrosAMostrar) {
    listaPerros.innerHTML = '';
    
    if (perrosAMostrar.length === 0) {
        listaPerros.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #757575;">No hay pacientes registrados</p>';
        return;
    }
    
    perrosAMostrar.forEach(perro => {
        const card = document.createElement('div');
        card.className = 'patient-card';
        card.innerHTML = `
            <h3>🐕 ${perro.nombre}</h3>
            <p><strong>Raza:</strong> ${perro.raza}</p>
            <p><strong>Edad:</strong> ${perro.edad} años</p>
            <p><strong>ID:</strong> #${perro.id}</p>
            <div class="card-actions">
                <button class="btn btn-edit" onclick="abrirModalEditar(${perro.id})">
                    ✏️ Editar
                </button>
                <button class="btn btn-delete" onclick="eliminarPerro(${perro.id})">
                    🗑️ Eliminar
                </button>
            </div>
        `;
        listaPerros.appendChild(card);
    });
}

// Registrar un nuevo perro
async function registrarPerro(e) {
    e.preventDefault();
    
    const nuevoPerro = {
        nombre: document.getElementById('nombre').value,
        raza: document.getElementById('raza').value,
        edad: parseInt(document.getElementById('edad').value)
    };
    
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoPerro)
        });
        
        if (response.ok) {
            mostrarNotificacion('Paciente registrado exitosamente', 'success');
            formularioPerro.reset();
            cargarPerros();
        }
    } catch (error) {
        console.error('Error al registrar el perro:', error);
        mostrarNotificacion('Error al registrar el paciente', 'error');
    }
}

// Abrir modal para editar
function abrirModalEditar(id) {
    const perro = perros.find(p => p.id === id);
    if (perro) {
        perroEditando = perro;
        document.getElementById('editar-id').value = perro.id;
        document.getElementById('editar-nombre').value = perro.nombre;
        document.getElementById('editar-raza').value = perro.raza;
        document.getElementById('editar-edad').value = perro.edad;
        modalEditar.style.display = 'block';
    }
}

// Cerrar modal
function cerrarModal() {
    modalEditar.style.display = 'none';
    perroEditando = null;
}

// Actualizar perro
async function actualizarPerro(e) {
    e.preventDefault();
    
    const id = document.getElementById('editar-id').value;
    const perroActualizado = {
        nombre: document.getElementById('editar-nombre').value,
        raza: document.getElementById('editar-raza').value,
        edad: parseInt(document.getElementById('editar-edad').value)
    };
    
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(perroActualizado)
        });
        
        if (response.ok) {
            mostrarNotificacion('Paciente actualizado exitosamente', 'success');
            cerrarModal();
            cargarPerros();
        }
    } catch (error) {
        console.error('Error al actualizar el perro:', error);
        mostrarNotificacion('Error al actualizar el paciente', 'error');
    }
}

// Eliminar perro
async function eliminarPerro(id) {
    const confirmar = confirm('¿Estás seguro de eliminar este paciente?');
    
    if (confirmar) {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE'
            });
            
            if (response.ok) {
                mostrarNotificacion('Paciente eliminado exitosamente', 'success');
                cargarPerros();
            }
        } catch (error) {
            console.error('Error al eliminar el perro:', error);
            mostrarNotificacion('Error al eliminar el paciente', 'error');
        }
    }
}

// Filtrar perros por búsqueda
function filtrarPerros() {
    const termino = buscarInput.value.toLowerCase();
    const perrosFiltrados = perros.filter(perro => 
        perro.nombre.toLowerCase().includes(termino) ||
        perro.raza.toLowerCase().includes(termino)
    );
    mostrarPerros(perrosFiltrados);
}

// Actualizar estadísticas
function actualizarEstadisticas() {
    // Total de perros
    document.getElementById('total-perros').textContent = perros.length;
    
    // Edad promedio
    if (perros.length > 0) {
        const sumaEdades = perros.reduce((sum, perro) => sum + perro.edad, 0);
        const promedioEdad = (sumaEdades / perros.length).toFixed(1);
        document.getElementById('promedio-edad').textContent = promedioEdad;
    } else {
        document.getElementById('promedio-edad').textContent = '0';
    }
    
    // Raza más popular
    if (perros.length > 0) {
        const razas = {};
        perros.forEach(perro => {
            razas[perro.raza] = (razas[perro.raza] || 0) + 1;
        });
        
        const razaMasPopular = Object.keys(razas).reduce((a, b) => 
            razas[a] > razas[b] ? a : b
        );
        
        document.getElementById('raza-popular').textContent = razaMasPopular;
    } else {
        document.getElementById('raza-popular').textContent = '-';
    }
}

// Sistema de notificaciones
function mostrarNotificacion(mensaje, tipo = 'success') {
    const notificacion = document.createElement('div');
    notificacion.className = `notificacion notificacion-${tipo}`;
    notificacion.textContent = mensaje;
    
    notificacion.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${tipo === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        border-radius: 5px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notificacion);
    
    setTimeout(() => {
        notificacion.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notificacion.remove(), 300);
    }, 3000);
}

// Añadir estilos para animaciones de notificaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);