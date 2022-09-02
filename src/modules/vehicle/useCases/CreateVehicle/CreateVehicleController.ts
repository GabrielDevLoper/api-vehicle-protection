import { CreateVehicleService } from "./CreateVehicleService";
import * as Hapi from "@hapi/hapi";
import { ICreateVehicleRequestDTO } from "./CreateVehicleDTO";

export class CreateVehicleController {
    constructor(private createVehicleService: CreateVehicleService) { }

    async handle(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        const { vehicle: vehicle_name, license_plate, year } = request.payload as ICreateVehicleRequestDTO;

        const data = {
            vehicle: vehicle_name,
            license_plate,
            year
        }

        const vehicle = await this.createVehicleService.execute(data);

        return vehicle;
    }
}