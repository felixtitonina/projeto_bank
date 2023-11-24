import ILogin from './../../interfaces/ILogin';
import Login from '../entities/login.entitie';

export default class MongoCreateRepository {
  public logins = Login;
  async createLogin(body: ILogin): Promise<ILogin> {
    const outPut: ILogin = await this.logins.create(body);
    return outPut;
  }
}
