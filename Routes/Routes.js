const express = require('express');
const Mensajes = require('../Models/Mensajes');
const routes = express.Router();

routes.get('/', async (req, res) => {
    const mensajes = await (await Mensajes.findAll()).reverse();
    res.json(mensajes);
});

module.exports = routes;
