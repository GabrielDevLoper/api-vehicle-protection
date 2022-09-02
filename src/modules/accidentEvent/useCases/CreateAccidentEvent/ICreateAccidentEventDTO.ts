import { Client } from "../../../../entities/Client";
import { ThirdPerson } from "../../../../entities/ThirdPerson";
import { Vehicle } from "../../../../entities/Vehicle";

export interface ICreateAccidentEventRequestDTO {
    vehicle: Vehicle;
    client: Client;
    description_accident: string;
    thirdPerson: ThirdPerson[];
}