const express = require('express')

const app = express()

const port = 3001

app.get('/',(req, res) => {
    res.send({
        data: 'Hola Wilmer'
    })
} )

app.listen(port, () =>{
    console.log('La aplicacion esta en linea sin novedad!');
})