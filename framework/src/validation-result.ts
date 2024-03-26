export interface ValidationResult {
  duration: number;
  id: string;
  success: boolean;
  msg?: string;
}

export default ValidationResult;
