type Event = 'message';
interface Thread {
  terminate: () => void;
  postMessage: (param: unknown) => void;
  on: (
    event: Event,
    handler: (message: unknown, self: Thread) => void
  ) => void;
}
export default Thread;
