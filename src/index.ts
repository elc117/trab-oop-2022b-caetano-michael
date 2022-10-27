import Server from './server';

const app = Server.server.listen(3000, () => console.log("Rodando server porta 3000"));