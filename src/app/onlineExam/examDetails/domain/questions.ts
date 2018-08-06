import {Option} from './option';

export class Questions {
   type: number;
   questionNumber: number;
   problem: string;
   options: Option[];
   userAnswer: string;
   answer: string;
   status: number;
   grade: number;
}
