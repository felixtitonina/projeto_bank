import { AddressRepository } from '../typeorm/repositories/Address.repository';
import { Address } from '../typeorm/entities/Address.entitie';

interface IRequesPagination {
  limit?: number | undefined;
  page?: number | undefined;
  idCustomer?: number;
}
interface IPaginateCustomer {
  limit: number | undefined;
  page: number | undefined;
  data: Address[];
}
class ListService {
  public async execute(query: IRequesPagination): Promise<IPaginateCustomer> {
    const queryString = {
      idCustomer: query.idCustomer,
    };
    const opt = {
      limit: !query.limit ? 0 : query.limit,
      page: !query.page ? 5 : query.page,
    };
    const address = await AddressRepository.findAll(queryString, opt);
    return {
      limit: opt.limit,
      page: opt.page,
      data: address,
    };
  }
}

export default ListService;
