import Login from '../entities/login.entitie';

export default class MongoListRepository {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  async ListLogin(query: any): Promise<any> {
    const login = await Login.paginate(query, { page: 1, limit: 1 });
    return { ...login };
  }
}
