import { ListVehicleService } from "./ListVehicleService";
import * as Hapi from "@hapi/hapi";

export class ListVehicleController {
    constructor(private listVehicleService: ListVehicleService) { }

    async handle() {
        const vehicles = await this.listVehicleService.execute();

        return vehicles;
    }
}