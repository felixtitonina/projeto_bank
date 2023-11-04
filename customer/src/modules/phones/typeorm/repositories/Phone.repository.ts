import { AppDataSource } from '../../../../data-source';
import { Phone } from '../entities/Phone.entitie';

export const phoneRepository = AppDataSource.getRepository(Phone);
