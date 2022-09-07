import { ThirdPerson } from "../../../entities/ThirdPerson";
import { ICreateThirdPersonRequestDTO } from "../useCases/CreateThirdPerson/CreateThirdPersonDTO";

export interface IThirdPersonRepository {
    saveMany(data: ICreateThirdPersonRequestDTO[]): Promise<ThirdPerson[]>;
    findManyExists(data: ICreateThirdPersonRequestDTO[]): Promise<ThirdPerson[]>;
}