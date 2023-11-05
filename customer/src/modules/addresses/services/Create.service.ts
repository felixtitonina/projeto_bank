import { addressRepository } from '../typeorm/repositories/address.repository';
import { Address } from '../typeorm/entities/Address.entitie';
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
    const newAdress = addressRepository.create(body);
    const returnSave = await addressRepository.save(newAdress);
    return returnSave as Address;
  }
}

export default CreateService;
