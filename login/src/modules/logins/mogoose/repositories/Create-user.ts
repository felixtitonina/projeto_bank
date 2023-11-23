import Login from '../entities/login.entitie';

export default class MongoCreateRepository {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  async createLogin(body: any): Promise<any> {
    const create = await Login.create(body);
    return { ...create };
  }
}
