interface Config {
  databasePassword?: string;
  databaseDriver?: string;
  databaseTrustedConnection?: string;
  databaseDatabase?: string;
  databasePort?: number;
  databaseUser?: string;
  databaseHost?: string;
  cwd: string;
  taskId?: string;
  repetitions?: number;
  threads?: number;
  language?: string;
  maximum?: number;
  increment?: number;
  duration?: number;
  task: string;
  database?: 'mysql'|'mssql'|'postgres';
}
export default Config;
