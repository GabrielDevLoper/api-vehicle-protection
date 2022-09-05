import * as HapiSwagger from "hapi-swagger";
import * as Inert from "@hapi/inert";
import * as Vision from "@hapi/vision";

const swaggerOptions: HapiSwagger.RegisterOptions = {
    info: {
        title: 'Test API Documentation',
    },
};

export const plugins = [
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