/* eslint {"@typescript-eslint/ban-types": 0,"no-unused-expressions": 0} */
export default <T>(): Function => <U extends T>(constructor: U,) => {
  constructor;
};
