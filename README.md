# reto uppereat
- sistema de reservacion como parte de un reto tecnico en tan solo 2 dias de trabajo. CRUD con Nextjs + TailwindCSS.

First, run the development server:

```bash
npm run dev
```
## Pasos para probarlo:
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

## Caputas de pantall del aplicativo:
- Dashboard general:
<img src="public/dashboard.png"/>

- Modal de edicion de estados:
<img src="public/modal.png"/>

- Pagina de registro de reserva:
<img src="public/registro.png"/>