# **📋 Simulador de Autómatas Finitos Deterministas (AFD)**
![image](https://github.com/user-attachments/assets/32d65b51-e0e2-4755-a8fa-f5c6eb5e8cf0)

## **🔍 Descripción**  
Herramienta web interactiva para diseñar, configurar y probar Autómatas Finitos Deterministas (AFD). Permite definir estados, alfabetos, transiciones y evaluar cadenas para verificar su aceptación.
---

## **✨ Características**  
✅ **Configuración visual del AFD**:  
   - Define estados, símbolos del alfabeto, estado inicial y finales.  
   - Genera tablas de transiciones dinámicamente.  

✅ **Simulación paso a paso**:  
   - Prueba cadenas y observa el camino recorrido.  
   - Resultados claros (aceptación/rechazo + ruta de estados).  

✅ **Interfaz intuitiva**:  
   - Diseño responsive (funciona en móviles y desktop).  
   - Feedback visual con Bootstrap.  

✅ **Sin dependencias externas**:  
   - Solo requiere un navegador moderno.  
---

## **🚀 Cómo Usar**  
### **1. Configura el AFD**  
   - Ingresa los **estados** separados por comas (ej: `q0,q1,q2`).  
   - Ingresa los **símbolos del alfabeto** (ej: `0,1`).  
   - Haz clic en **"Generar Campos de Transición"**.  
   - Selecciona el **estado inicial** y los **estados finales**.  
   - Completa las **transiciones** en la tabla generada.  

### **2. Prueba una Cadena**  
   - Escribe una cadena (ej: `0101`).  
   - Haz clic en **"Probar Cadena"**.  
   - Verás si es aceptada y el camino recorrido.  

---

## **🛠️ Tecnologías**  
- **Frontend**:  
  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)  
  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)  
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)  
  ![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white)  

- **Herramientas**:  
  ![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white)  
  ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)  

---

## **📂 Estructura del Proyecto**  
```
simulador-afd/
├── index.html          # Página principal
├── styles.css          # Estilos personalizados
├── main.js             # Lógica del simulador AFD
└── README.md           # Este archivo
```

---

## **🔧 Instalación**  
1. Clona el repositorio:  
   ```bash
   git clone https://github.com/tu-usuario/simulador-afd.git
   ```
2. Abre `index.html` en tu navegador.  
   *(No requiere servidor ni instalación de paquetes)*  

---

## **🎯 Ejemplo de AFD Preconfigurado**  
### **AFD que acepta cadenas con número par de "1"s**  
- **Estados**: `q0, q1`  
- **Alfabeto**: `0, 1`  
- **Estado inicial**: `q0`  
- **Estados finales**: `q0`  
- **Transiciones**:  
  - Desde `q0`: `0 → q0`, `1 → q1`  
  - Desde `q1`: `0 → q1`, `1 → q0`  

**Prueba**:  
- Acepta: `""` (vacía), `00`, `11`, `0101`  
- Rechaza: `1`, `01`, `0001`  

---

## **📄 Licencia**  
Sin licencia  

--- 

## **🙌 Contribuciones**  
¡Las contribuciones son bienvenidas! Si deseas mejorar el código o reportar un problema, abre un **Issue** o envía un **Pull Request**.  

---

## **📌 Notas**  
- Ideal para estudiantes de ING.EN SISTEMAS COMPUTACIONALES.    

