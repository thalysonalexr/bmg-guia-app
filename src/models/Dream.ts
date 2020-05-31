export interface Investment {
  time: number;
  title: string;
  total: number;
}

export type Progress = {
  progress: string;
  state: 'REACHED' | 'WAITING';
};

export interface QuestionOptions {
  id: string;
  answer: string;
  correct: boolean;
}

export interface Questions {
  id: string;
  question: string;
  options: QuestionOptions[];
}

export interface Content {
  title: string;
  content: string;
}

export interface Subtopics {
  id: string;
  title: string;
  progress: Progress[];
  content: Content[];
  questions: Questions[];
}

export interface Topics {
  id: string;
  title: string;
  content: {
    message: string;
    subtopics: Subtopics[];
  };
}

export interface Dream {
  id: string;
  name: string;
  challenge: string;
  investment: Investment;
  progress: Progress[];
  topics: Topics[];
}
