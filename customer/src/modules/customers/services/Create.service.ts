import { customerRepository } from '../typeorm/repositories/customer.repository';
import { Customer } from '../typeorm/entities/Customer.entitie';
import { NotFoundError } from '../../../helpers/api-erros';

interface IRequest {
  name: string;
  email: string;
  document: string;
  businessName?: string;
}

class CreateService {
  public async execute(body: IRequest): Promise<Customer> {
    const findDocument = await customerRepository.findByDocuments(body.document);
    if (findDocument) throw new NotFoundError('Documento já cadastrado');

    const newAddress = customerRepository.create(body);
    const returnSave = await customerRepository.save(newAddress);
    return returnSave as Customer;
  }
}

export default CreateService;
