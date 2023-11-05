import { phoneRepository } from '../typeorm/repositories/phone.repository';
import { Phone } from '../typeorm/entities/Phone.entitie';

interface IRequesPagination {
  limit?: number | undefined;
  page?: number | undefined;
  idCustomer?: number;
}
interface IPaginate {
  limit: number | undefined;
  page: number | undefined;
  total: number | undefined;
  data: Phone[];
}
class ListService {
  public async execute(query: IRequesPagination): Promise<IPaginate> {
    const queryString = {
      idCustomer: query.idCustomer,
    };
    const opt = {
      limit: !query.limit ? 5 : query.limit,
      page: !query.page ? 0 : query.page,
    };
    const address = await phoneRepository.findAll(queryString, opt);
    const total = await phoneRepository.findCount(queryString, opt);
    return {
      limit: opt.limit,
      page: opt.page,
      total,
      data: address,
    };
  }
}

export default ListService;
