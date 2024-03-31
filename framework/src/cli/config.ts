interface Config {
  cwd: string;
  taskId?: string;
  repetitions?: number;
  threads?: number;
  language?: string;
  maximum?: number;
  increment?: number;
  duration?: number;
}
export default Config;
