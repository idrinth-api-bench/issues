interface GetReply {
  [date: string]: {
    errors: number,
    msgs: {
      [message: string]: number,
    },
    count: number,
    stdv100: number,
    stdv80: number,
    avg100: number,
    median100: number,
    min100: number,
    max100: number,
    avg80: number,
    median80: number,
    min80: number,
    max80: number
  },
}
export default GetReply;
