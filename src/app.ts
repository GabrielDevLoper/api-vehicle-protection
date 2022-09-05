import * as Hapi from "@hapi/hapi";
import "dotenv/config";
import "reflect-metadata";
import * as Joi from "joi";
import { AppDataSource } from "./database/data-source"
import { createClientController } from "./modules/client/useCases/CreateClient";
import { updateClientController } from "./modules/client/useCases/UpdateClient";
import { listClientController } from "./modules/client/useCases/ListClient";
import { createVehicleController } from "./modules/vehicle/useCases/CreateVehicle";
import { createAccidentEventController } from "./modules/accidentEvent/useCases/CreateAccidentEvent";
import { listAccidentEventController } from "./modules/accidentEvent/useCases/ListAccidentEvent";

AppDataSource.initialize().then(async () => {
    console.log("Connection succesfuly db");
}).catch(error => console.log(error));

export const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
        cors: {
            origin: ['*']
        }
    }
});

server.route({
    method: "POST",
    path: "/clients",
    handler: async (request, h) => {
        const client = await createClientController.handle(request, h);

        return h.response(client).code(201);
    },
    options: {
        validate: {
            payload: Joi.object({
                name: Joi.string().required(),
                cpf: Joi.string().required(),
                email: Joi.string().email().required().messages({
                    'any.required': `"a" is a required field`
                }),
            })
        }
    }
});


server.route({
    method: "PUT",
    path: "/clients/{id}",
    handler: async (request, h) => {
        const client = await updateClientController.handle(request, h);

        return h.response(client);
    },
});

server.route({
    method: "GET",
    path: "/clients",
    handler: async (request, h) => {
        const client = await listClientController.handle(request, h);

        return h.response(client);
    },
});


server.route({
    method: "POST",
    path: "/vehicles",
    handler: async (request, h) => {
        const vehicle = await createVehicleController.handle(request, h);

        return h.response(vehicle).code(201);
    },
});

server.route({
    method: "POST",
    path: "/accident-event",
    handler: async (request, h) => {
        const accidentEvent = await createAccidentEventController.handle(request, h);

        return h.response(accidentEvent).code(201);
    },
});

server.route({
    method: "GET",
    path: "/accident-event",
    handler: async (request, h) => {
        const accidentsEvent = await listAccidentEventController.handle(request, h);

        return h.response(accidentsEvent);
    },
});




