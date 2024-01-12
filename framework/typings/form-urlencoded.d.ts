// Type definitions for form-urlencoded 4
// Project: https://github.com/iambumblehead/form-urlencoded#readme
declare module 'form-urlencoded' {
  interface FormEncodedOptions {
    sorted?: boolean;
    skipIndex?: boolean;
    ignorenull?: boolean;
    skipBracket?: boolean;
    useDot?: boolean;
  }
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-explicit-any
  export default function(data: any, opts?: FormEncodedOptions): string;
}
