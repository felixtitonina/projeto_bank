import { Request, Response } from 'express';
import ListPhoneService from '../services/List.service';
import CreatePhoneService from '../services/Create.service';

export default class PhoneController {
  async create(req: Request, res: Response) {
    const createPhoneService = new CreatePhoneService();
    const { body } = req;
    const phone = await createPhoneService.execute(body);
    return res.status(201).json({ ...phone });
  }
  async list(req: Request, res: Response) {
    const { query } = req;
    const listPhoneService = new ListPhoneService();
    const phone = await listPhoneService.execute(query);
    return res.json({ ...phone });
  }
}
