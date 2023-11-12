import { Request, Response } from 'express';
import CreateService from '../services/Create.service';
import ListService from '../services/List.service';
import FindByIdService from '../services/FindById.service';
export default class CustomerController {
  async create(req: Request, res: Response) {
    const createService = new CreateService();
    const { body } = req;
    console.log('body ###########################', body);
    const returnSave = await createService.execute(body);
    return res.status(201).json({ ...returnSave });
  }

  async list(req: Request, res: Response) {
    const { query } = req;
    const listCustomer = new ListService();
    const customer = await listCustomer.execute(query);
    return res.json({ ...customer });
  }

  async id(req: Request, res: Response) {
    const findByIdService = new FindByIdService();
    const { id } = req.params;
    const customer = await findByIdService.execute(Number(id));
    return res.json({ ...customer });
  }
}
