export interface Investment {
  time: number;
  title: string;
  total: number;
}

export type Progress = {
  progress: number;
  state: 'REACHED' | 'WAITING';
};

export interface Dream {
  id: string;
  name: string;
  challenge: string;
  investment: Investment;
  progress: Progress[];
}
