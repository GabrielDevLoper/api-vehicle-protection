import "dotenv/config";
import * as Boom from "@hapi/boom";

import { ClientInMemoryRepository } from "../../../client/repositories/in-memory/ClientInMemoryRepository";
import { CreateClientService } from "../../../client/useCases/CreateClient/CreateClientService";
import { AuthenticationService } from "./AuthenticationService";

let clientInMemoryRepository: ClientInMemoryRepository;
let createClientService: CreateClientService;
let authenticationService: AuthenticationService

describe("authentication service", () => {

    beforeAll(() => {
        clientInMemoryRepository = new ClientInMemoryRepository();
        createClientService = new CreateClientService(clientInMemoryRepository);
        authenticationService = new AuthenticationService(clientInMemoryRepository);
    });

    it("Should be able to authentication", async () => {
        const data = {
            name: "Gabriel Santos",
            cpf: "45071717093",
            email: "gabriel.limabarreto@hotmail.com",
            password: "123"
        }

        await createClientService.execute(data);

        const auth = await authenticationService.execute({
            cpf: data.cpf,
            password: data.password
        });

        expect(auth).toHaveProperty("token");
    });

    it("Should be not able to authentication if client not exists", async () => {
        const authData = {
            cpf: "02032165246",
            password: "1234589"
        }

        await expect(authenticationService.execute(authData)).rejects.toThrowError(Boom.badRequest("Credentials invalid."));
    });
});