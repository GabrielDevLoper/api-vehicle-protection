import * as Boom from "@hapi/boom";
import { Vehicle } from "../../../../entities/Vehicle";
import { IVehicleRepository } from "../../repositories/IVehicleRepository";
import { ICreateVehicleRequestDTO } from "./CreateVehicleDTO";

export class CreateVehicleService {
    constructor(private vehicleRepository: IVehicleRepository) { };

    async execute(data: ICreateVehicleRequestDTO) {
        const vehicleArealdyExists = await this.vehicleRepository.findByLicensePlate(data.license_plate);

        if (vehicleArealdyExists) {
            throw Boom.badRequest("Vehicle already exists.", vehicleArealdyExists);
        }

        const vehicle = await this.vehicleRepository.save(data);

        return vehicle;
    }
}