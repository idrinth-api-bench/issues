import {BASE_10_RADIX, FIRST_ARGUMENT, FOURTH_ARGUMENT, SECOND_ARGUMENT, THIRD_ARGUMENT} from "./constants.js";
import {existsSync} from "fs";
import reqlib from "app-root-path";
import {config} from "dotenv";
import {execSync} from "child_process";

const loadUp = (args: string[],) => {
  let threads = Number.parseInt(
    args[FIRST_ARGUMENT] || '1',
    BASE_10_RADIX,
  );
  const repeats = Number.parseInt(
    args[SECOND_ARGUMENT] || '100',
    BASE_10_RADIX,
  );
  const language = args[THIRD_ARGUMENT] || 'en';
  const increment = Number.parseInt(
    args[FOURTH_ARGUMENT] || '1',
    BASE_10_RADIX,
  );
  do {
    execSync(`node node_modules/bin/iabr ${ threads } ${ repeats } ${ language }`);
    threads += increment;
  } while (true);
};
export default loadUp;
