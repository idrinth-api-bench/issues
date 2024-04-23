export default (date: Date,) => date
  .toISOString()
  .replace(/\.[0-9]+Z$/u, '+00:00',);
