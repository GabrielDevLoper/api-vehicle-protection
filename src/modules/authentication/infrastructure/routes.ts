import { authenticationController } from "../useCases";

export const authRoutes = [
    {
        method: "POST",
        path: "/login",
        handler: async (request, h) => {
            const client = await authenticationController.handle(request, h);

            return h.response(client);
        },
        options: {
            auth: false
        }
    }

]