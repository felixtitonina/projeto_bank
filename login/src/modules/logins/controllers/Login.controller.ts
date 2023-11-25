import { Request, Response } from 'express';
import CreateLoginService from '../services/Create.service';
import ListLoginService from '../services/List.service';
import FindByIdService from '../services/FindById.service';
import OauthService from '../services/Oauth.service';

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
  async findById(req: Request, res: Response) {
    const findByIdService = new FindByIdService();
    const { id } = req.params;
    const output = await findByIdService.execute(id);
    return res.json(output);
  }
  async oauth(req: Request, res: Response) {
    const oauthService = new OauthService();
    const { body } = req;
    const output = await oauthService.execute(body);
    return res.json(output);
  }
}
