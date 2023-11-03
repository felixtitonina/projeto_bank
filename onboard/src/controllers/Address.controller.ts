import { Request, Response } from 'express';
import { customerRepository } from '../repositories/Customer.repository';
import { addressRepository } from '../repositories/Address.repository';
import { BadRequestError } from '../helpers/api-erros';

export class AddressController {
  async create(req: Request, res: Response) {
    const { body } = req;
    const customer = await customerRepository.findOneBy({ id: body.idCustomer });
    if (!customer) {
      throw new BadRequestError('Cadastro não encontrado.');
    }
    const newAdress = addressRepository.create(body);
    console.log('newAdress', newAdress);
    const returnSave = await addressRepository.save(newAdress);
    return res.status(201).json({ ...returnSave });
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
    const count = await addressRepository.count(queryParse);
    const addresses = await addressRepository.find(queryParse);
    return res.json({ data: addresses, skip, limit: take, count });
  }
}
