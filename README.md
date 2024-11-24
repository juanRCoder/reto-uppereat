## Getting Started

First, run the development server:

```bash
npm run dev
```
# Pasos para probarlo:
- Clonar el proyecto.
- Tener docker desktop instalado para la base de datos.
- archivo .env para probarlo en local:
```bash
USER=johndoe
PASSWORD=randompassword
DATABASE_URL="postgresql://${USER}:${PASSWORD}@localhost:5464/uppereat?schema=public"
```
- Ejecucion del contenedor con la base de datos
```bash
docker compose up -d
```