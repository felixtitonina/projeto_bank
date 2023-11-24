import Login from '../entities/login.entitie';
// import ILogin from '../../interfaces/ILogin';
export default class MongoIdRepository {
  public logins = Login;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async findByIdLogin(id: string): Promise<any> {
    const login = await this.logins.findById({ _id: id });
    return login;
  }
}
