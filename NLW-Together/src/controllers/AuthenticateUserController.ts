import { Request, Response } from "express";
import { AuthenticateUsersService } from "../services/AuthenticateUsesService";



class AuthenticateUserController {

    async handle(request: Request, response: Response) {
        const { email, password } = request.body;

        const authenticateUserService = new AuthenticateUsersService();

        const token = await authenticateUserService.execute({
            email,
            password
        })

        return response.json(token);
    };
}

export { AuthenticateUserController }