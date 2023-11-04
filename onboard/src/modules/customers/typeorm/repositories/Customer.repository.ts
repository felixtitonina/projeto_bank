import { AppDataSource } from '../../../../data-source';
import { Customer } from '../entities/Customer.entitie';

export const customerRepository = AppDataSource.getRepository(Customer);
