import { phoneRepository } from '../typeorm/repositories/phone.repository';
import { Phone } from '../typeorm/entities/Phone.entitie';
interface IRequest {
  ddd: number;
  phone: number;
  default: boolean;
  idCustomer: number;
}
class CreateService {
  public async execute(body: IRequest): Promise<Phone> {
    const newPhone = phoneRepository.create(body);
    const returnSave = await phoneRepository.save(newPhone);
    return returnSave as Phone;
  }
}

export default CreateService;
