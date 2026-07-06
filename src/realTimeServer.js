import { Server } from "socket.io";

export default (httpServer) => {

    const io = new Server(httpServer);

    io.on("connection", socket => {
        socket.on("message", (message) => {
            io.emit("message", {
                user: socket.id,
                message: message
            });
        });
    });

};