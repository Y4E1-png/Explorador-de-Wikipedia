English | [Leer en español](README.es.md)

# Wikipedia Explorer

A web application for searching Spanish Wikipedia articles, reading their introductions, and saving articles for later.

Developed as the third project of the Front-End Development program at EBAC.

**Live demo:** [Wikipedia Explorer](https://wikipedia-explorer.web.app/)

## Features

- Search for articles on Spanish Wikipedia.
- Display results as cards with titles, descriptions, and images when available.
- Read an article's introduction and open the complete article on Wikipedia.
- Add and remove articles from a personal reading list.
- Preserve saved articles after reloading the page through localStorage.
- Display loading states, request errors, and searches without results.
- Adapt the interface to desktop and mobile screens.

## Technologies

- **React and React DOM:** reusable components and interface rendering.
- **JavaScript, HTML, and CSS:** application logic, structure, and styling.
- **Vite:** development server and production builds.
- **styled-components:** component styles and global styles.
- **React Router:** navigation between search results, article details, and saved readings.
- **Redux Toolkit and React Redux:** management of the saved reading list.
- **Axios:** requests to Wikipedia's MediaWiki API.
- **Jest and React Testing Library:** automated tests.
- **ESLint:** code checks.

Article information and images are retrieved through the MediaWiki API.

## Pages

| Route | Purpose |
|---|---|
| `/` | Homepage and article search. |
| `/articulo/:articleKey` | Article detail page. |
| `/mis-lecturas` | Saved reading list. |

## Getting started

### Requirements

- Node.js and npm installed.
- Git installed to clone the repository.
- An internet connection to install dependencies and retrieve Wikipedia content.

### Installation

1. Clone the repository and open its folder:

```bash
git clone https://github.com/Y4E1-png/Explorador-de-Wikipedia.git
cd Explorador-de-Wikipedia
```

2. Install the dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

Open the local address displayed in the terminal.

## Available commands

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server. |
| `npm test` | Runs the tests with Jest. |
| `npm run test:watch` | Runs tests again when files change. |
| `npm run lint` | Checks the code with ESLint. |
| `npm run build` | Generates the production version in `dist`. |
| `npm run preview` | Serves the generated production version locally. |

Run `npm run build` before using `npm run preview`.

## Usage example

The application interface is in Spanish.

1. Enter a topic, such as `Astronomía`, in the search field and press Enter.
2. Browse the article cards and click a card's heart icon to save it.
3. Open **Mis lecturas** from the navigation.
4. Reload the page to check that the saved article remains available.
5. Click **Leer artículo** to open its introduction.
6. Use the bookmark icon on the article detail page to return to saved readings.
7. Remove a saved article using its trash icon.

The article detail page also includes a link to read the complete article on Wikipedia.

## Tests

The project includes tests for components, utility functions, custom hooks, API requests, and Redux logic.

They cover article searches, loading states, errors, introduction extraction, and actions for adding and removing saved readings.

To run the tests:

```bash
npm test
```

## Data flow

The search text is sent to Wikipedia through Axios. The results are stored in React state and displayed as article cards.

When an article is opened, React Router uses its identifier to display the corresponding detail page.

Saved readings are managed with Redux Toolkit. localStorage stores the reading list so it can be restored after reloading the page.

## Main structure

```text
src/
├── components/  Reusable components
├── hooks/       Article searches and loading
├── pages/       Application pages
├── services/    Requests to Wikipedia
├── store/       Saved reading list state
├── styles/      Global styles
└── utils/       Utility functions
```

## Credits

Article texts and images retrieved through the API come from Wikipedia and Wikimedia Commons.

Content attribution and usage terms can be consulted on the original article or media file. The explorer's interface was created for educational purposes.

## Author

Developed by **Yael Aguilar** as part of the Front-End Development program at EBAC.

[GitHub profile](https://github.com/Y4E1-png)



