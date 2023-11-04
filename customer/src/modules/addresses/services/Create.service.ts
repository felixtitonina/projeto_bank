import { AddressRepository } from '../typeorm/repositories/Address.repository';
import { Address } from '../typeorm/entities/Address.entitie';
// import { AppDataSource } from '../../../../src/data-source';
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
    const newAdress = AddressRepository.create(body);
    console.log('newAdress', newAdress);
    const returnSave = await AddressRepository.save(newAdress);
    return returnSave as Address;
  }
}

export default CreateService;
