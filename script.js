const vehicles = {
    toyota: {
        corolla: {
            versiones: ['Base', 'Full', 'Sport'],
            datos: {
                nuevo: { estado: 'Nuevo', kilometraje: '0 km' },
                usado: { estado: 'Usado', kilometraje: '30,000 km' },
                seminuevo: { estado: 'Seminuevo', kilometraje: '15,000 km' }
            }
        },
        hilux: {
            versiones: ['Base', 'Full', 'Off-Road'],
            datos: {
                nuevo: { estado: 'Nuevo', kilometraje: '0 km' },
                usado: { estado: 'Usado', kilometraje: '40,000 km' },
                seminuevo: { estado: 'Seminuevo', kilometraje: '20,000 km' }
            }
        }
    },
    ford: {
        fiesta: {
            versiones: ['Base', 'Titanium', 'ST'],
            datos: {
                nuevo: { estado: 'Nuevo', kilometraje: '0 km' },
                usado: { estado: 'Usado', kilometraje: '25,000 km' },
                seminuevo: { estado: 'Seminuevo', kilometraje: '10,000 km' }
            }
        },
        ranger: {
            versiones: ['Base', 'XLT', 'Wildtrak'],
            datos: {
                nuevo: { estado: 'Nuevo', kilometraje: '0 km' },
                usado: { estado: 'Usado', kilometraje: '50,000 km' },
                seminuevo: { estado: 'Seminuevo', kilometraje: '30,000 km' }
            }
        }
    },
    honda: {
        civic: {
            versiones: ['LX', 'EX', 'Sport'],
            datos: {
                nuevo: { estado: 'Nuevo', kilometraje: '0 km' },
                usado: { estado: 'Usado', kilometraje: '20,000 km' },
                seminuevo: { estado: 'Seminuevo', kilometraje: '5,000 km' }
            }
        },
        crv: {
            versiones: ['LX', 'EX', 'Touring'],
            datos: {
                nuevo: { estado: 'Nuevo', kilometraje: '0 km' },
                usado: { estado: 'Usado', kilometraje: '35,000 km' },
                seminuevo: { estado: 'Seminuevo', kilometraje: '12,000 km' }
            }
        }
    }
};

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none'; // Ocultar todas las secciones
    });
    document.getElementById(sectionId).style.display = 'block'; // Mostrar la sección seleccionada
}

function updateModels() {
    const marca = document.getElementById('marca').value;
    const modeloSelect = document.getElementById('modelo');
    modeloSelect.innerHTML = '<option value="">Seleccione un modelo </option>';
    if (marca) {
        const modelos = Object.keys(vehicles[marca]);
        modelos.forEach(modelo => {
            modeloSelect.innerHTML += `<option value="${modelo}">${modelo.charAt(0).toUpperCase() + modelo.slice(1)}</option>`;
        });
    }
    updateVersions();
}

function updateVersions() {
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const versionSelect = document.getElementById('version');
    versionSelect.innerHTML = '<option value="">Seleccione una versión</option>';
    if (marca && modelo) {
        const versiones = vehicles[marca][modelo].versiones;
        versiones.forEach(version => {
            versionSelect.innerHTML += `<option value="${version}">${version}</option>`;
        });
    }
}

function compareVehicles() {
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const version = document.getElementById('version').value;
    const comparisonResult = document.getElementById('comparisonResult');

    if (marca && modelo && version) {
        const vehicleData = vehicles[marca][modelo].datos;
        comparisonResult.innerHTML = `<h3>Comparación de ${modelo.charAt(0).toUpperCase() + modelo.slice(1)} ${version}</h3>`;
        for (const [key, value] of Object.entries(vehicleData)) {
            comparisonResult.innerHTML += `<p>${value.estado} - Kilometraje: ${value.kilometraje}</p>`;
        }
    } else {
        comparisonResult.innerHTML = '<p>Por favor, selecciona todos los campos para comparar.</p>';
    }   
}

// Inicializar mostrando la sección de inicio al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    showSection('inicio');
});



// modelos

function filtrarVehiculos() {
    const filtroMarca = document.getElementById('filtroMarca').value;
    const vehiculos = document.querySelectorAll('#catalogoVehiculos .col-md-3');

    vehiculos.forEach(vehiculo => {
        const marca = vehiculo.getAttribute('data-marca');
        if (filtroMarca === "" || marca === filtroMarca) {
            vehiculo.style.display = 'block'; // Muestra el vehículo
        } else {
            vehiculo.style.display = 'none'; // Oculta el vehículo
        }
    });
}


//contactanos  
function enviarFormulario(event) {
    event.preventDefault(); // Evitar el envío normal del formulario

    // Aquí podrías manejar el envío de datos a un servidor si fuera necesario

    // Ocultar el formulario
    document.getElementById('contactForm').style.display = 'none';
    // Mostrar el mensaje de éxito
    document.getElementById('mensajeExito').style.display = 'block';
}
