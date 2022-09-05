import * as hapiAuthJwt2 from "hapi-auth-jwt2";
import * as HapiSwagger from "hapi-swagger";
import * as Inert from "@hapi/inert";
import * as Vision from "@hapi/vision";

import { server } from "./app";

const swaggerOptions: HapiSwagger.RegisterOptions = {
    info: {
        title: 'Test API Documentation',
    },
};

const plugins = [
    {
        plugin: Inert
    },
    {
        plugin: Vision
    },
    {
        plugin: HapiSwagger,
        options: swaggerOptions
    }
];

const serverInit = async () => {
    await server.register(hapiAuthJwt2);
    await server.register(plugins);

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





