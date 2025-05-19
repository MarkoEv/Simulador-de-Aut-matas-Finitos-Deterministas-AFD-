// Objeto para guardar los datos del AFD
const afd = {
  estados: [],
  alfabeto: [],
  estadoInicial: '',
  estadosFinales: [],
  transiciones: {}
};

// Función principal que se ejecuta cuando la página carga
function iniciar() {
  // Configurar eventos de los botones
  document.getElementById('generarTransicionesBtn').addEventListener('click', generarTransiciones);
  document.getElementById('probarAFDBtn').addEventListener('click', probarCadena);
}

// Genera los campos para las transiciones
function generarTransiciones() {
  // Obtener valores de los inputs
  afd.estados = document.getElementById('estados').value.split(',').map(e => e.trim());
  afd.alfabeto = document.getElementById('alfabeto').value.split(',').map(a => a.trim());
  
  // Validar que hay datos
  if (afd.estados.length === 0 || afd.alfabeto.length === 0) {
    alert('Por favor ingresa estados y alfabeto primero');
    return;
  }
  
  // Generar select de estado inicial
  const selectInicial = document.getElementById('estadoInicial');
  selectInicial.innerHTML = '';
  afd.estados.forEach(estado => {
    const option = document.createElement('option');
    option.value = estado;
    option.textContent = estado;
    selectInicial.appendChild(option);
  });
  
  // Generar campos de transición
  const container = document.getElementById('transicionesContainer');
  container.innerHTML = '';
  
  afd.estados.forEach(estado => {
    const div = document.createElement('div');
    div.className = 'mb-3 p-2 border';
    div.innerHTML = `<h5 class="fw-bold">Desde ${estado}:</h5>`;
    
    afd.alfabeto.forEach(simbolo => {
      div.innerHTML += `
        <div class="input-group mb-2">
          <span class="input-group-text">${simbolo} →</span>
          <select id="trans-${estado}-${simbolo}" class="form-select">
            ${afd.estados.map(e => `<option value="${e}">${e}</option>`).join('')}
          </select>
        </div>
      `;
    });
    
    container.appendChild(div);
  });
}

// Prueba una cadena con el AFD configurado
function probarCadena() {
  // Obtener configuración del AFD
  afd.estadoInicial = document.getElementById('estadoInicial').value;
  afd.estadosFinales = document.getElementById('estadosFinales').value.split(',').map(e => e.trim());
  const cadena = document.getElementById('cadenaPrueba').value;
  
  // Validar datos
  if (!afd.estadoInicial || afd.estadosFinales.length === 0) {
    alert('Configura el AFD completamente primero');
    return;
  }
  
  // Obtener transiciones
  afd.transiciones = {};
  afd.estados.forEach(estado => {
    afd.transiciones[estado] = {};
    afd.alfabeto.forEach(simbolo => {
      const select = document.getElementById(`trans-${estado}-${simbolo}`);
      if (select) {
        afd.transiciones[estado][simbolo] = select.value;
      }
    });
  });
  
  // Procesar la cadena
  let estadoActual = afd.estadoInicial;
  const camino = [estadoActual];
  
  for (const simbolo of cadena) {
    // Verificar si el símbolo es válido
    if (!afd.alfabeto.includes(simbolo)) {
      mostrarResultado(false, `El símbolo '${simbolo}' no es válido`, camino);
      return;
    }
    
    // Obtener siguiente estado
    const siguienteEstado = afd.transiciones[estadoActual][simbolo];
    
    // Verificar si la transición existe
    if (!siguienteEstado) {
      mostrarResultado(false, `No hay transición para '${simbolo}' desde '${estadoActual}'`, camino);
      return;
    }
    
    estadoActual = siguienteEstado;
    camino.push(estadoActual);
  }
  
  // Verificar si terminó en estado final
  const aceptada = afd.estadosFinales.includes(estadoActual);
  mostrarResultado(aceptada, 
    `La cadena "${cadena}" fue ${aceptada ? 'ACEPTADA' : 'RECHAZADA'}`,
    camino
  );
}

// Muestra el resultado en pantalla
function mostrarResultado(aceptada, mensaje, camino) {
  const resultadoDiv = document.getElementById('resultado');
  const resultadoTexto = document.getElementById('resultadoTexto');
  const caminoTexto = document.getElementById('caminoTexto');
  
  // Configurar apariencia según resultado
  resultadoDiv.className = aceptada ? 'alert alert-success' : 'alert alert-danger';
  resultadoDiv.classList.remove('d-none');
  
  // Mostrar mensajes
  resultadoTexto.textContent = mensaje;
  caminoTexto.textContent = `Camino: ${camino.join(' → ')}`;
}

// Iniciar la aplicación cuando la página cargue
document.addEventListener('DOMContentLoaded', iniciar);