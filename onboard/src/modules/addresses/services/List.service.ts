import { AddressRepository } from '../typeorm/repositories/Address.repository';
// import { AppDataSource } from '../../../../src/data-source';
// interface IPaginateCustomer {
//   from: number;
//   to: number;
//   per_page: number;
//   total: number;
//   current_page: number;
//   prev_page: number | null;
//   next_page: number | null;
// }
class ListService {
  public async execute(): Promise<any> {
    // const addressRepository: Repository<addressRepository>;
    const address = AddressRepository.findAll();

    return address;
  }
}

export default ListService;
