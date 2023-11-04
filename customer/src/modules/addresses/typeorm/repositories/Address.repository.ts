import { AppDataSource } from '../../../../data-source';
import { Address } from '../entities/Address.entitie';
export const AddressRepository = AppDataSource.getRepository(Address).extend({
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
    console.log('query ---', Object.keys(query).length);
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
    console.log('queryParse ======', queryParse);
    const address = this.find(queryParse);
    return address;
  },
});
