import { AppDataSource } from '../../../../data-source';
import { Customer } from '../entities/Customer.entitie';

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
    const findDocument = this.findBy({
      document,
    });
    return findDocument;
  },

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
  findAll(query: any, opt?: any) {
    const skip = opt.page;
    const take = opt.limit;
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
    const address = this.find(queryParse);
    return address;
  },

  /**
   *
   * @param query
   * @param opt
   * @returns
   */
  findCount(query: any, opt?: any) {
    const skip = opt.page;
    const take = opt.limit;
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
