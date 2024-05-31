
# Vite Vue Project

This is a simple todo list web application built with Vue 3, Vuex, and Bootstrap 5.0. The application demonstrates the use of components and state management, and includes features such as adding new entries, marking entries as completed, and deleting entries. The project also implements a REST API with Node.js and Express, complies with web accessibility, and persists state.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)
- [Git](https://git-scm.com/)

### Installation


1. **Install the dependencies:**

   ```bash
   npm install
   ```

2. **Set up the environment variables:**

   - Create a `.env` file by copying `.env.example`:

     ```bash
     cp .env.example .env
     ```

   - Open the `.env` file and update the variables as needed.

### Running the Project

To run the project locally, use the following commands:

1. **Start the development server:**

   ```bash
   npm run dev
   ```

   This will start the Vite development server and you can access the application at `http://localhost:5173`.

2. **Build for production:**

   ```bash
   npm run build
   ```

   This will build the project and output the files to the `dist` directory.

3. **Preview the production build:**

   ```bash
   npm run serve
   ```

   This will serve the contents of the `dist` directory to help you test the production build locally.
