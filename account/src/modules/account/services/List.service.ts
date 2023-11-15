import { accountRepository } from '../typeorm/repositories/account.repository';
import { Account } from '../typeorm/entities/Account.entitie';

import IList from '../interfaces/IList';
interface IPaginateAccount {
  limit: number | undefined;
  page: number | undefined;
  total: number | undefined;
  data: Account[];
}

class ListService {
  public async execute(query: IList): Promise<IPaginateAccount> {
    const queryString = {
      id: query.id,
      document: query.document,
      name: query.name,
      idCustomer: query.idCustomer,
      status: query.status,
      idProduct: query.idProduct,
      idChargeBasket: query.idChargeBasket,
      idLogin: query.idLogin,
    };
    const opt = {
      limit: !query.limit ? 5 : query.limit,
      page: !query.page ? 0 : query.page,
    };
    const account = await accountRepository.findAll(queryString, opt);
    const total = await accountRepository.findCount(queryString, opt);
    return {
      limit: opt.limit,
      page: opt.page,
      total,
      data: account,
    };
  }
}

export default ListService;
