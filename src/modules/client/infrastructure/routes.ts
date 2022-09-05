import { createClientController } from "../useCases/CreateClient";
import * as Joi from "joi";
import * as Hapi from "@hapi/hapi";
import { updateClientController } from "../useCases/UpdateClient";
import { listClientController } from "../useCases/ListClient";
import { authenticationController } from "../../authentication/useCases/auth";


export const clientRoutes = [
    {
        method: "POST",
        path: "/clients",
        handler: async (request: Hapi.Request, h: Hapi.ResponseToolkit) => {
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
            }
        }
    },
    {
        method: "PUT",
        path: "/clients/{id}",
        handler: async (request: Hapi.Request, h: Hapi.ResponseToolkit) => {
            const client = await updateClientController.handle(request, h);

            return h.response(client);
        },
    },
    {
        method: "GET",
        path: "/clients",
        handler: async (request, h) => {
            const client = await listClientController.handle(request, h);

            return h.response(client);
        },
    },
]