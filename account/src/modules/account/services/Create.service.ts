import { requestApi } from '@shared/axios/requestApi';
// import ICreate from '../interfaces/ICreate';
import { accountRepository } from '../typeorm/repositories/account.repository';

import OutPutCreateDto from '../dto/OutPutCreate.dto';
import InPutCreateDto from '../dto/InPutCreate.dto';

class CreateService {
  public async execute(body: InPutCreateDto): Promise<OutPutCreateDto> {
    const customer = await requestApi({
      url: `${process.env.URL_MSO_CUSTOMER}/${body.idCustomer}`,
    });
    const { name, email, document, id } = customer.data;
    const data = {
      ...body,
      ...{
        name,
        email,
        document,
        idCustomer: id,
      },
    };
    const newAccount = accountRepository.create(data);
    const returnSave = await accountRepository.save(newAccount);
    return returnSave;
  }
}

export default CreateService;
