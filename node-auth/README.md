# Proyecto Node con Autenticación

instalar imagenes de Docker:

`docker pull mongo`

`docker pull postgres`

instalar TypeScript y demás dependencias:

`npm i -D typescript @types/node ts-node-dev rimraf`

Inicializar el archivo de configuración de TypeScript:

`npx tsc --init --outDir dist/ --rootDir src`

Crear scripts para dev, build y start:

```json
"dev": "tsnd --respawn --clear src/app.ts",
"build": "rimraf ./dist && tsc -p .",
"start": "npm run build && node ./dist/app.js" 
```

instalar los archivos de definición de TS para Express:

`npm i --save-dev @types/express`

para leer los archivos de entorno:

`npm i dotenv env-var`