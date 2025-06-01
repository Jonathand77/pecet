# 🌟 PECET - Agente inteligente para los activos de conocimiento

Bienvenido al repositorio del **Asistente de Conocimiento PECET**. Este proyecto tiene como finalidad mejorar la gestión y consulta de los activos de conocimiento del PECET a través de un agente inteligente. La producción científica requiere de una gestión eficiente para facilitar la investigación y toma de decisiones. Esta solución integra un backend robusto en **FastAPI** y un frontend moderno en **React**, permitiendo subir, consultar y buscar documentos usando tecnologías como Azure Blob Storage y ElasticSearch, permitiendo la búsqueda inteligente, gestión y visualización de activos de conocimiento del PECET. 🚀

---

## 📦 Estructura del Proyecto

```
pecet/
│
├── backend/           # Backend FastAPI, extracción de texto, embeddings, Azure, ElasticSearch
│   ├── api/           # Endpoints principales (FastAPI)
│   ├── azure_blob/    # Servicios y utilidades para Azure Blob Storage
│   ├── elastic/       # Configuración de ElasticSearch
│   ├── models/        # Modelos Pydantic
│   ├── scripts/       # Scripts de procesamiento (extract, embedding, index)
│   ├── services/      # Servicios de búsqueda, integración
│   ├── tests/         # Pruebas unitarias y de integración
│   ├── requirements.txt
│   └── .env.example   # Ejemplo de variables de entorno
│
├── pecet-frontend/    # Frontend React
│   ├── public/        # Archivos estáticos (favicon, logos, manifest)
│   ├── src/           # Código fuente React
│   │   ├── components/  # Componentes reutilizables (Navbar, Footer, etc.)
│   │   ├── pages/       # Vistas principales (Home, Buscar, Dashboard, AboutUs)
│   │   ├── styles/      # CSS Modules
│   │   └── App.js
│   ├── package.json
│   └── README.md
│
├── .devcontainer/     # Configuración para entorno de desarrollo en contenedor (Docker, VSCode)
├── LICENSE
└── README.md          # Este archivo
```

---

## 🛠️ Tecnologías Principales

- **Backend:** FastAPI, Python, Azure Blob Storage, ElasticSearch, OpenAI API
- **Frontend:** React, React Router DOM, CSS Modules, Framer Motion, React Icons
- **DevOps:** Docker, Docker Compose, VSCode Dev Containers

---

## 🚀 ¿Qué puedes hacer con este proyecto?

- 📄 **Subir y consultar documentos** (PDF, imágenes, texto) vía enlaces o API.
- 🔍 **Búsqueda semántica** sobre los activos de conocimiento usando embeddings.
- ☁️ **Almacenamiento seguro** en Azure Blob Storage.
- 📊 **Dashboard** con estadísticas de los archivos.
- 🖥️ **Interfaz moderna y responsiva** para usuarios finales.

---

## ⚙️ Instalación Rápida

### 1. Clona el repositorio

```bash
git clone https://github.com/Jonathand77/pecet.git
cd pecet
```

### 2. Configura el entorno de desarrollo

- Requiere Docker y VSCode (opcional pero recomendado).
- Usa el contenedor de desarrollo incluido:

```bash
# Abre la carpeta en VSCode y selecciona "Reopen in Container"
```

### 3. Variables de entorno

Copia y edita los archivos `.env.example` en `backend/` según tus credenciales de Azure, OpenAI y ElasticSearch.

```bash
cp backend/.env.example backend/.env
```

### 4. Instala dependencias

#### Backend

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

#### Frontend

```bash
cd ../pecet-frontend
npm install
```

### 5. Ejecuta los servicios

#### Backend (FastAPI)

```bash
cd backend
uvicorn api.main:app --reload
```

#### Frontend (React)

```bash
cd pecet-frontend
npm start
```

---

## 🌐 Navegación Principal

- `/` - Home: Bienvenida y descripción
- `/buscar` - Buscador semántico de activos
- `/dashboard` - Estadísticas y últimos archivos
- `/about` - Información del proyecto y equipo

---

## 🧪 Pruebas

- **Backend:** Ubica tus pruebas en `backend/tests/` y ejecútalas con `pytest`.
- **Frontend:** Usa `npm test` en `pecet-frontend/` para pruebas de componentes React.

---

## 📝 Buenas Prácticas

- Código modular y documentado 🧩
- Uso de variables de entorno para credenciales 🔒
- Separación clara entre frontend y backend
- Estilos con CSS Modules para evitar conflictos 🎨
- Uso de Docker y Dev Containers para entornos reproducibles 🐳
- Versionado en Git y `.gitignore` bien configurado

---

## 👥 Créditos

- Jonathan David Fernandez Vargas ([GitHub](https://github.com/Jonathand77))
- Valeria Alvarez Fernandez ([GitHub](https://github.com/Vaf88))

---

## 📄 Licencia

BSD 2-Clause License. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

## 💡 ¿Dudas o sugerencias?

¡Abre un issue o contáctanos! 😊

---

¡Gracias por ser parte de la comunidad PECET! 🧬🌍