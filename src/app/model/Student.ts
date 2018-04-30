import { User } from './user';
import { Semester } from './semester';
export class Student extends User {
  firstname: string;
  lastname: string;
  transcript: Semester[];
}
