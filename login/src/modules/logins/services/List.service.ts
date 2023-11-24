import IList from '../interfaces/IList';
import IQuery from '../interfaces/IQuery';
import ListLogin from '../mogoose/repositories/List-user';

class ListService {
  public async execute(query: IQuery): Promise<IList[]> {
    const listLogin = new ListLogin();
    const { limit = 5, page = 1 } = query;
    const queryString = {
      _id: query.id,
      name: query.name,
      email: query.email,
      document: query.document,
      status: query.status,
    };
    const opt = {
      limit,
      page,
    };
    console.log(opt);
    const outPut = await listLogin.ListLogin(queryString);
    return outPut;
  }
}

export default ListService;
