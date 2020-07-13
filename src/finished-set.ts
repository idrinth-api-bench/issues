export interface FinishedSet {
  id: string,
  errors: number;
  count: number;
  avg100: number;
  median100: number;
  min100: number;
  max100: number;
  avg80: number;
  median80: number;
  min80: number;
  max80: number;
  msgs?:{[msg:string]: number}
}
