import { ThirdPerson } from "../../../../entities/ThirdPerson";
import { ClientInMemoryRepository } from "../../../client/repositories/in-memory/ClientInMemoryRepository";
import { CreateClientService } from "../../../client/useCases/CreateClient/CreateClientService";
import { ThirdPersonInMemoryRepository } from "../../../thirdPerson/repositories/in-memory/ThirdPersonInMemoryRepository";
import { VehicleInMemoryRepository } from "../../../vehicle/repositories/in-memory/VehicleInMemoryRepository";
import { CreateVehicleService } from "../../../vehicle/useCases/CreateVehicle/CreateVehicleService";
import { AccidentEventInMemoryRepository } from "../../repositories/in-memory/AccidentEventInMemoryRepository";
import { CreateAccidentEventService } from "./CreateAccidentEventService";

let accidentEventInMemoryRepository: AccidentEventInMemoryRepository;
let clientInMemoryRepository: ClientInMemoryRepository;
let vehicleInMemoryRepository: VehicleInMemoryRepository;
let thirdPersonInMemoryRepository: ThirdPersonInMemoryRepository;
let createAccidentEventService: CreateAccidentEventService;
let createClientService: CreateClientService;
let createVehicleService: CreateVehicleService;




describe("create accident event service", () => {

    beforeAll(() => {
        accidentEventInMemoryRepository = new AccidentEventInMemoryRepository();
        clientInMemoryRepository = new ClientInMemoryRepository();
        vehicleInMemoryRepository = new VehicleInMemoryRepository();
        thirdPersonInMemoryRepository = new ThirdPersonInMemoryRepository();


        createClientService = new CreateClientService(clientInMemoryRepository);
        createVehicleService = new CreateVehicleService(vehicleInMemoryRepository);
        createAccidentEventService = new CreateAccidentEventService(
            accidentEventInMemoryRepository,
            clientInMemoryRepository,
            vehicleInMemoryRepository,
            thirdPersonInMemoryRepository
        );
    });


    it("Should be able to create a new accident event", async () => {
        const client = await createClientService.execute({
            name: "James",
            cpf: "43368920081",
            email: "james@gmail.com",
            password: "123"
        });

        const vehicle = await createVehicleService.execute({
            vehicle: "GOL",
            license_plate: "12334",
            year: 2022
        });

        const thirdPerson = [
            {
                id: "455",
                name: "tulio",
                phone: "123567",
                cpf: "521515",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                id: "2131",
                name: "mister",
                phone: "4353",
                cpf: "43532",
                created_at: new Date(),
                updated_at: new Date(),
            },
        ]

        const accidentEvent = await createAccidentEventService.execute({
            client,
            vehicle,
            description_accident: "Batida",
            thirdPerson
        });

        console.log(accidentEvent);
    });
});