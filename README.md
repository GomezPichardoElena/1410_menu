# Poyecto Menu Nodejs 
Vamos a crear un nuevo proyecto introduciendo Nodejs, para ello hemos creado
un nuevo proyecto y dentro abrimos un terminal y usamos los siguientes comandos:

**npm init --yes** esto genera el archivo package.json.

**npm install typescript -D** la opción -D lo instala como una dependencia del node_modules.

**npx tsc --ini** genera el archivo tsconfig.json en el que realizaremos los siguientes cambios:
línea 7 "target": "es5", lo cambiamos por "target": "es6". Línea 17 descomentamos la línea y añadimos "outDir": "./dist".
al final Línea 68 añadimos }, "exclude": [ "node_modules" ].

**npm install monngoose** para instalar el mongoose .

Para que typescript reconozca los tipos de mongoose:

**npm isntall @types/mongoose**

**npx tsc -w** para compilar los archivos .ts
una vez compilado los archivos .ts, se generará la carpeta dist y para ejecutar lo que hemos 
compilado usamos **node dist/src/index**

El proyectó tendra la carpeta **vistas** donde estará el menú y la entrada por teclado de la respuesta del 
usuario y la carpeta **src** con el archivo **index** donde estará el programa.


Por último los comandos ya conocidos para subir el proyecto al repositorio Github.

**git init** 

**git commit -m** 

**git brach -M master** 

**git remorte add origin** 

**git push -u origin master**