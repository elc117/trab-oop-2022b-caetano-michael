import express from "express";
import routes from './routes'

class Server {
  public server: express.Application;

  constructor() {
    this.server = express();
    this.server.use(express.json())
    this.server.use(routes)
    this.middleware();
    this.router();
  }

  private middleware() {
    this.server.use(express.json());
  }

  private router() {
    // this.server.use(router);
  }
}

export default new Server();