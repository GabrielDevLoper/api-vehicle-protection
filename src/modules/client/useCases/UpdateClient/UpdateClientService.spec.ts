import * as Boom from "@hapi/boom";
import { Client } from "../../../../entities/Client";
import { ClientInMemoryRepository } from "../../repositories/in-memory/ClientInMemoryRepository"
import { CreateClientService } from "../CreateClient/CreateClientService";
import { UpdateClientService } from "./UpdateClientService";

let clientInMemoryRepository: ClientInMemoryRepository;
let updateClientService: UpdateClientService;
let createClientService: CreateClientService;

describe("update client service", () => {
    beforeAll(() => {
        clientInMemoryRepository = new ClientInMemoryRepository();
        updateClientService = new UpdateClientService(clientInMemoryRepository);
        createClientService = new CreateClientService(clientInMemoryRepository);
    });

    it("Should be able to update a client", async () => {
        const data = {
            name: "Gabriel Barreto",
            cpf: "75846187072",
            email: "gabriel.limabarreto@hotmail.com",
            password: "123"
        }

        const client = await createClientService.execute(data) as Client;

        const data2 = {
            name: "teste insert",
            cpf: "75846187072",
            email: "gabriel.limabarreto@hotmail.com",
            password: "123"
        }

        const clientUpdated = await updateClientService.execute(data2, client.id);

        expect(clientUpdated).toHaveProperty("id");
    });


    it("Should be not able to update a client not exist", async () => {
        const data = {
            name: "teste insert",
            cpf: "42939399034",
            email: "gabriel.limabarreto@hotmail.com",
            password: "123"
        }

        await expect(updateClientService.execute(data, "8561515")).rejects.toThrowError(Boom.notFound("Client not found."));
    });


    it("Should be not able to update a client with cpf invalid.", async () => {
        const data = {
            name: "Ana Julia",
            cpf: "97137678025",
            email: "ana.limabarreto@hotmail.com",
            password: "123"
        }

        const client = await createClientService.execute(data);

        const clientUpdated = {
            name: "Ana Julia",
            cpf: "453",
            email: "ana.limabarreto@hotmail.com",
            password: "123"
        }

        await expect(updateClientService.execute(clientUpdated, client.id)).rejects.toThrowError(Boom.badRequest("CPF is invalid."));
    });


})