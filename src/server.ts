import express from "express";

class Server {
  public server: express.Application;

  constructor(){
    this.server = express();
    this.middleware();
    this.router();
  }

  private middleware(){
    this.server.use(express.json());
  }

  private router(){
    // this.server.use(router);
  }
}

export default new Server();