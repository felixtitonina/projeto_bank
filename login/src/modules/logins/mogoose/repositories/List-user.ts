import IPagination from '@modules/logins/interfaces/IPagination';
import Login from '../entities/login.entitie';
// import ILogin from './../../interfaces/ILogin';
import IQuery from './../../interfaces/IQuery';
import clean from '@shared/funcao';
export default class MongoListRepository {
  public logins = Login;
  async ListLogin(query: IQuery, page: number, limit: number): Promise<IPagination> {
    console.log(`query : IQuery`, query);
    const login = await this.logins.paginate({
      query: clean(query),
      page,
      limit,
    });
    return login as IPagination;
  }
}
