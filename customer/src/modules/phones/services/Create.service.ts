import { phoneRepository } from '../typeorm/repositories/phone.repository';
import { Phone } from '../typeorm/entities/Phone.entitie';
import { customerRepository } from '../../customers/typeorm/repositories/customer.repository';
import { NotFoundError } from '../../../helpers/api-erros';
interface IRequest {
  ddd: number;
  phone: number;
  default: boolean;
  idCustomer: number;
}
class CreateService {
  public async execute(body: IRequest): Promise<Phone> {
    const findByCustomer = await customerRepository.findByIdCustomer(body.idCustomer);
    if (!findByCustomer) throw new NotFoundError('Cliente não encontrado.');

    const newPhone = phoneRepository.create(body);
    const returnSave = await phoneRepository.save(newPhone);
    return returnSave as Phone;
  }
}

export default CreateService;
