// import IList from '../interfaces/IList';
import IQuery from '../interfaces/IQuery';
import ListLogin from '../mogoose/repositories/List-user';

class ListService {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async execute(query: IQuery): Promise<any> {
    const listLogin = new ListLogin();
    const { limit = 5, page = 1 } = query;
    const queryString = {
      _id: query.id,
      name: query.name,
      email: query.email,
      document: query.document,
      status: query.status,
    };
    const outPut = await listLogin.ListLogin(queryString, page, limit);
    return outPut;
  }
}

export default ListService;
