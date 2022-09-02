import * as Hapi from "@hapi/hapi";
import "dotenv/config";
import "reflect-metadata"
import { AppDataSource } from "./database/data-source"
import { createClientController } from "./modules/client/useCases/CreateClient";
import * as Joi from "joi";

AppDataSource.initialize().then(async () => {
    console.log("Connection succesfuly db");
}).catch(error => console.log(error))


export const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST
});

server.route({
    method: "POST",
    path: "/users",
    handler: async (request, h) => {
        const client = await createClientController.handle(request, h);

        return h.response(client).code(201);
    },
});




