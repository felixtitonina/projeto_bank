import CreateLogin from '../mogoose/repositories/Create-user';
import IInputCreateLogin from '../interfaces/IInputCreateLogin';
import IOutputCreateLogin from '../interfaces/IOutputCreateLogin';
import { hash } from 'bcrypt';
class CreateService {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async execute(body: IInputCreateLogin): Promise<IOutputCreateLogin> {
    const createLogin = new CreateLogin();
    const hashedPassword = await hash(body.password, 10);
    const outPut = await createLogin.createLogin({ ...body, password: hashedPassword });
    return outPut as IOutputCreateLogin;
  }
}

export default CreateService;
