import { Request, Response } from 'express';
import ListAddressService from '../services/List.service';
import CreateAddressService from '../services/Create.service';

export default class AddressController {
  async create(req: Request, res: Response) {
    const createAddressService = new CreateAddressService();
    const { body } = req;
    const createAddress = await createAddressService.execute(body);
    return res.status(201).json({ ...createAddress });
  }

  async list(req: Request, res: Response) {
    const { query } = req;
    const listAddress = new ListAddressService();
    const address = await listAddress.execute(query);
    return res.json({ ...address });
  }
}
