interface GetReply {
  [route: string]: {
    [date: string]: {
      mean: number;
      average: number;
      stdev: number;
    },
  },
}
export default GetReply;
