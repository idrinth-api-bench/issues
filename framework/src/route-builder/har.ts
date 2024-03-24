interface HAR {
  log: {
    entries: [
      {
        request: {
          method: string,
          url: string,
        }
      }
    ]
  }
}
export default HAR;
