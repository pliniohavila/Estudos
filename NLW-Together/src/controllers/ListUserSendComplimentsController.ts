import { Request, Response } from "express";
import { ListSenderReceiverComplimentsService } from "../services/ListUserSendComplimentsService";



class ListUserSendComplimentsController {

    async handle(request: Request, response: Response) {

        const { user_id } = request;

        const listUserSendComplimentsService = new ListSenderReceiverComplimentsService();

        const compliments = await listUserSendComplimentsService.execute(user_id);

        return response.json(compliments);
    };

}

export { ListUserSendComplimentsController }