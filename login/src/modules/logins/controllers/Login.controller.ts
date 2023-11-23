import { Request, Response } from 'express';
import CreateLoginService from '../services/Create.service';
import ListLoginService from '../services/List.service';

export default class LoginController {
  async create(req: Request, res: Response) {
    const createLoginService = new CreateLoginService();
    const { body } = req;
    const output = await createLoginService.execute(body);
    return res.json(output);
  }
  async list(req: Request, res: Response) {
    const listLoginService = new ListLoginService();
    const { query } = req;
    const output = await listLoginService.execute(query);
    return res.json(output);
  }
}
