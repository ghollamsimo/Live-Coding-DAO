import express from "express";
import router from "./routes/router.js";
class Server{
    constructor(port = 8080){
        this.port = port;
        this.app = express();
        this.config();
        this.routing();
    }

    config(){

        this.app.use((req,res,next)=> {
            next();
        })


    }

    routing(){
        this.app.use('/', router);
    }

    start(){
        this.app.listen(this.port, () => {
            console.log('serveur démarré...');
        })
    }

}

new Server().start()