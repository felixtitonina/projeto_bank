import { Request, Response } from 'express';
import CreateAccountService from '../services/Create.service';
import OutPutCreateDto from '../dto/OutPutCreate.dto';

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
}
