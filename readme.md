# Project Setup and Running with Docker

This document provides instructions for setting up and running the project, which consists of a frontend and a backend server, using Docker containers locally.

## Project Structure

The project is organized into two main directories:

- `/frontend`: Contains the React frontend application + typescript + react-query.
- `/server`: Contains the Node.js Express backend application.

> add env varibale in server/.env

```
PORT=5000
BASEURL=http://localhost:8080
ORIGIN=http://localhost:5173
```

> add env variable in frontend/.env

```
VITE_API_URL=http://localhost:5000/api/v1
```
