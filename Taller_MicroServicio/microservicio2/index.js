// microservicio2/index.js
const express = require('express');

const app = express();
const PORT = 4002;

app.get('/', (req, res) => {
  // Diseño básico con HTML y CSS
  const htmlResponse = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #e0e0e0;
            text-align: center;
            padding: 50px;
          }
          h1 {
            color: #333;
          }
        </style>
        <title>Microservicio 2</title>
      </head>
      <body>
        <h1>Microservicio 2</h1>
      </body>
    </html>
  `;

  res.send(htmlResponse);
});

app.listen(PORT, () => {
  console.log(`Microservicio 2 escuchando en el puerto ${PORT}`);
});
