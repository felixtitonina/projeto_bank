import { Request, Response } from 'express';
import { BadRequestError } from '../../../helpers/api-erros';
import { customerRepository } from '../typeorm/repositories/Customer.repository';

export default class CustomerController {
  async create(req: Request, res: Response) {
    const { body } = req;
    const customer = await customerRepository.findOneBy({ document: body.document });
    if (customer) {
      throw new BadRequestError('Documento já cadastrado');
    }
    const newCustomer = customerRepository.create(body);
    console.log('newCustomer', newCustomer);
    const returnSave = await customerRepository.save(newCustomer);
    return res.status(201).json(returnSave);
  }

  async list(req: Request, res: Response) {
    const { query } = req;
    // const { skip = 0, take =  } = query;
    console.log('query', Object.keys(query).length);
    const skip = 1;
    const take = 5;
    const queryParse =
      Object.keys(query).length == 0
        ? {}
        : {
            where: [query],
            skip,
            take,
          };
    console.log('queryParse ======', queryParse);
    const count = await customerRepository.count(queryParse);
    const rooms = await customerRepository.find(queryParse);
    return res.json({ data: rooms, skip, limit: take, count });
  }

  async id(req: Request, res: Response) {
    const rooms = await customerRepository.find({});
    return res.json(rooms);
  }
}
