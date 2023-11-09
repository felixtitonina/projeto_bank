import { customerRepository } from '../typeorm/repositories/customer.repository';
import { Customer } from '../typeorm/entities/Customer.entitie';
import { ConflictError } from '@shared/errors/api-erros';
import ICreate from '../interfaces/ICreate';
class CreateService {
  public async execute(body: ICreate): Promise<Customer> {
    const findDocument = await customerRepository.findByDocuments(body.document);
    if (findDocument) throw new ConflictError('Documento já cadastrado');

    const newAddress = customerRepository.create(body);
    const returnSave = await customerRepository.save(newAddress);
    return returnSave as Customer;
  }
}

export default CreateService;
