import * as Boom from "@hapi/boom";
import { ClientInMemoryRepository } from "../../repositories/in-memory/ClientInMemoryRepository"
import { CreateClientService } from "./CreateClientService";

let clientInMemoryRepository: ClientInMemoryRepository;
let createClientService: CreateClientService;

describe("create client service", () => {
    beforeAll(() => {
        clientInMemoryRepository = new ClientInMemoryRepository();
        createClientService = new CreateClientService(clientInMemoryRepository);
    });

    it("Should be able to create a new client", async () => {
        const data = {
            name: "Gabriel Barreto",
            cpf: "516515115615",
            email: "gabriel.limabarreto@hotmail.com",
            password: "123"
        }

        const client = await createClientService.execute(data);

        expect(client).toHaveProperty("id");
    });

    it("Should be not able to create a client existing", async () => {
        const user = {
            name: "Gabriel Barreto",
            cpf: "1231s123",
            email: "gabriel.limabarreto@hotmail.com",
            password: "123"
        }

        await createClientService.execute(user);

        await expect(createClientService.execute(user)).rejects.toThrowError(Boom.badRequest("Client already exists."));
    });
})