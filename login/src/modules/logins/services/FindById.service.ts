import ILogin from '../interfaces/ILogin';
import FindByIdLogin from '../mogoose/repositories/FindById-login';

class FindByIdService {
  public async execute(id: string): Promise<ILogin> {
    const findByIdLogin = new FindByIdLogin();
    const outPut = await findByIdLogin.findByIdLogin(id);
    return outPut;
  }
}

export default FindByIdService;
