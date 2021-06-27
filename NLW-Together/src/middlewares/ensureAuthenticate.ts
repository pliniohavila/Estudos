import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";


interface IPayload {
    sub: string;
}

export function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    // Receive Token
    const authToken = request.headers.authorization

    // Valid if token as filled

    if (!authToken) {
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ");

    try {
        const { sub } = verify(token, "e9095a076d1bfb22413a39e2183367c5") as IPayload;

        request.user_id = sub;

        return next();
    } catch (err) {
        return response.status(401).end();
    }

    // e9095a076d1bfb22413a39e2183367c5

    // Check if token is valid


    // Recover information from user
    return next();


}

