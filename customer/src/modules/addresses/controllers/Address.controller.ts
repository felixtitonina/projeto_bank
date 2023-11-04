import { Request, Response } from 'express';
// import { customerRepository } from '../../customers/typeorm/repositories/Customer.repository';
// import AddressesRepository from '../typeorm/repositories/Address.repository';
// import { BadRequestError } from '../../../helpers/api-erros';

import ListAddressService from '../services/List.service';

export default class AddressController {
  // async create(req: Request, res: Response) {
  //   // const { body } = req;
  //   // const customer = await customerRepository.findOneBy({ id: body.idCustomer });
  //   // if (!customer) {
  //   //   throw new BadRequestError('Cadastro não encontrado.');
  //   // }
  //   // const newAdress = addressRepository.create(body);
  //   // console.log('newAdress', newAdress);
  //   // const returnSave = await addressRepository.save(newAdress);
  //   // return res.status(201).json({ ...returnSave });
  // }
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
    const listAddress = new ListAddressService();
    const address = await listAddress.execute();
    // const count = await addressRepository.count(queryParse);
    // const addresses = await addressRepository.find(queryParse);
    return res.json(address);
  }
}
