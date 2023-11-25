interface IInputCreateLogin {
  _id: string;
  name?: string;
  nameCompany?: string;
  email?: string;
  password: string;
  document?: string;
  status?: number;
  tryLogin?: number;
  dateBlocked?: Date;
  idCustomer?: number;
  idProduct?: number;
}
export default IInputCreateLogin;
