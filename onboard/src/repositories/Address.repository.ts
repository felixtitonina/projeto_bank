import { AppDataSource } from '../data-source';
import { Address } from '../entities/Address.entitie';

export const addressRepository = AppDataSource.getRepository(Address);
