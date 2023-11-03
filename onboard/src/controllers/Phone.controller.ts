import { Request, Response } from 'express';
import { customerRepository } from '../repositories/Customer.repository';
import { phoneRepository } from '../repositories/Phone.repository';
import { BadRequestError } from '../helpers/api-erros';

export class PhoneController {
  async create(req: Request, res: Response) {
    const { body } = req;
    const customer = await customerRepository.findOneBy({ id: body.idCustomer });
    if (!customer) {
      throw new BadRequestError('Cadastro não encontrado.');
    }
    const newPhone = phoneRepository.create(body);
    console.log('newPhone', newPhone);
    const returnSave = await phoneRepository.save(newPhone);
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
    const count = await phoneRepository.count(queryParse);
    const phones = await phoneRepository.find(queryParse);
    return res.json({ data: phones, skip, limit: take, count });
  }
}
