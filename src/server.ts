import * as hapiAuthJwt2 from "hapi-auth-jwt2";
import { server } from "./app";

const serverInit = async () => {
    await server.register(hapiAuthJwt2);

    server.auth.strategy('jwt', 'jwt', {
        key: process.env.SECRET_KEY,
        validate: function () {
            return { isValid: true };
        },
        verifyOptions: {
            ignoreExpiration: true,    // do not reject expired tokens
            algorithms: ['HS256']    // specify your secure algorithm
        }
    });

    server.auth.default('jwt')

    await server.start();

    console.log('Server running on %s', server.info.uri);
}

serverInit();





