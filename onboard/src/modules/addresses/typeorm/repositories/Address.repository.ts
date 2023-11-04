// import { Repository } from 'typeorm';
import { AppDataSource } from '../../../../data-source';
import { Address } from '../entities/Address.entitie';
export const AddressRepository = AppDataSource.getRepository(Address).extend({
  findAll() {
    return this.find();
  },
});
