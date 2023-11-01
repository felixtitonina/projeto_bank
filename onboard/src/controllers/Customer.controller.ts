import { Request, Response } from 'express';
import { BadRequestError } from '../helpers/api-erros';
import { customerRepository } from '../repositories/Customer.repository';

export class CustomerController {
  async create(req: Request, res: Response) {
    const { body } = req;
    const customer = await customerRepository.findOneBy({ document: body.document });
    if (customer) {
      throw new BadRequestError('Documento já cadastrado');
    }
    const newCustomer = customerRepository.create(body);
    console.log('newCustomer', newCustomer);
    await customerRepository.save(newCustomer);
    return res.status(201).json(newCustomer);
  }

  async list(req: Request, res: Response) {
    const rooms = await customerRepository.find({});
    return res.json(rooms);
  }

  async id(req: Request, res: Response) {
    const rooms = await customerRepository.find({});
    return res.json(rooms);
  }
}
