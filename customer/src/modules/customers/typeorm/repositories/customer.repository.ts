import { AppDataSource } from '@infra/database/data-source';
import { Customer } from '../entities/Customer.entitie';
import IList from '../../interfaces/IList';

export const customerRepository = AppDataSource.getRepository(Customer).extend({
  findByIdCustomer(id: number) {
    const findByIdCustomer = this.findOne({
      where: {
        id: id,
      },
    });
    return findByIdCustomer;
  },

  findByDocuments(document: string) {
    const findDocument = this.findOneBy({
      document,
    });
    return findDocument;
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  removeEmptyProperties(obj: any) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));
  },
  /**
   *
   * @param query
   * @param opt
   * @returns
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async findAll(query: IList, opt: any) {
    const skip = Number(opt.page);
    const take = Number(opt.limit);

    const queryWhere = this.removeEmptyProperties(query);
    const queryOptions = {
      skip: take * skip,
      take,
    };

    const queryParse =
      Object.keys(queryWhere).length == 0
        ? {
            ...queryOptions,
          }
        : {
            where: [queryWhere],
            ...queryOptions,
          };
    const address = this.find(queryParse);
    return address;
  },

  /**
   *
   * @param query
   * @param opt
   * @returns
   */
  findCount(query: IList, opt: IList) {
    const skip = Number(opt.page);
    const take = Number(opt.limit);
    const queryWhere = this.removeEmptyProperties(query);
    const queryParse =
      Object.keys(queryWhere).length == 0
        ? {
            skip,
            take,
          }
        : {
            where: [queryWhere],
            skip,
            take,
          };
    const count = this.count(queryParse);
    return count;
  },
});
