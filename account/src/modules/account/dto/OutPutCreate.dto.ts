interface OutPutCreateDto {
  document: string;
  name: string;
  idCustomer: number;
  idProduct: number;
  idLogin?: string | null;
  id: number;
  amount: number;
  status: number;
  idChargeBasket: number | null;
}
export default OutPutCreateDto;
