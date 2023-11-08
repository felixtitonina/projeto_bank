import { customerRepository } from '../typeorm/repositories/customer.repository';
import { Customer } from '../typeorm/entities/Customer.entitie';
import IList from '../interfaces/IList';

interface IPaginateCustomer {
  limit: number | undefined;
  page: number | undefined;
  total: number | undefined;
  data: Customer[];
}
class ListService {
  public async execute(query: IList): Promise<IPaginateCustomer> {
    const queryString = {
      id: query.id,
      name: query.name,
      email: query.email,
      document: query.document,
      statusRegister: query.status,
    };
    const opt = {
      limit: !query.limit ? 5 : query.limit,
      page: !query.page ? 0 : query.page,
    };
    console.log('queryString queryString');
    console.log(queryString);
    console.log(opt);
    const address = await customerRepository.findAll(queryString, opt);
    const total = await customerRepository.findCount(queryString, opt);
    return {
      limit: opt.limit,
      page: opt.page,
      total,
      data: address,
    };
  }
}

export default ListService;
