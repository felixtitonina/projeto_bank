import IInputCreateLogin from './../../interfaces/IInputCreateLogin';
import IOutputCreateLogin from './../../interfaces/IOutputCreateLogin';
import Login from '../entities/login.entitie';

export default class MongoCreateRepository {
  public logins = Login;
  async createLogin(body: IInputCreateLogin): Promise<IOutputCreateLogin> {
    const outPut: IOutputCreateLogin = await this.logins.create(body);
    return outPut as IOutputCreateLogin;
  }
}
