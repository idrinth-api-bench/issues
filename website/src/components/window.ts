interface Window {
  localStorage: {
    getItem(key: string): string,
    setItem(key: string, value: string): string
  }
}
export default Window;
