import { AppDataSource } from '@infra/database/data-source';
import { Address } from '../entities/Address.entitie';
export const addressRepository = AppDataSource.getRepository(Address).extend({
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
