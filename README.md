# Cinemate - Movie Watchlist App

Cinemate is a web application that allows users to explore and add movies to their watchlist. The app is designed to provide a seamless experience for movie enthusiasts to discover, track, and manage their favorite movies.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [API](#api)
- [JavaScript Features](#javascript-features)
  - [Event Handling](#event-handling)
  - [Local Storage](#local-storage)
  - [Dynamic Content Update](#dynamic-content-update)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Movie Search:** Users can search for movies using the search bar.
- **Watchlist Management:** Add and remove movies from the watchlist.
- **Featured Movies:** Explore a curated list of featured movies.
- **Responsive Design:** The app is designed to work seamlessly on various devices.

## Project Structure

├── index.html
├── watchlist.html
├── script.js
├── style.css
├── featuredMovies.js
└── README.md


- **index.html:** Main page for searching and viewing movie details.
- **watchlist.html:** Page to view the user's watchlist.
- **script.js:** JavaScript file handling the dynamic behavior of the application.
- **style.css:** Stylesheet for the application.
- **featuredMovies.js:** List of featured movies.
- **README.md:** Project documentation.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/cinemate.git
## Usage

- Visit the main page (`index.html`) to find and add movies to your watchlist.
- View your watchlist on the watchlist page (`watchlist.html`).
- Explore featured movies listed in the application.

## Dependencies

- **Font Awesome:** Utilized for icons.
- **OMDb API:** Used for fetching movie details.

## API

- **OMDb API:** The app relies on the OMDb API to retrieve movie details. You can obtain an API key [here](https://www.omdbapi.com/apikey.aspx).

## JavaScript Features

### Event Handling

- **Click Event Listener:** Handles button clicks for adding and removing movies from the watchlist.

### Local Storage

- **LocalStorage API:** Stores and retrieves watchlist data locally to maintain user preferences.

### Dynamic Content Update

- **Fetch API:** Fetches movie details from the OMDb API and dynamically updates the content on the page.

- **DOM Manipulation:**
  - **Adding Movies to Watchlist:** Updates the watchlist HTML by dynamically creating and appending new elements for each movie.
  - **Removing Movies from Watchlist:** Removes the corresponding movie element from the watchlist HTML.
  - **Button State Change:** Disables the "Add to Watchlist" button and changes its appearance after adding a movie.

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/new-feature`.
3. Make changes and commit: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature/new-feature`.
5. Submit a pull request.
