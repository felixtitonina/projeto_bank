import { addressRepository } from '../typeorm/repositories/address.repository';
import { customerRepository } from '../../customers/typeorm/repositories/customer.repository';
import { Address } from '../typeorm/entities/Address.entitie';
import { NotFoundError } from '../../../helpers/api-erros';
interface IRequest {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  default: boolean;
  idCustomer: number;
}
class CreateService {
  public async execute(body: IRequest): Promise<Address> {
    const findByCustomer = await customerRepository.findByIdCustomer(body.idCustomer);

    if (!findByCustomer) throw new NotFoundError('Cliente não encontrado.');

    const newAdress = addressRepository.create(body);
    const returnSave = await addressRepository.save(newAdress);

    return returnSave as Address;
  }
}

export default CreateService;
