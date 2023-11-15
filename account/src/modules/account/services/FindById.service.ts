import { accountRepository } from '../typeorm/repositories/account.repository';
import { Account } from '../typeorm/entities/Account.entitie';
import { NotFoundError } from '@shared/errors/api-erros';

class IdAccountService {
  public async execute(id: number): Promise<Account> {
    const account = await accountRepository.findByIdAccount(id);
    if (!account) throw new NotFoundError('Conta não encontrada.');
    return account as Account;
  }
}

export default IdAccountService;
