interface GetReply {
  [project: string]: {
    [date: string]: {
      mean: number;
      average: number;
      stdev: number;
    },
  },
}
export default GetReply;
