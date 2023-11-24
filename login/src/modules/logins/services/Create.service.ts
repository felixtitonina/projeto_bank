import CreateLogin from '../mogoose/repositories/Create-user';
import ILogin from '../interfaces/ILogin';
import { hash } from 'bcrypt';
class CreateService {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async execute(body: ILogin): Promise<ILogin> {
    const createLogin = new CreateLogin();
    const hashedPassword = await hash(body.password, 10);
    const outPut = await createLogin.createLogin({ ...body, password: hashedPassword });
    return outPut;
  }
}

export default CreateService;
