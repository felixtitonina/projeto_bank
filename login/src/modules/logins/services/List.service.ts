import IList from '../interfaces/IList';
import ListLogin from '../mogoose/repositories/List-user';

class ListService {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async execute(query: IList): Promise<any> {
    const listLogin = new ListLogin();
    const outPut = await listLogin.ListLogin(query);
    return outPut;
  }
}

export default ListService;
