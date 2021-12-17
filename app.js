const app = require("express")();
const { createServer } = require("http");
const { Server } = require("socket.io");
const Mensajes = require("./Models/Mensajes");
const cors = require('cors');


const routes = require('./Routes/Routes');
const httpServer = createServer(app);


app.use(cors());
app.use(routes);

//SEQUELIZE
const { sequelize } = require('./Database/connection');
sequelize.sync().then(() => { console.log('Connection sucessfully') });


const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
});

io.on("connect", async (socket) => {
    console.log('nueva Coneccion');

    socket.on('msg', async (msg) => {
        const mensaje = await Mensajes.create(msg).catch(err => console.log(err));
        io.emit('Mensage', mensaje);
        socket.disconnect();
    });

});




httpServer.listen(process.env.PORT || 3005);

