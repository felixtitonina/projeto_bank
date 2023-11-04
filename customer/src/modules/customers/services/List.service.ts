import { customerRepository } from '../typeorm/repositories/Customer.repository';
import { Customer } from '../typeorm/entities/Customer.entitie';

interface IRequesPagination {
  limit?: number | undefined;
  page?: number | undefined;
  id?: number;
}
interface IPaginateCustomer {
  limit: number | undefined;
  page: number | undefined;
  total: number | undefined;
  data: Customer[];
}
class ListService {
  public async execute(query: IRequesPagination): Promise<IPaginateCustomer> {
    const queryString = {
      id: query.id,
    };
    const opt = {
      limit: !query.limit ? 5 : query.limit,
      page: !query.page ? 0 : query.page,
    };
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
