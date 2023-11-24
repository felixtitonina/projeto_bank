// eslint-disable-next-line @typescript-eslint/no-explicit-any
const clean = (obj: any) => {
  const _obj = obj;
  for (const key in _obj) {
    if (_obj[key] === null || _obj[key] === undefined || _obj[key] === '') {
      delete _obj[key];
    }
  }
  return _obj;
};
export default clean;
