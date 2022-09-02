import { IVehicleRepository } from "../../repositories/IVehicleRepository";
import { CreateVehicleRequestDTO } from "./CreateVehicleDTO";

export class CreateVehicleService {
    constructor(private vehicleRepository: IVehicleRepository) { };

    async execute(data: CreateVehicleRequestDTO) {
        const vehicle = await this.vehicleRepository.save(data);

        return vehicle;
    }
}