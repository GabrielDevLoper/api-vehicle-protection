import * as Boom from "@hapi/boom";
import { VehicleInMemoryRepository } from "../../repositories/in-memory/VehicleInMemoryRepository";
import { CreateVehicleService } from "./CreateVehicleService";

let vehicleInMemoryRepository: VehicleInMemoryRepository;
let createVehicleService: CreateVehicleService;

describe("Create vehicle service", () => {

    beforeAll(() => {
        vehicleInMemoryRepository = new VehicleInMemoryRepository();
        createVehicleService = new CreateVehicleService(vehicleInMemoryRepository);
    });

    it("Should be able to create a new vehicle", async () => {
        const data = {
            vehicle: "GOL",
            license_plate: "ASCD845",
            year: 2020,
        }

        const vehicle = await createVehicleService.execute(data);

        expect(vehicle).toHaveProperty("id");
    });

    it("Should be not able to create a vehicle existing", async () => {
        const data = {
            vehicle: "BMW",
            license_plate: "ASCF945",
            year: 2022,
        }

        await createVehicleService.execute(data);

        await expect(createVehicleService.execute(data)).rejects.toThrowError(Boom.badRequest("Vehicle already exists."));
    });
});