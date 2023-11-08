import { addressRepository } from '../typeorm/repositories/address.repository';
import { customerRepository } from '../../customers/typeorm/repositories/customer.repository';
import { Address } from '../typeorm/entities/Address.entitie';
import { NotFoundError } from '@shared/errors/api-erros';
// import { NotFoundError } from '../../../shared/errors/api-erros';
import ICreate from '../interfaces/ICreate';
class CreateService {
  public async execute(body: ICreate): Promise<Address> {
    const findByCustomer = await customerRepository.findByIdCustomer(body.idCustomer);

    if (!findByCustomer) throw new NotFoundError('Cliente não encontrado.');

    const newAdress = addressRepository.create(body);
    const returnSave = await addressRepository.save(newAdress);

    return returnSave as Address;
  }
}

export default CreateService;
