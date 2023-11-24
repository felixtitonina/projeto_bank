import Login from '../entities/login.entitie';
import ILogin from './../../interfaces/ILogin';
import IQuery from './../../interfaces/IQuery';
import clean from '@shared/funcao';
export default class MongoListRepository {
  public logins = Login;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  async ListLogin(query: IQuery, opt = {}): Promise<ILogin[]> {
    console.log(`query : IQuery`, query);
    const login = await this.logins.find(clean(query));
    return login;
  }
}
