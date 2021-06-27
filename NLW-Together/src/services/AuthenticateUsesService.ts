import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { UsersRepositories } from "../repositories/UsersRepositories";


interface IAuthenticateRequest {
    email: string,
    password: string;
}


class AuthenticateUsersService {
    async execute({ email, password }: IAuthenticateRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories);

        // Check e-mail exists
        const user = await usersRepositories.findOne({
            email
        });

        if (!user) {
            throw new Error("Email/Password incorrect");
        }

        // Check password is correct

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Email/Password incorrect");
        }

        // Gen token
        const token = sign({
            email: user.email
        }, "e9095a076d1bfb22413a39e2183367c5",
            {
                subject: user.id, expiresIn: "1d"
            });

        return token;


    }

}

export { AuthenticateUsersService };