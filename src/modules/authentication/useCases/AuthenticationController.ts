import * as Hapi from "@hapi/hapi";
import { AuthenticationService } from "./AuthenticationService";
import { IAuthenticationRequestDTO } from "./IAuthenticationRequestDTO";


export class AuthenticationController {
    constructor(private authService: AuthenticationService) { }

    async handle(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        const { cpf, password } = request.payload as IAuthenticationRequestDTO;

        const auth = await this.authService.execute({
            cpf,
            password
        });

        return auth;
    }
}