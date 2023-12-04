# Garagio website

This is the source code for the Garagio website. It is built using [React](https://react.dev/)
generator.

## Development

After cloning the repository, run `npm install` to install all dependencies.

To start the development server, run `npm run dev`. This will start a local server and it is exposed to your LAN. You
can access it by opening the URL shown in the terminal in your browser.

## Deployment

Update repository with `git pull`

Build the website with `npm run build`

If there is a running container, stop it with `docker stop garagio`

Rebuild the container with `docker build -t tmdbts/garagio .`

Start container with `docker compose up -d`