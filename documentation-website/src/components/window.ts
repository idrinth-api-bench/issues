interface Window {
  location: {
    reload(): void,
  },
  localStorage: {
    getItem(key: string): string,
    setItem(key: string, value: string): string
  },
  Navigator: {
    language: string,
  }
}
export default Window;
