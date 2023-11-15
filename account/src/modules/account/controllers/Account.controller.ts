import { Request, Response } from 'express';
import CreateAccountService from '../services/Create.service';
import ListAccountService from '../services/List.service';
import OutPutCreateDto from '../dto/OutPutCreate.dto';
import FindByIdService from '../services/FindById.service';

export default class AccountController {
  async create(req: Request, res: Response) {
    const createAccountService = new CreateAccountService();
    const { body } = req;
    const createAccount: OutPutCreateDto = await createAccountService.execute(body);
    return res.status(201).json({
      document: createAccount.document,
      name: createAccount.name,
      idCustomer: Number(createAccount.idCustomer),
      idProduct: Number(createAccount.idProduct),
      idLogin: createAccount.idLogin,
      id: Number(createAccount.id),
      amount: Number(createAccount.amount),
      status: Number(createAccount.status),
      idChargeBasket: Number(createAccount.idChargeBasket),
    });
  }

  async list(req: Request, res: Response) {
    const listAccountService = new ListAccountService();
    const { query } = req;
    const outPut = await listAccountService.execute(query);
    return res.status(201).json({ ...outPut });
  }

  async id(req: Request, res: Response) {
    const findByIdService = new FindByIdService();
    const { id } = req.params;
    const outPut = await findByIdService.execute(Number(id));
    return res.status(200).json({ ...outPut });
  }
}
