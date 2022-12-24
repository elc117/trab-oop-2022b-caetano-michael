import express from "express";
import routes from "./routes";

class Server {
  public server: express.Application;

  constructor() {
    this.server = express();
    this.middleware();
    this.server.use(routes);
  }

  private middleware() {
    this.server.use(express.json());
    this.server.use((req, res, next) => {
      res.append("Access-Control-Allow-Origin", ["*"]);
      res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
      res.append("Access-Control-Allow-Headers", "Content-Type");
      next();
    });
  }
}

export default new Server();
