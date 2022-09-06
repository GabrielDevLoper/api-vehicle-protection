import { ThirdPerson } from "../../../entities/ThirdPerson";
import { ICreateThirdPersonRequestDTO } from "../useCases/CreateThirdPerson/CreateThirdPersonDTO";

export interface IThirdPersonRepository {
    saveMany(data: ICreateThirdPersonRequestDTO[]): Promise<ThirdPerson[]>;
    findMany(data: ICreateThirdPersonRequestDTO[]): Promise<ThirdPerson[]>;
}