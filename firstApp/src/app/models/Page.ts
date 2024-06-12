import { Student } from 'src/app/models/student';

export interface Page {
  content: Student[];
  totalElements: number;
  totalPages: number;
  size:number;
  numberOfElements:number;
}
