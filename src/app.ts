import * as Hapi from "@hapi/hapi";
import "dotenv/config";
import "reflect-metadata";
import "./database/index";
import * as Joi from "joi";
import { createClientController } from "./modules/client/useCases/CreateClient";
import { updateClientController } from "./modules/client/useCases/UpdateClient";
import { listClientController } from "./modules/client/useCases/ListClient";
import { createVehicleController } from "./modules/vehicle/useCases/CreateVehicle";
import { createAccidentEventController } from "./modules/accidentEvent/useCases/CreateAccidentEvent";
import { listAccidentEventController } from "./modules/accidentEvent/useCases/ListAccidentEvent";
import { authenticationController } from "./modules/authentication/useCases/auth";
import { listVehicleController } from "./modules/vehicle/useCases/ListVehicles";

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
    path: "/authenticate",
    handler: async (request, h) => {
        const client = await authenticationController.handle(request, h);

        return h.response(client);
    },
    options: {
        validate: {
            payload: Joi.object({
                cpf: Joi.string().required(),
                password: Joi.string().required()
            })
        },
        auth: false,
        tags: ['api']
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
                password: Joi.string().required()
            })
        },
        auth: false,
        tags: ['api']
    }
});

server.route({
    method: "PUT",
    path: "/clients/{id}",
    handler: async (request, h) => {
        const client = await updateClientController.handle(request, h);

        return h.response(client);
    },
    options: {
        tags: ['api']
    }
});

server.route({
    method: "GET",
    path: "/clients",
    handler: async (request, h) => {
        const client = await listClientController.handle(request, h);

        return h.response(client);
    },
    options: {
        tags: ['api']
    }
});

server.route({
    method: "POST",
    path: "/vehicles",
    handler: async (request, h) => {
        const vehicle = await createVehicleController.handle(request, h);

        return h.response(vehicle).code(201);
    },
    options: {
        tags: ['api'],
        validate: {
            payload: Joi.object({
                vehicle: Joi.string().required(),
                license_plate: Joi.string().required(),
                year: Joi.number().required().messages({
                    'any.required': `"a" is a required field`
                }),
            })
        },
    }
});

server.route({
    method: "GET",
    path: "/vehicles",
    handler: async (request, h) => {
        const vehicle = await listVehicleController.handle();

        return h.response(vehicle);
    },
    options: {
        tags: ['api'],
    }
});

server.route({
    method: "POST",
    path: "/accident-event",
    handler: async (request, h) => {
        const accidentEvent = await createAccidentEventController.handle(request, h);

        return h.response(accidentEvent).code(201);
    },
    options: {
        tags: ['api'],
        validate: {
            payload: Joi.object({
                client: {
                    cpf: Joi.string().required()
                },
                vehicle: {
                    license_plate: Joi.string().required()
                },
                description_accident: Joi.string().required(),
                thirdPerson: Joi.array().items({
                    name: Joi.string().required(),
                    cpf: Joi.string().required(),
                    phone: Joi.string().required()
                })
            })
        },
    }
});

server.route({
    method: "GET",
    path: "/accident-event",
    handler: async (request, h) => {
        const accidentsEvent = await listAccidentEventController.handle(request, h);

        return h.response(accidentsEvent);
    },
    options: {
        tags: ['api']
    }
});
