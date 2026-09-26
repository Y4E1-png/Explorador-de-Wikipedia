# Explorador de Wikipedia

Explorador de Wikipedia es una aplicación web desarrollada como parte de un curso de Front-End. Permite buscar artículos de Wikipedia en español, consultar su información principal y guardar artículos para leerlos después.

El objetivo del proyecto es practicar el desarrollo de una aplicación con React, el consumo de una API y el manejo de información compartida entre diferentes páginas.

## Funcionalidades

- Mostrar un artículo destacado en la página de inicio.
- Buscar artículos de Wikipedia en español.
- Mostrar los resultados mediante tarjetas con imagen, título y descripción.
- Consultar el detalle de un artículo.
- Acceder al artículo completo en Wikipedia.
- Guardar artículos en una lista de lecturas.
- Eliminar artículos guardados.
- Conservar la lista de lecturas mediante `localStorage`.
- Adaptar el contenido a pantallas de escritorio y dispositivos móviles.
- Mostrar un indicador mientras se carga la información.

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- Styled Components
- Axios
- React Router
- Redux Toolkit
- React Redux
- API de MediaWiki

## Rutas de la aplicación

La aplicación cuenta con tres rutas principales:

- `/`: página de inicio y buscador.
- `/articulo/:articleKey`: detalle del artículo seleccionado.
- `/mis-lecturas`: lista de artículos guardados.

`articleKey` representa el identificador del artículo que se obtiene al realizar una búsqueda.

## Recorrido de los datos

Cuando una persona realiza una búsqueda, el texto escrito se utiliza para hacer una petición a la API de Wikipedia mediante Axios.

```text
Texto de búsqueda
→ petición a la API de Wikipedia
→ respuesta con los artículos
→ estado de React
→ tarjetas de resultados
```

Al seleccionar un artículo, React Router utiliza su identificador para abrir la página de detalle y solicitar su información.

Los artículos guardados siguen un recorrido diferente:

```text
Artículo seleccionado
→ acción de Redux
→ estado de la lista de lecturas
→ localStorage
→ página Mis lecturas
```

Redux Toolkit administra la lista dentro de la aplicación y `localStorage` permite conservarla aunque se cierre o recargue el navegador.

## Instalación

Para ejecutar el proyecto es necesario tener instalados Node.js y npm.

Después de descargar el proyecto, abre una terminal dentro de su carpeta y ejecuta:

```bash
npm install
```

Después inicia el servidor de desarrollo:

```bash
npm run dev
```

La terminal mostrará la dirección local desde la que se puede abrir la aplicación en el navegador.

## Comandos disponibles

```bash
npm run dev
```

Inicia el proyecto en modo de desarrollo.

```bash
npm run build
```

Genera una versión del proyecto preparada para producción.

```bash
npm run lint
```

Revisa el código con ESLint.

```bash
npm run preview
```

Permite revisar localmente la versión generada con `npm run build`.

## Organización principal

```text
src/
├── components/   Componentes reutilizables
├── hooks/        Custom hooks para búsquedas y artículos
├── pages/        Páginas principales de la aplicación
├── services/     Peticiones a la API de Wikipedia
├── store/        Estado global de Redux
├── styles/       Estilos globales
└── utils/        Funciones auxiliares compartidas
```

Esta organización separa la interfaz, las peticiones, el estado global y las funciones auxiliares para que el código sea más fácil de localizar y comprender.

## Aprendizajes del proyecto

Durante el desarrollo de esta práctica se trabajó con:

- Componentes y props de React.
- Estado local y custom hooks.
- Peticiones asíncronas con Axios.
- Rutas dinámicas con React Router.
- Estado global con Redux Toolkit.
- Persistencia de datos con `localStorage`.
- Componentes estilizados y diseño responsivo.
- Separación de responsabilidades entre archivos.

## Estado del proyecto

El proyecto cumple con las funciones principales de búsqueda, consulta y almacenamiento de lecturas. Continúa en desarrollo como parte del curso.

La configuración de pruebas automatizadas y la publicación del proyecto se realizarán en etapas posteriores.

## Créditos

Los textos y las imágenes mostrados por la aplicación proceden de Wikipedia en español y Wikimedia Commons mediante la API de MediaWiki.

Los contenidos pertenecen a sus respectivos autores y están sujetos a las licencias indicadas por Wikipedia y Wikimedia Commons.

La interfaz y la implementación del explorador fueron creadas con fines educativos.