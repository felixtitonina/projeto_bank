import CreateLogin from '../mogoose/repositories/Create-user';
class CreateService {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async execute(body: any): Promise<any> {
    const createLogin = new CreateLogin();
    const outPut = await createLogin.createLogin(body);
    return outPut;
  }
}

export default CreateService;
