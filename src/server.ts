import { server } from "./app";

const serverInit = async () => {
    await server.start();
    console.log('Server running on %s', server.info.uri);
}

serverInit();





