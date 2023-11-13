interface ICreateResponse {
  document: string;
  name: string;
  idCustomer: number;
  idProduct: number;
  idLogin?: string;
  id: number;
  amount: number;
  status: number;
  idChargeBasket: number;
}

export default ICreateResponse;
