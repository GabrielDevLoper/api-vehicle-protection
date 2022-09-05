import * as Boom from "@hapi/boom";
import { ClientInMemoryRepository } from "../../repositories/in-memory/ClientInMemoryRepository"
import { CreateClientService } from "../CreateClient/CreateClientService";
import { ListClientService } from "./ListClientService";

let clientInMemoryRepository: ClientInMemoryRepository;
let listClientService: ListClientService;
let createClientService: CreateClientService;

describe("list client service", () => {
    beforeAll(() => {
        clientInMemoryRepository = new ClientInMemoryRepository();
        listClientService = new ListClientService(clientInMemoryRepository);
        createClientService = new CreateClientService(clientInMemoryRepository);
    });

    it("Should be able list all clients", async () => {
        const client1 = {
            name: "testando 123",
            cpf: "15615610",
            email: "asd1@gmail.com",
            password: "123"
        }

        const client2 = {
            name: "testando 123 123",
            cpf: "1561561021123",
            email: "asdsd1@gmail.com",
            password: "123"
        }

        await createClientService.execute(client1);

        await createClientService.execute(client2);

        const clients = await listClientService.execute();

        expect(clients).toHaveLength(2);
    });
})