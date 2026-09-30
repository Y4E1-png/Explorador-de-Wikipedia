# Explorador de Wikipedia

Aplicación web para buscar artículos de Wikipedia en español, consultar su introducción y guardar lecturas para después. Fue desarrollada como tercer proyecto del curso de Front-End.

**Sitio publicado:** [wikipedia-explorer.web.app](https://wikipedia-explorer.web.app)  

## Funcionalidades

- Buscar artículos de Wikipedia en español.
- Consultar los resultados en tarjetas con título, descripción e imagen cuando está disponible.
- Leer la introducción de un artículo y abrir el contenido completo en Wikipedia.
- Guardar y quitar artículos de «Mis lecturas».
- Conservar las lecturas guardadas al recargar la página mediante `localStorage`.
- Mostrar estados de carga, error y ausencia de resultados.
- Adaptar la interfaz a pantallas de escritorio y móviles.

## Tecnologías

React, Vite, JavaScript, styled-components, React Router, Redux Toolkit, Axios y Jest. Los datos proceden de la API de MediaWiki.

## Páginas

- `/`: inicio y búsqueda.
- `/articulo/:articleKey`: detalle de un artículo.
- `/mis-lecturas`: artículos guardados.

## Cómo ejecutar el proyecto

Se necesitan Node.js y npm. Después de descargar el repositorio, abre una terminal en la carpeta del proyecto y ejecuta:

```bash
npm install
npm run dev
```

La terminal mostrará la dirección local para abrir la aplicación.

## Comandos disponibles

| Comando | Función |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm test` | Ejecuta las pruebas con Jest. |
| `npm run test:watch` | Vuelve a ejecutar las pruebas cuando cambian los archivos. |
| `npm run lint` | Revisa el código con ESLint. |
| `npm run build` | Genera la versión de producción en `dist`. |
| `npm run preview` | Permite revisar localmente la versión generada. |

## Pruebas

El proyecto incluye pruebas para componentes, funciones auxiliares, custom hooks, peticiones a la API y lógica de Redux. Cubren, entre otros casos, la búsqueda, la carga de artículos, los errores, la extracción de la introducción y las acciones para guardar y quitar lecturas.

Para ejecutarlas:

```bash
npm test
```

## Recorrido de los datos

El texto de búsqueda se envía a Wikipedia mediante Axios. Los resultados llegan al estado de React y se muestran en tarjetas. Al abrir una tarjeta, React Router utiliza el identificador del artículo para mostrar su página de detalle.

Las lecturas guardadas se administran con Redux Toolkit. `localStorage` permite recuperarlas después de recargar la página.

## Organización principal

```text
src/
├── components/  Componentes reutilizables
├── hooks/       Búsqueda y carga de artículos
├── pages/       Páginas de la aplicación
├── services/    Peticiones a Wikipedia
├── store/       Estado de las lecturas guardadas
├── styles/      Estilos globales
└── utils/       Funciones auxiliares
```

## Créditos

Los textos y las imágenes consultados mediante la API proceden de Wikipedia y Wikimedia Commons. La autoría y las condiciones de uso de cada contenido pueden consultarse desde su artículo o archivo original. La interfaz del explorador fue creada con fines educativos.
