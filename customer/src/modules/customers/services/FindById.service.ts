import { customerRepository } from '../typeorm/repositories/customer.repository';
import { Customer } from '../typeorm/entities/Customer.entitie';
import { NotFoundError } from '@shared/errors/api-erros';

class FindByIdService {
  public async execute(id: number): Promise<Customer> {
    const customer = await customerRepository.findByIdCustomer(id);
    if (!customer) throw new NotFoundError('Cliente não encontrado.');
    return customer as Customer;
  }
}

export default FindByIdService;
